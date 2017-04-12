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
package org.jboss.hal.meta;

import java.util.EnumMap;
import java.util.Map;

import static org.jboss.hal.meta.SelectionAwareStatementContext.SELECTION_KEY;
import static org.jboss.hal.meta.StatementContext.Tuple.*;

/**
 * @author Harald Pehl
 */
@SuppressWarnings({"HardCodedStringLiteral", "DuplicateStringLiteralInspection"})
public class TestableStatementContext implements StatementContext {

    private final Map<Tuple, String> context;

    public TestableStatementContext() {
        context = new EnumMap<>(Tuple.class);
        context.put(DOMAIN_CONTROLLER, "master");
        context.put(SELECTED_PROFILE, "full");
        context.put(SELECTED_GROUP, "main-server-group");
        context.put(SELECTED_HOST, "master");
        context.put(SELECTED_SERVER_CONFIG, "server-one");
        context.put(SELECTED_SERVER, "server-one");
    }


    @Override
    public String resolve(final String placeholder) {
        if (SELECTION_KEY.equals(placeholder)) {
            return "selection";
        }
        return null;
    }

    @Override
    public String[] resolveTuple(final String placeholder) {
        Tuple t = Tuple.from(placeholder);
        if (t != null && context.containsKey(t)) {
            String value = context.get(t);
            if (value != null) {
                return new String[]{t.resource(), value};
            }
        }
        return null;
    }

    @Override
    public String domainController() {
        return context.get(DOMAIN_CONTROLLER);
    }

    @Override
    public String selectedProfile() {
        return context.get(SELECTED_PROFILE);
    }

    @Override
    public String selectedServerGroup() {
        return context.get(SELECTED_GROUP);
    }

    @Override
    public String selectedHost() {
        return context.get(SELECTED_HOST);
    }

    @Override
    public String selectedServerConfig() {
        return context.get(SELECTED_SERVER_CONFIG);
    }

    @Override
    public String selectedServer() {
        return context.get(SELECTED_SERVER);
    }
}
