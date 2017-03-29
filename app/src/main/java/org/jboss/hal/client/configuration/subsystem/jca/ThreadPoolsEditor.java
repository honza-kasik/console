/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.configuration.subsystem.jca;

import java.util.ArrayList;
import java.util.List;

import elemental.dom.Element;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.hal.ballroom.Attachable;
import org.jboss.hal.ballroom.Tabs;
import org.jboss.hal.ballroom.table.Options;
import org.jboss.hal.core.mbui.form.ModelNodeForm;
import org.jboss.hal.core.mbui.table.ModelNodeTable;
import org.jboss.hal.core.mbui.table.NamedNodeTable;
import org.jboss.hal.core.mvp.HasPresenter;
import org.jboss.hal.dmr.Property;
import org.jboss.hal.dmr.model.NamedNode;
import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.Metadata;
import org.jboss.hal.meta.MetadataRegistry;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Resources;

import static java.util.Arrays.asList;
import static java.util.Comparator.comparing;
import static java.util.stream.Collectors.toList;
import static org.jboss.hal.ballroom.table.Button.Scope.SELECTED;
import static org.jboss.hal.client.configuration.subsystem.jca.AddressTemplates.WORKMANAGER_LRT_TEMPLATE;
import static org.jboss.hal.dmr.ModelDescriptionConstants.MAX_THREADS;
import static org.jboss.hal.dmr.ModelDescriptionConstants.NAME;
import static org.jboss.hal.dmr.ModelDescriptionConstants.THREAD_FACTORY;
import static org.jboss.hal.resources.Names.THREAD_POOLS;

/**
 * Element to view and manage short and long running thread pools of a (distributed) workmanager. This class assumes
 * that the {@code short-running-threads} and {@code long-running-threads} resources have the same attributes.
 * <p>
 * TODO Implement save and reset callbacks
 *
 * @author Harald Pehl
 */
class ThreadPoolsEditor implements IsElement, Attachable, HasPresenter<JcaPresenter> {

    private final Element root;
    private final List<Attachable> attachables;
    private final NamedNodeTable<ThreadPool> table;
    private final ModelNodeForm<ThreadPool> attributesForm;
    private final ModelNodeForm<ThreadPool> sizingForm;

    private JcaPresenter presenter;
    private AddressTemplate workmanagerTemplate;
    private String workmanager;

    @SuppressWarnings("ConstantConditions")
    ThreadPoolsEditor(final String prefixId, final MetadataRegistry metadataRegistry, final Resources resources) {
        attachables = new ArrayList<>();

        Metadata metadata = metadataRegistry.lookup(WORKMANAGER_LRT_TEMPLATE);
        Options<ThreadPool> options = new ModelNodeTable.Builder<ThreadPool>(metadata)
                .button(resources.constants().add(), (event, api) -> presenter.launchAddThreadPool(workmanagerTemplate,
                        workmanager))
                .button(resources.constants().remove(), SELECTED, (event, api) ->
                        presenter.removeThreadPool(workmanagerTemplate, workmanager, api.selectedRow()))
                .column(NAME)
                .column(resources.constants().type(), (cell, type, row, meta) -> row.getRunningMode())
                .column(MAX_THREADS)
                .build();
        table = new NamedNodeTable<>(Ids.build(prefixId, Ids.JCA_THREAD_POOL_TABLE), options);
        attachables.add(table);

        attributesForm = new ModelNodeForm.Builder<ThreadPool>(
                Ids.build(prefixId, Ids.JCA_THREAD_POOL_ATTRIBUTES_FORM), metadata)
                .include(NAME, "allow-core-timeout", THREAD_FACTORY)
                .unsorted()
                .onSave((form, changedValues) -> presenter.saveThreadPool(workmanagerTemplate, workmanager,
                        form.getModel(), changedValues))
                .prepareReset(form -> presenter.resetThreadPool(workmanagerTemplate, workmanager,
                        form.getModel(), form))
                .build();
        attachables.add(attributesForm);
        sizingForm = new ModelNodeForm.Builder<ThreadPool>(
                Ids.build(prefixId, Ids.JCA_THREAD_POOL_SIZING_FORM), metadata)
                .include(MAX_THREADS, "core-threads", "queue-length")
                .onSave((form, changedValues) -> presenter.saveThreadPool(workmanagerTemplate, workmanager,
                        form.getModel(), changedValues ))
                .prepareReset(form -> presenter.resetThreadPool(workmanagerTemplate, workmanager,
                        form.getModel(), form))
                .build();
        attachables.add(sizingForm);

        Tabs tabs = new Tabs()
                .add(Ids.build(prefixId, Ids.JCA_THREAD_POOL_ATTRIBUTES_TAB), resources.constants().attributes(),
                        attributesForm.asElement())
                .add(Ids.build(prefixId, Ids.JCA_THREAD_POOL_SIZING_TAB), resources.constants().sizing(),
                        sizingForm.asElement());

        // @formatter:off
        Elements.Builder builder = new Elements.Builder()
            .section()
                .h(1).textContent(THREAD_POOLS).end()
                .p().textContent(metadata.getDescription().getDescription()).end()
                .add(table)
                .add(tabs)
            .end();
        // @formatter:on

        root = builder.build();
    }

    @Override
    public Element asElement() {
        return root;
    }

    @Override
    public void attach() {
        attachables.forEach(Attachable::attach);
        table.bindForms(asList(attributesForm, sizingForm));
    }

    @Override
    public void detach() {
        attachables.forEach(Attachable::detach);
    }

    @Override
    public void setPresenter(final JcaPresenter presenter) {
        this.presenter = presenter;
    }

    void update(AddressTemplate workmanagerTemplate, String workmanager,
            List<Property> longRunningThreads, List<Property> shortRunningThreads) {
        this.workmanagerTemplate = workmanagerTemplate;
        this.workmanager = workmanager;

        List<ThreadPool> lrt = longRunningThreads.stream()
                .map(property -> new ThreadPool(property, true))
                .collect(toList());
        List<ThreadPool> srt = shortRunningThreads.stream()
                .map(property -> new ThreadPool(property, false))
                .collect(toList());

        List<ThreadPool> threadPools = new ArrayList<>(lrt);
        threadPools.addAll(srt);
        threadPools.sort(comparing(NamedNode::getName));

        attributesForm.clear();
        sizingForm.clear();
        table.update(threadPools, ThreadPool::id);
        table.api().button(0).enable(threadPools.size() < 2);
    }
}