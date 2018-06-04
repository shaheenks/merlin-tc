const queries = [
    `<query query-type= "ancestral" >
    <statement>
    <term input-name = "entities.INST PRODUCT SUB TYPE" >
    <equals value = "LOAN_T"/>
    </term>
    </statement>
    </query>`,
    `<query query-type = "composite-node" validate = "true">
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION">
    <like pattern = "*_DIVHIER"/>
    </term>
    </statement>
    <statement>
    <term input-name = "attributes.CURRENCY.CURRENCY">
    <equals value = "GBP"/>
    </term>
    </statement>
    </query>`,
    `<query query-type = "flags-and-limits" validate = "true">
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION" implicit-search = "Hierarchy" levels-up = "2">
    <equals value = "GS_TOT_DVTD"/>
    <equals value = "GS_TOT_FMMT"/>
    <equals value = "SB_TOT_CHUB"/>
    </term>
    </statement>
    <input-scope inscope = "non-tactical-limit"/>
    <input-scope inscope = "tactical-limit"/>
    </query>`,
    `<query query-type= "internal-collections-expanded" >
    <statement>
    <term input-name = "internalCollections" >
    <equals value = "TOTAL_VAR"/>
    </term>
    </statement>
    </query>`,
    `<query query-type = "impact" validate = "true" cob-date = "20180529" script-list-name = "Karishma">
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION" implicit-search = "Hierarchy" levels-up = "2">
    <equals value = "GS_TOT_DVTD"/>
    <equals value = "GS_TOT_FMMT"/>
    <equals value = "SB_TOT_CHUB"/>
    </term>
    <term input-name = "attributes.LEGAL ENTITY">
    <equals value = "LEGAL ENTITY"/>
    </term>
    </statement>
    <statement>
    <term input-name = "riskTypes" implicit-search= "Full">
    <equals value = "FXDELTA"/>
    <equals value = "MTMVALUE"/>
    <equals value = "FXGAMMA"/>
    </term>
    </statement>
    <statement>
    <term input-name = "attributes.CREDIT RATING.CREDIT RATING BBB AND BELOW">
    <equals value = "BBB"/>
    <equals value = "CCC"/>
    </term>
    </statement>
    <output-scope outscope= "mars"/>
    <output-scope outscope= "clusternet"/>
    <additional-breakdown input-name= "calculationMethod"/>
    </query>`,
    `<query query-type = "impact" validate = "true" cob-date = "20180529">
    <statement>
    <term input-name = "riskTypes">
    <equals value = "FXDELTA"/>
    <equals value = "MTMVALUE"/>
    <equals value = "FXGAMMA"/>
    </term>
    </statement>
    <output-scope outscope= "mars"/>
    <output-scope outscope= "clusternet"/>
    <additional-breakdown input-name = "calculationMethod"/>
    </query>`,
    `<query query-type= "internal-collections" >
    <statement>
    <term input-name = "internalCollections" >
    <equals value = "NET_FX"/>
    </term>
    </statement>
    <statement>
    <term input-name = "riskTypes" >
    <equals value = "FXDELTA"/>
    </term>
    </statement>
    <statement>
    <term input-name = "attributes.VALUATION INDICATOR" >
    <equals value = "MIS"/>
    </term>
    </statement>
    </query>`,
    `<query query-type= "mars-schedules" validate = "true">
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION" implicit-search = "Hierarchy" levels-down = "2">
    <equals value = "FBC_12CR"/>
    <equals value ="FBC_P602"/>
    <equals value ="FBC_P610"/>
    <equals value ="FBC_P646"/>
    <equals value ="FBC_P655"/>
    <equals value ="GS_CLS_E2CM_DIVHIER"/>
    <equals value ="GS_CLS_ECT2_DIVHIER"/>
    <equals value ="GS_CLS_ELVJ"/>
    <equals value ="GS_PL_MRTG"/>
    <equals value ="GS_PL_WSQ2"/>
    <equals value ="GS_PL2_C148"/>
    <equals value ="GS_PL2_C154"/>
    <equals value ="GS_PL2_C155"/>
    <equals value ="GS_PL2_C156"/>
    <equals value ="GS_PL2_C167"/>
    <equals value ="GS_PL2_CRIO"/>
    <equals value ="GS_PL2_D1ET"/>
    </term>
    </statement>
    </query>`,
    `<query query-type = "reorg" validate = "true" cob-date = "20180529">
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION" implicit-search = "Full" levels-down = "2">
    <equals value = "FBC_12CR"/>
    <equals value ="FBC_P602"/>
    <equals value ="FBC_P610"/>
    <equals value ="FBC_P646"/>
    <equals value ="FBC_P655"/>
    <equals value ="GS_CLS_E2CM_DIVHIER"/>
    <equals value ="GS_CLS_ECT2_DIVHIER"/>
    <equals value ="GS_CLS_ELVJ"/>
    <equals value ="GS_PL_MRTG"/>
    <equals value ="GS_PL_WSQ2"/>
    <equals value ="GS_PL2_C148"/>
    <equals value ="GS_PL2_C154"/>
    <equals value ="GS_PL2_C155"/>
    <equals value ="GS_PL2_C156"/>
    <equals value ="GS_PL2_C167"/>
    <equals value ="GS_PL2_CRIO"/>
    <equals value ="GS_PL2_D1ET"/>
    </term>
    </statement>
    <output-scope outscope= "mars"/>
    <output-scope outscope= "clusternet"/>
    <additional-breakdown input-name = "internalCollections"/>
    </query>`,
    `<query query-type = "report-tree" validate = "true">
    <statement>
    <term input-name = "compositeNodes">
    <like pattern = "*_MACRO"/>
    </term>
    </statement>
    <statement>
    <term input-name = "businessOrganisation.BUSINESS ORGANISATION">
    <equals value = "GS_DIV_GSGF"/>
    </term>
    </statement>
    <statement>
    <term input-name = "attributes.CURRENCY.CURRENCY">
    <equals value = "AUD"/>
    </term>
    </statement>
    </query>`
];

module.exports = {
    queries
}