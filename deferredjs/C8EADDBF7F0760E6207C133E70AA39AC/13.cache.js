$wnd.hal.runAsyncCallback13("defineClass(1810, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_Attribute_0(){\n  $clinit_Attribute_0 = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Attribute_0(name_0){\n  $clinit_Attribute_0();\n  Attribute_1.call(this, name_0, ($clinit_Attribute$Scope() , BOTH));\n}\n\nfunction Attribute_1(name_0, scope_0){\n  $clinit_Attribute_0();\n  Object_0.call(this);\n  this.$init_1019();\n  this.name_0 = name_0;\n  this.scope_0 = scope_0;\n}\n\ndefineClass(70, 1, {1:1, 70:1}, Attribute_0, Attribute_1);\n_.$init_1019 = function $init_1019(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute', 70, Ljava_lang_Object_2_classLit);\nfunction $clinit_Attribute$Scope(){\n  $clinit_Attribute$Scope = emptyMethod;\n  $clinit_Enum();\n  BOTH = new Attribute$Scope('BOTH', 0);\n  NON_XA = new Attribute$Scope('NON_XA', 1);\n  XA = new Attribute$Scope('XA', 2);\n}\n\nfunction Attribute$Scope(enum$name, enum$ordinal){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.$init_1020();\n}\n\nfunction valueOf_62(name_0){\n  $clinit_Attribute$Scope();\n  return valueOf_0(($clinit_Attribute$Scope$Map() , $MAP_40), name_0);\n}\n\nfunction values_56(){\n  $clinit_Attribute$Scope();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit, 1), {3:1, 20:1, 1:1, 4:1}, 561, 0, [BOTH, NON_XA, XA]);\n}\n\ndefineClass(561, 15, {3:1, 19:1, 15:1, 1:1, 561:1}, Attribute$Scope);\n_.$init_1020 = function $init_1020(){\n}\n;\nvar BOTH, NON_XA, XA;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit = createForEnum('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute/Scope', 561, Ljava_lang_Enum_2_classLit, values_56, valueOf_62);\nfunction $clinit_Attribute$Scope$Map(){\n  $clinit_Attribute$Scope$Map = emptyMethod;\n  $MAP_40 = createValueOfMap(values_56());\n}\n\nvar $MAP_40;\nfunction $clinit_DataSourcePresenter(){\n  $clinit_DataSourcePresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction DataSourcePresenter(eventBus, view, proxy, finder, crud, finderPathFactory, metadataRegistry, statementContext){\n  $clinit_DataSourcePresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1024();\n  this.crud_0 = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.metadataRegistry_0 = metadataRegistry;\n  this.statementContext_0 = statementContext;\n}\n\ndefineClass(726, 132, {53:1, 46:1, 1:1, 26:1, 7:1, 726:1, 92:1, 77:1}, DataSourcePresenter);\n_.$init_1024 = function $init_1024(){\n}\n;\n_.lambda$0_63 = function lambda$0_121(result_0){\n  $clinit_DataSourcePresenter();\n  castTo(this.getView(), 6343).update_16(new DataSource(this.name_0, result_0, this.xa));\n}\n;\n_.finderPath = function finderPath_5(){\n  return this.finderPathFactory.configurationSubsystemPath('datasources').append_22('data-source-driver', 'datasources', 'Datasources & Drivers', 'Datasources').append_22('ds-configuration', dataSourceConfiguration(this.name_0, this.xa), 'Datasource', this.name_0);\n}\n;\n_.metadata_5 = function metadata_5(){\n  return this.metadataRegistry_0.lookup_3(this.xa?($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE):($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE));\n}\n;\n_.onBind = function onBind_8(){\n  getClassPrototype(74).onBind.call(this);\n  castTo(this.getView(), 6343).setPresenter(this);\n}\n;\n_.onReset = function onReset_5(){\n  getClassPrototype(132).onReset.call(this);\n  this.reload_0();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_6(request){\n  getClassPrototype(140).prepareFromRequest.call(this, request);\n  this.name_0 = request.getParameter_0('name', null);\n  this.xa = booleanValue__Z__devirtual$(valueOf_18(request.getParameter_0('xa', valueOf_32(false))));\n}\n;\n_.reload_0 = function reload_9(){\n  this.crud_0.read_4(this.resourceAddress(), makeLambdaFunction(DataSourcePresenter$lambda$0$Type.prototype.execute_10, DataSourcePresenter$lambda$0$Type, [this]));\n}\n;\n_.resetDataSource = function resetDataSource(form_0){\n  this.crud_0.reset_26(this.type_7(), this.name_0, this.resourceAddress(), form_0, this.metadata_5(), new DataSourcePresenter$1methodref$reload$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_3(){\n  return this.xa?($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE).resolve(this.statementContext_0, this.name_0):($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE).resolve(this.statementContext_0, this.name_0);\n}\n;\n_.saveDataSource = function saveDataSource(changedValues){\n  this.crud_0.save_12(this.type_7(), this.name_0, this.resourceAddress(), changedValues, this.metadata_5(), new DataSourcePresenter$0methodref$reload$Type(this));\n}\n;\n_.type_7 = function type_8(){\n  return this.xa?'Datasource':'XA Datasource';\n}\n;\n_.xa = false;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter', 726, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_DataSourcePresenter$0methodref$reload$Type(){\n  $clinit_DataSourcePresenter$0methodref$reload$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$0methodref$reload$Type($$outer_0){\n  $clinit_DataSourcePresenter$0methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2196, 1, {1:1, 12:1}, DataSourcePresenter$0methodref$reload$Type);\n_.execute_1 = function execute_105(){\n  this.$$outer_0.reload_0();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$0methodref$reload$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/0methodref$reload$Type', 2196, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourcePresenter$1methodref$reload$Type(){\n  $clinit_DataSourcePresenter$1methodref$reload$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$1methodref$reload$Type($$outer_0){\n  $clinit_DataSourcePresenter$1methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2197, 1, {1:1, 12:1}, DataSourcePresenter$1methodref$reload$Type);\n_.execute_1 = function execute_106(){\n  this.$$outer_0.reload_0();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$1methodref$reload$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/1methodref$reload$Type', 2197, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourcePresenter$MyView(){\n  $clinit_DataSourcePresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/MyView');\nfunction $clinit_DataSourcePresenter$lambda$0$Type(){\n  $clinit_DataSourcePresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$0$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(7777, $wnd.Function, {1:1}, DataSourcePresenter$lambda$0$Type);\n_.execute_10 = function execute_107(arg0){\n  this.$$outer_0.lambda$0_63(arg0);\n}\n;\nfunction $clinit_DataSourceView(){\n  $clinit_DataSourceView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n  CONSTANTS_17 = castTo(new Constants_, 151);\n  attributes_0 = create_3();\n  {\n    attributes_0.putAll_0(CONSTANTS_17.attributes_0(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_1('datasource-class', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_1('driver-class', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_0('driver-name'), new Attribute_0('enabled'), new Attribute_0('jndi-name'), new Attribute_0('statistics-enabled'), new Attribute_1('xa-datasource-class', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll_0(CONSTANTS_17.connection(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_1('connection-url', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_0('connection-listener-class'), new Attribute_0('connection-listener-property'), new Attribute_1('interleaving', ($clinit_Attribute$Scope() , XA)), new Attribute_1('jta', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_0('new-connection-sql'), new Attribute_1('pad-xid', ($clinit_Attribute$Scope() , XA)), new Attribute_1('same-rm-override', ($clinit_Attribute$Scope() , XA)), new Attribute_0('transaction-isolation'), new Attribute_0('url-delimiter'), new Attribute_1('url-property', ($clinit_Attribute$Scope() , XA)), new Attribute_0('url-selector-strategy-class-name'), new Attribute_0('use-ccm'), new Attribute_1('wrap-xa-resource', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll_0(CONSTANTS_17.pool_0(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_0('initial-pool-size'), new Attribute_0('min-pool-size'), new Attribute_0('max-pool-size'), new Attribute_0('flush-strategy'), new Attribute_0('pool-fair'), new Attribute_0('pool-prefill'), new Attribute_0('pool-use-strict-min'), new Attribute_0('use-fast-fail'), new Attribute_0('capacity-incrementer-class'), new Attribute_0('capacity-incrementer-properties'), new Attribute_0('capacity-decrementer-class'), new Attribute_0('capacity-decrementer-properties'), new Attribute_1('no-recovery', ($clinit_Attribute$Scope() , XA)), new Attribute_1('tx-separate-pool', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll_0(CONSTANTS_17.security(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_0('user-name'), new Attribute_0('password'), new Attribute_0('authentication-context'), new Attribute_0('security-domain'), new Attribute_0('allow-multiple-users'), new Attribute_0('reauth-plugin-class-name'), new Attribute_0('reauth-plugin-properties'), new Attribute_1('recovery-username', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-password', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-security-domain', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-class-name', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-properties', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.put_1('credential-reference', null);\n    attributes_0.putAll_0(CONSTANTS_17.validation(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_0('check-valid-connection-sql'), new Attribute_0('valid-connection-checker-class-name'), new Attribute_0('valid-connection-checker-properties'), new Attribute_0('validate-on-match'), new Attribute_0('background-validation'), new Attribute_0('background-validation-millis'), new Attribute_0('stale-connection-checker-class-name'), new Attribute_0('stale-connection-checker-properties'), new Attribute_0('exception-sorter-class-name'), new Attribute_0('exception-sorter-properties')])));\n    attributes_0.putAll_0(CONSTANTS_17.timeouts(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_0('use-try-lock'), new Attribute_0('blocking-timeout-wait-millis'), new Attribute_0('idle-timeout-minutes'), new Attribute_0('set-tx-query-timeout'), new Attribute_0('query-timeout'), new Attribute_0('allocation-retry'), new Attribute_0('allocation-retry-wait-millis'), new Attribute_1('xa-resource-timeout', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll_0(CONSTANTS_17.statements() + ' / ' + CONSTANTS_17.tracking(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {3:1, 1:1, 4:1}, 70, 0, [new Attribute_0('spy'), new Attribute_0('tracking'), new Attribute_0('track-statements'), new Attribute_0('share-prepared-statements'), new Attribute_0('prepared-statements-cache-size'), new Attribute_0('enlistment-trace')])));\n  }\n}\n\nfunction DataSourceView(metadataRegistry, credentialReference, resources){\n  $clinit_DataSourceView();\n  var group, group$iterator, groupAttributes, nonXaFormBuilder, nonXaId, nonXaMeta, nonXaNames, prepareReset, saveCallback, xaFormBuilder, xaId, xaMeta, xaNames;\n  HalViewImpl.call(this);\n  this.$init_1031();\n  this.resources = resources;\n  saveCallback = new DataSourceView$lambda$0$Type(this);\n  prepareReset = new DataSourceView$lambda$1$Type(this);\n  nonXaMeta = metadataRegistry.lookup_3(($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE));\n  this.nonXaInfo = castTo(p_2().textContent_0(nonXaMeta.description.description), 5).asElement_0();\n  nonXaFormBuilder = (new GroupedForm$Builder('ds-configuration-form', nonXaMeta)).onSave_1(saveCallback).prepareReset_0(prepareReset);\n  xaMeta = metadataRegistry.lookup_3(($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE));\n  this.xaInfo = castTo(p_2().textContent_0(xaMeta.description.description), 5).asElement_0();\n  xaFormBuilder = (new GroupedForm$Builder('xa-data-source-form', xaMeta)).onSave_1(saveCallback);\n  for (group$iterator = attributes_0.keySet_1().iterator_0(); group$iterator.hasNext_0();) {\n    group = castToString(group$iterator.next_1());\n    nonXaId = build_29('ds-configuration', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, [group]));\n    xaId = build_29('xa-data-source', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, [group]));\n    if (equals_Ljava_lang_Object__Z__devirtual$_0('credential-reference', group)) {\n      this.nonXaCrForm = credentialReference.form_5('ds-configuration', nonXaMeta, 'password', new DataSourceView$lambda$2$Type(this), new DataSourceView$lambda$3$Type(this), new DataSourceView$lambda$4$Type(this));\n      this.registerAttachable(this.nonXaCrForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, []));\n      nonXaFormBuilder.customGroup(nonXaId, 'Credential Reference').add_60(this.nonXaCrForm).end();\n      this.xaCrForm = credentialReference.form_5('xa-data-source', xaMeta, 'password', new DataSourceView$lambda$5$Type(this), new DataSourceView$lambda$6$Type(this), new DataSourceView$lambda$7$Type(this));\n      this.registerAttachable(this.xaCrForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, []));\n      xaFormBuilder.customGroup(xaId, 'Credential Reference').add_60(this.xaCrForm).end();\n    }\n     else {\n      groupAttributes = attributes_0.get_4(group);\n      nonXaNames = castTo(groupAttributes.stream().filter_1(new DataSourceView$lambda$8$Type).map_3(new DataSourceView$lambda$9$Type).collect_1(toList()), 21);\n      nonXaFormBuilder.customGroup(nonXaId, group).include_1(nonXaNames).end();\n      xaNames = castTo(groupAttributes.stream().filter_1(new DataSourceView$lambda$10$Type).map_3(new DataSourceView$lambda$11$Type).collect_1(toList()), 21);\n      xaFormBuilder.customGroup(xaId, group).include_1(xaNames).end();\n    }\n  }\n  this.nonXaForm = nonXaFormBuilder.build_19();\n  this.nonXaForm.addFormValidation(new CredentialReference$AlternativeValidation('password', new DataSourceView$lambda$12$Type(this), resources));\n  this.xaForm = xaFormBuilder.build_19();\n  this.xaForm.addFormValidation(new CredentialReference$AlternativeValidation('password', new DataSourceView$lambda$13$Type(this), resources));\n  this.registerAttachable(this.nonXaForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, []));\n  this.registerAttachable(this.xaForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, []));\n  this.initElement(castTo(row_4().add_18(castTo(castTo(castTo(castTo(castTo(column_7().add_16(this.header_0 = castTo(h_0(1).textContent_0('Datasource'), 5).asElement_0()), 5).add_16(this.nonXaInfo), 5).add_16(this.xaInfo), 5).add_18(this.nonXaForm), 5).add_18(this.xaForm), 7)), 5).asElement_0());\n}\n\nfunction lambda$10_14(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , XA));\n}\n\nfunction lambda$11_11(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\nfunction lambda$8_20(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , NON_XA));\n}\n\nfunction lambda$9_18(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\ndefineClass(3053, 51, {1:1, 26:1, 7:1, 6343:1, 40:1}, DataSourceView);\n_.$init_1031 = function $init_1031(){\n}\n;\n_.lambda$0_64 = function lambda$0_124(f_0, changedValues_1){\n  $clinit_DataSourceView();\n  this.presenter.saveDataSource(changedValues_1);\n}\n;\n_.lambda$1_34 = function lambda$1_74(f_0){\n  $clinit_DataSourceView();\n  this.presenter.resetDataSource(f_0);\n}\n;\n_.lambda$12_0 = function lambda$12_8(){\n  $clinit_DataSourceView();\n  return castTo(this.nonXaCrForm.model, 14);\n}\n;\n_.lambda$13_1 = function lambda$13_6(){\n  $clinit_DataSourceView();\n  return castTo(this.xaCrForm.model, 14);\n}\n;\n_.lambda$2_29 = function lambda$2_56(){\n  $clinit_DataSourceView();\n  return castToString(this.nonXaForm.getFormItem('password').getValue_0());\n}\n;\n_.lambda$3_23 = function lambda$3_41(){\n  $clinit_DataSourceView();\n  return this.presenter.resourceAddress();\n}\n;\n_.lambda$4_25 = function lambda$4_36(){\n  $clinit_DataSourceView();\n  this.presenter.reload_0();\n}\n;\n_.lambda$5_18 = function lambda$5_31(){\n  $clinit_DataSourceView();\n  return castToString(this.xaForm.getFormItem('password').getValue_0());\n}\n;\n_.lambda$6_19 = function lambda$6_25(){\n  $clinit_DataSourceView();\n  return this.presenter.resourceAddress();\n}\n;\n_.lambda$7_14 = function lambda$7_21(){\n  $clinit_DataSourceView();\n  this.presenter.reload_0();\n}\n;\n_.setPresenter = function setPresenter_3(presenter){\n  this.setPresenter_2(castTo(presenter, 726));\n}\n;\n_.setPresenter_2 = function setPresenter_4(presenter){\n  this.presenter = presenter;\n}\n;\n_.showHide = function showHide(xa){\n  setVisible(this.nonXaInfo, !xa);\n  setVisible(this.xaInfo, xa);\n  setVisible(this.nonXaForm.asElement_0(), !xa);\n  setVisible(this.xaForm.asElement_0(), xa);\n}\n;\n_.update_16 = function update_30(dataSource){\n  this.showHide(dataSource.isXa_1());\n  this.header_0.innerHTML = (new SafeHtmlBuilder).appendEscaped(dataSource.name).appendHtmlConstant('<small>').appendEscaped(' (').appendEscaped(dataSource.isEnabled()?this.resources.constants_0().enabled_1():this.resources.constants_0().disabled_1()).appendEscaped(')').appendHtmlConstant('<\\/small>').toSafeHtml().asString_0();\n  if (dataSource.isXa_1()) {\n    this.xaForm.view(dataSource);\n    if (isNotNull(this.xaCrForm)) {\n      this.xaCrForm.view(failSafeGet(dataSource, 'credential-reference'));\n    }\n  }\n   else {\n    this.nonXaForm.view(dataSource);\n    if (isNotNull(this.nonXaCrForm)) {\n      this.nonXaCrForm.view(failSafeGet(dataSource, 'credential-reference'));\n    }\n  }\n}\n;\nvar CONSTANTS_17, attributes_0;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView', 3053, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_DataSourceView$lambda$0$Type(){\n  $clinit_DataSourceView$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$0$Type($$outer_0){\n  $clinit_DataSourceView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3054, 1, {1:1}, DataSourceView$lambda$0$Type);\n_.onSave_0 = function onSave_12(arg0, arg1){\n  this.$$outer_0.lambda$0_64(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$0$Type', 3054, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$1$Type(){\n  $clinit_DataSourceView$lambda$1$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$1$Type($$outer_0){\n  $clinit_DataSourceView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3055, 1, {1:1}, DataSourceView$lambda$1$Type);\n_.beforeReset = function beforeReset_9(arg0){\n  this.$$outer_0.lambda$1_34(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$1$Type', 3055, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$10$Type(){\n  $clinit_DataSourceView$lambda$10$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$10$Type(){\n  $clinit_DataSourceView$lambda$10$Type();\n}\n\ndefineClass(3064, 1, {1:1, 23:1}, DataSourceView$lambda$10$Type);\n_.and = function and_41(other){\n  return $and(this, other);\n}\n;\n_.or_1 = function or_47(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_42(arg0){\n  return lambda$10_14(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$10$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$10$Type', 3064, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$11$Type(){\n  $clinit_DataSourceView$lambda$11$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$11$Type(){\n  $clinit_DataSourceView$lambda$11$Type();\n}\n\ndefineClass(3065, 1, {1:1}, DataSourceView$lambda$11$Type);\n_.andThen = function andThen_92(after){\n  return $andThen(this, after);\n}\n;\n_.apply_2 = function apply_119(arg0){\n  return lambda$11_11(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$11$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$11$Type', 3065, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$12$Type(){\n  $clinit_DataSourceView$lambda$12$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$12$Type($$outer_0){\n  $clinit_DataSourceView$lambda$12$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3066, 1, {1:1, 27:1}, DataSourceView$lambda$12$Type);\n_.get_0 = function get_151(){\n  return this.$$outer_0.lambda$12_0();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$12$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$12$Type', 3066, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$13$Type(){\n  $clinit_DataSourceView$lambda$13$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$13$Type($$outer_0){\n  $clinit_DataSourceView$lambda$13$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3067, 1, {1:1, 27:1}, DataSourceView$lambda$13$Type);\n_.get_0 = function get_152(){\n  return this.$$outer_0.lambda$13_1();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$13$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$13$Type', 3067, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$2$Type(){\n  $clinit_DataSourceView$lambda$2$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$2$Type($$outer_0){\n  $clinit_DataSourceView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3056, 1, {1:1, 27:1}, DataSourceView$lambda$2$Type);\n_.get_0 = function get_153(){\n  return this.$$outer_0.lambda$2_29();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$2$Type', 3056, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$3$Type(){\n  $clinit_DataSourceView$lambda$3$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$3$Type($$outer_0){\n  $clinit_DataSourceView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3057, 1, {1:1, 27:1}, DataSourceView$lambda$3$Type);\n_.get_0 = function get_154(){\n  return this.$$outer_0.lambda$3_23();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$3$Type', 3057, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$4$Type(){\n  $clinit_DataSourceView$lambda$4$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$4$Type($$outer_0){\n  $clinit_DataSourceView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3058, 1, {1:1, 12:1}, DataSourceView$lambda$4$Type);\n_.execute_1 = function execute_108(){\n  this.$$outer_0.lambda$4_25();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$4$Type', 3058, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$5$Type(){\n  $clinit_DataSourceView$lambda$5$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$5$Type($$outer_0){\n  $clinit_DataSourceView$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3059, 1, {1:1, 27:1}, DataSourceView$lambda$5$Type);\n_.get_0 = function get_155(){\n  return this.$$outer_0.lambda$5_18();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$5$Type', 3059, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$6$Type(){\n  $clinit_DataSourceView$lambda$6$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$6$Type($$outer_0){\n  $clinit_DataSourceView$lambda$6$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3060, 1, {1:1, 27:1}, DataSourceView$lambda$6$Type);\n_.get_0 = function get_156(){\n  return this.$$outer_0.lambda$6_19();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$6$Type', 3060, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$7$Type(){\n  $clinit_DataSourceView$lambda$7$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$7$Type($$outer_0){\n  $clinit_DataSourceView$lambda$7$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3061, 1, {1:1, 12:1}, DataSourceView$lambda$7$Type);\n_.execute_1 = function execute_109(){\n  this.$$outer_0.lambda$7_14();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$7$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$7$Type', 3061, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$8$Type(){\n  $clinit_DataSourceView$lambda$8$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$8$Type(){\n  $clinit_DataSourceView$lambda$8$Type();\n}\n\ndefineClass(3062, 1, {1:1, 23:1}, DataSourceView$lambda$8$Type);\n_.and = function and_42(other){\n  return $and(this, other);\n}\n;\n_.or_1 = function or_48(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_43(arg0){\n  return lambda$8_20(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$8$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$8$Type', 3062, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$9$Type(){\n  $clinit_DataSourceView$lambda$9$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$9$Type(){\n  $clinit_DataSourceView$lambda$9$Type();\n}\n\ndefineClass(3063, 1, {1:1}, DataSourceView$lambda$9$Type);\n_.andThen = function andThen_93(after){\n  return $andThen(this, after);\n}\n;\n_.apply_2 = function apply_120(arg0){\n  return lambda$9_18(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$9$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$9$Type', 3063, Ljava_lang_Object_2_classLit);\ndefineClass(1849, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_elytron().get_Key$type$org$jboss$hal$core$elytron$CredentialReference$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new DataSourcePresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(_0, _1, _2){\n  return new DataSourceView(_0, _1, _2);\n}\n;\ndefineClass(1851, 1, {41:1, 1:1});\n_.onSuccess_2 = function onSuccess_44(){\n  this.val$callback2.onSuccess_1(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$());\n}\n;\ndefineClass(145, 1, {1:1, 151:1});\n_.statements = function statements(){\n  return 'Statements';\n}\n;\n_.timeouts = function timeouts(){\n  return 'Timeouts';\n}\n;\n_.tracking = function tracking(){\n  return 'Tracking';\n}\n;\n$entry(onLoad_1)(13);\n\n//# sourceURL=hal-13.js\n")