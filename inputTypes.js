const inputTypes = `<merlin-response request-type="input-names" response-type="input-names">
  <input input-name="calculationMethod" display_name="Calculation Method"/>
  <input input-name="entities" display_name="MaRS Entities" implicit_flavors="Both"/>
  <input input-name="attributes" display_name="MaRS Attributes" implicit_flavors="Both"/>
  <input input-name="businessOrganisation" display_name="Business Organisation" implicit_flavors="Both"/>
  <input input-name="riskTypes" display_name="Risk Types" implicit_flavors="Full"/>
  <input input-name="parameters" display_name="Parameters"/>
  <input input-name="internalCollections" display_name="Internal Collections" implicit_flavors="Full"/>
  <input input-name="reportTrees" display_name="Report Trees"/>
  <input input-name="compositeNodes" display_name="Composite Nodes" implicit_flavors="Full"/>
  <input input-name="others" display_name="Others"/>
  <input input-name="others.nonlinear var"/>
  <input input-name="others.VaRMethodology"/>
  <input input-name="others.UseZeroCorrXMove"/>
  <input input-name="others.UseRisks"/>
  <input input-name="others.UseExtremeMove"/>
  <input input-name="others.UseBenchMarkCorrelation"/>
  <input input-name="others.UDMLEGALENTITY"/>
  <input input-name="others.UDMGROUP"/>
  <input input-name="others.UDMFORMAT"/>
  <input input-name="others.UDMBREAKDOWN"/>
  <input input-name="others.TickerVersionClass"/>
  <input input-name="others.TickerVersion"/>
  <input input-name="others.SPOTPRICECOORDINATE"/>
  <input input-name="others.SPATIAL"/>
  <input input-name="others.SCENARIO EXPRESSION"/>
  <input input-name="others.REPORT DEFAULT SPREADS ONLY"/>
  <input input-name="others.RDS_MATURITY"/>
  <input input-name="others.ParameterVersion"/>
  <input input-name="others.LISTBYTSTICKERIGNORESETS"/>
  <input input-name="others.IRC_18M"/>
  <input input-name="others.IRCSCENARIO"/>
  <input input-name="others.IRCMULTIFACTORCONFIGID"/>
  <input input-name="others.IMPLIEDRATINGVERSION"/>
  <input input-name="others.HoldingPeriod"/>
  <input input-name="others.FILE STRUCTURE"/>
  <input input-name="others.EnableLogging"/>
  <input input-name="others.ENFORCE CVA ALLOCATION"/>
  <input input-name="others.ReferenceVersion"/>
  <input input-name="others.CVAREFERENCEDATE"/>
  <input input-name="others.CVAEXCLUDEPROXYHEDGES"/>
  <input input-name="others.COBDate"/>
  <input input-name="others.Legal Entity"/>
  <input input-name="others.COBDATE"/>
  <input input-name="others.BUSINESS ORGANISATION_1"/>
  <input input-name="others.BUSINESS ORGANISATION1"/>
  <input input-name="others.BUS ORG"/>
  <input input-name="others.#Value#"/>
  <input input-name="others.USENRSHORTPOSITIONS"/>
  <input input-name="attributes.GBM BOOK ORGANISATION"/>
  <input input-name="attributes.FULL REVAL IND"/>
  <input input-name="attributes.VALUATION INDICATOR"/>
  <input input-name="attributes.EQ REGION"/>
  <input input-name="attributes.MAS COUNTRY"/>
  <input input-name="attributes.ENTITY TYPE"/>
  <input input-name="others.VaR Comp"/>
  <input input-name="attributes.COUNTRY NAME"/>
  <input input-name="attributes.DELIVERY SEGMENT"/>
  <input input-name="others.ReferenceDate"/>
  <input input-name="attributes.CURRENCY.EMG CURRENCIES"/>
  <input input-name="others.VOLATILITY_LAMBDA"/>
  <input input-name="attributes.CCAR COUNTRY"/>
  <input input-name="attributes.ASSET REFERENCE INTERNAL"/>
  <input input-name="attributes.GEOGRAPHIC REGION"/>
  <input input-name="attributes.DEBT TYPE"/>
  <input input-name="others.ERCEMGTickerVersion"/>
  <input input-name="attributes.CURRENCY.SWAPSPREAD INFLATION"/>
  <input input-name="attributes.ASSET REFERENCE"/>
  <input input-name="attributes.FULL REVAL FLAG"/>
  <input input-name="attributes.VOLCKER SUB DIVISION"/>
  <input input-name="attributes.CVA COUNTERPARTY"/>
  <input input-name="attributes.CURVE"/>
  <input input-name="attributes.MBS INSTRUMENT TYPE.MBS INSTRUMENT TYPE"/>
  <input input-name="attributes.CURRENCY.EURO"/>
  <input input-name="entities.PARTICIPANT"/>
  <input input-name="attributes.CROSS TYPE"/>
  <input input-name="attributes.PRODUCT TYPE"/>
  <input input-name="attributes.CREDIT RATING.CREDIT RATING"/>
  <input input-name="attributes.CREDIT LINE TYPE"/>
  <input input-name="attributes.REGION"/>
  <input input-name="attributes.COUNTRY"/>
  <input input-name="attributes.COMPONENT ID"/>
  <input input-name="attributes.CCAR REVAL INDICATOR"/>
  <input input-name="attributes.OFFICE CODE"/>
  <input input-name="attributes.CCAR REGIONAL GROUPING"/>
  <input input-name="attributes.CCAR RATING"/>
  <input input-name="attributes.CURRENCY.CURRENCY"/>
  <input input-name="attributes.CCAR INDEX GROUPING"/>
  <input input-name="attributes.INDEX"/>
  <input input-name="attributes.SECURITISATION INDICATOR"/>
  <input input-name="others.UDMMODELVERSION"/>
  <input input-name="attributes.CCAR GOVERNMENT GROUPING"/>
  <input input-name="attributes.ACCT METHOD"/>
  <input input-name="attributes.DELIVERY MONTH"/>
  <input input-name="entities.INST PRODUCT SUB TYPE"/>
  <input input-name="attributes.RISK FACTOR INSTRUMENT"/>
  <input input-name="attributes.LONG SHORT INDICATOR"/>
  <input input-name="others.TARGET BUSINESS ORGANISATION"/>
  <input input-name="attributes.CCAR 14Q REVAL INDICATOR DELTA"/>
  <input input-name="attributes.MDS CURVE KEY"/>
  <input input-name="entities.PRODUCT CLASS"/>
  <input input-name="attributes.SCENARIO.SCENARIO"/>
  <input input-name="others.TickerVersionDate"/>
  <input input-name="attributes.MAS INSTRUMENT"/>
  <input input-name="attributes.BUSINESS ORGANISATION.GBM EQUITIES/GLOBAL PROP"/>
  <input input-name="attributes.BOND ISIN"/>
  <input input-name="attributes.BASIS SWAP"/>
  <input input-name="attributes.GPL REGION"/>
  <input input-name="attributes.BFI LIQUIDITY ID"/>
  <input input-name="attributes.DEFAULT RISK RATING"/>
  <input input-name="attributes.VOL BUMP AMOUNT"/>
  <input input-name="entities.PARTICIPANT MOODY RATING LT"/>
  <input input-name="attributes.SURFACE TYPE"/>
  <input input-name="entities.PARTICIPANT FITCH RATING"/>
  <input input-name="entities.POSITION PRODUCT TYPE"/>
  <input input-name="attributes.EXPOSUREMETHOD"/>
  <input input-name="entities.FEED"/>
  <input input-name="others.USEDARWEIGHTEDSENSITVITIES"/>
  <input input-name="attributes.MDS ASW CURVE"/>
  <input input-name="attributes.CCAR ASSET GROUP"/>
  <input input-name="attributes.CREDIT EVENT TYPE"/>
  <input input-name="attributes.FV REPO HDG"/>
  <input input-name="attributes.CVA SECTOR"/>
  <input input-name="attributes.INFLATION INDEX"/>
  <input input-name="attributes.TIME BUCKET"/>
  <input input-name="entities.INSTRUMENT"/>
  <input input-name="businessOrganisation.BUSINESS ORGANISATION"/>
  <input input-name="others.VOLATILITYCOORDINATE"/>
  <input input-name="attributes.BUSINESS ORGANISATION.BMS REGION"/>
  <input input-name="attributes.CREDIT RATING.CREDIT RATING BBB AND BELOW"/>
  <input input-name="attributes.RNIV TYPE"/>
  <input input-name="others.GPL FSA FLAG"/>
  <input input-name="entities.POSITION ID"/>
  <input input-name="attributes.CCAR OTHER EQ REG GROUPING"/>
  <input input-name="others.BMS REGION"/>
  <input input-name="attributes.VINTAGE CATEGORY"/>
  <input input-name="businessOrganisation.BMS TRADER"/>
  <input input-name="entities.INSTRUMENT CLASS"/>
  <input input-name="entities.PARENT PARTICIPANT"/>
  <input input-name="entities.PARTICIPANT CSFB RATING"/>
  <input input-name="attributes.TRANCHE IDENTIFIER"/>
  <input input-name="entities.PARTICIPANT SP RATING LT"/>
  <input input-name="attributes.MAS OFFSHORE ONSHORE INDICATOR"/>
  <input input-name="entities.PARENT ULTIMATE PARENT"/>
  <input input-name="attributes.AGE"/>
  <input input-name="attributes.MERGER DEAL ID"/>
  <input input-name="attributes.BASIS RISK TENOR"/>
  <input input-name="entities.ULTPARENT AGY RATING"/>
  <input input-name="attributes.BUY HOLD"/>
  <input input-name="attributes.TRADING STRATEGY"/>
  <input input-name="attributes.BENCHMARK ID"/>
  <input input-name="others.UseInterpolation"/>
  <input input-name="attributes.CCAR ASSET SUB GROUP"/>
  <input input-name="attributes.BIII INPUT METHOD"/>
  <input input-name="entities.PARENT PRODUCT SUB TYPE"/>
  <input input-name="attributes.CURRENCY.CURRENCY REGION"/>
  <input input-name="entities.ULTIMATE PARENT"/>
  <input input-name="attributes.BOND TYPE"/>
  <input input-name="attributes.BFI B2 TIER"/>
  <input input-name="attributes.BFI B3 TIER"/>
  <input input-name="others.UDMMODELNAME"/>
  <input input-name="attributes.ISSUER"/>
  <input input-name="attributes.BFI INDICATOR"/>
  <input input-name="attributes.COMMODITY"/>
  <input input-name="attributes.COLLATERAL TYPE"/>
  <input input-name="attributes.BUSINESS ORGANISATION.REPORTING PACK"/>
  <input input-name="attributes.FRTB ASSET CLASS"/>
  <input input-name="attributes.BOOKING ENTITY GROUP"/>
  <input input-name="attributes.BOOK TYPE ID"/>
  <input input-name="attributes.UNDERLYING RIC CODE"/>
  <input input-name="others.UseDefaultXMove"/>
  <input input-name="attributes.CCAR TRADING TYPE CATEGORY"/>
  <input input-name="attributes.BUSINESS ORGANISATION.BUSINESS ORGANISATION"/>
  <input input-name="attributes.CALL PUT"/>
  <input input-name="attributes.GENERIC COUPON"/>
  <input input-name="attributes.SKEW TYPE"/>
  <input input-name="attributes.UNDERLYING MATURITY"/>
  <input input-name="others.UseBenchmarkCorrelation"/>
  <input input-name="attributes.GOVT BOND SERIES"/>
  <input input-name="attributes.CREDIT CLASS"/>
  <input input-name="attributes.GPL ATOM CODE"/>
  <input input-name="attributes.GPL BOOK GROUP LEGAL ENTITY"/>
  <input input-name="attributes.MBS RATING"/>
  <input input-name="attributes.MBS INSTRUMENT TYPE.MBS SECURITISATIONS"/>
  <input input-name="attributes.PRICE BAND"/>
  <input input-name="attributes.PROGRAM"/>
  <input input-name="attributes.GPL BOOK TYPE"/>
  <input input-name="attributes.MSCI SECTOR"/>
  <input input-name="attributes.GPL EDLV"/>
  <input input-name="attributes.CCAR COLLATERAL GROUPING"/>
  <input input-name="attributes.AMOUNT TYPE"/>
  <input input-name="attributes.GPL EDMRUO"/>
  <input input-name="attributes.RISK CLASS"/>
  <input input-name="attributes.GRANULAR RISK FACTOR"/>
  <input input-name="attributes.HOLDING PERIOD"/>
  <input input-name="attributes.HTM AFS INDICATOR"/>
  <input input-name="attributes.INDEXSTOCK"/>
  <input input-name="attributes.VOLCKER FLAG"/>
  <input input-name="attributes.IMS MATURITY BUCKET"/>
  <input input-name="others.ReferenceVersionClass"/>
  <input input-name="others.EQUITYMETHODOLOGY"/>
  <input input-name="attributes.MODEL TYPE"/>
  <input input-name="attributes.PCA TYPE"/>
  <input input-name="attributes.INDEX ID"/>
  <input input-name="attributes.CREDIT RATING.RATING CLASS"/>
  <input input-name="attributes.INDEX TYPE"/>
  <input input-name="attributes.INFLATION TYPE"/>
  <input input-name="entities.PRODUCT SUB TYPE"/>
  <input input-name="attributes.INTERCOMPANY INDICATOR"/>
  <input input-name="businessOrganisation.BMS REGION"/>
  <input input-name="attributes.LOCAL REG TRADING"/>
  <input input-name="attributes.SCENARIO FULL REVAL TYPE"/>
  <input input-name="attributes.LEGAL ENTITY"/>
  <input input-name="attributes.LIQUIDITY HORIZON"/>
  <input input-name="others.IRCMODEL"/>
  <input input-name="attributes.LOCAL CAP CALC"/>
  <input input-name="attributes.MAS COMMODITY CLASS"/>
  <input input-name="attributes.DEBT PRIORITY CLASS"/>
  <input input-name="attributes.MAS INSTRUMENT TYPE"/>
  <input input-name="attributes.FLAG TYPE"/>
  <input input-name="attributes.ISIN"/>
  <input input-name="attributes.MAS PRODUCT"/>
  <input input-name="others.IDRCCONFIDENCELEVEL"/>
  <input input-name="attributes.CREDIT SPREAD REGION"/>
  <input input-name="attributes.MAS RATING"/>
  <input input-name="attributes.TRADING LOCATION"/>
  <input input-name="attributes.FLAG LEVEL"/>
  <input input-name="attributes.MAS SECTOR TYPE"/>
  <input input-name="others.CVA HEDGE BOOKS"/>
  <input input-name="attributes.MAS SSIC SECTOR"/>
  <input input-name="attributes.GENDER"/>
  <input input-name="attributes.IHC REPO HEDGE"/>
  <input input-name="attributes.MAS TENOR"/>
  <input input-name="attributes.MDS CURVE"/>
  <input input-name="attributes.MERGER OFFER TYPE"/>
  <input input-name="others.UseDefaultDate"/>
  <input input-name="attributes.ASSET TYPE"/>
  <input input-name="attributes.METHODOLOGY"/>
  <input input-name="entities.PARENT POSITION"/>
  <input input-name="attributes.OAS ID"/>
  <input input-name="attributes.LEGAL LINKAGE KEY"/>
  <input input-name="attributes.RATE"/>
  <input input-name="others.COBdate"/>
  <input input-name="attributes.REVAL INDICATOR"/>
  <input input-name="attributes.SECTOR"/>
  <input input-name="others.RISKSERVERCONNECTSTRING"/>
  <input input-name="attributes.RISK POINT"/>
  <input input-name="attributes.SCENARIO SHOCK"/>
  <input input-name="others.ConfidenceLevel"/>
  <input input-name="attributes.SCENARIO TYPE"/>
  <input input-name="attributes.SCENARIO.RNIV"/>
  <input input-name="attributes.SEASONING"/>
  <input input-name="attributes.LIFE ID"/>
  <input input-name="attributes.BUSINESS ORGANISATION.BMS TRADER"/>
  <input input-name="attributes.SECURITY TYPE"/>
  <input input-name="attributes.STRATEGY"/>
  <input input-name="attributes.UNDERLYING BB CODE"/>
  <input input-name="attributes.FRTB LARGE CAP"/>
  <input input-name="attributes.UNIT OF MEASUREMENT"/>
  <input input-name="attributes.VAR PERIOD"/>
  <input input-name="attributes.VOL BUMP TYPE"/>
  <input input-name="attributes.ACVA SCVA EXCLUSION"/>
  <input input-name="attributes.VOL CONTROL"/>
  <input input-name="attributes.MBS CASH FLOW TYPE"/>
  <input input-name="businessOrganisation.GBM EQUITIES/GLOBAL PROP"/>
  <input input-name="businessOrganisation.REPORTING PACK"/>
  <input input-name="others.CVA EE REPLACE REPORT TYPE INDICATOR"/>
  <input input-name="attributes.REPORT TYPE INDICATOR"/>
</merlin-response>`;

module.exports = {
    inputTypes
};