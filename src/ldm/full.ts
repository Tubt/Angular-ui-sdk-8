/* tslint:disable:file-header */
/* tslint:disable:variable-name */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-06-01T09:52:03.895Z; */
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition } from "@gooddata/sdk-model";

/**
 * Attribute Title: Cost Type
 * Display Form ID: attr.restaurantcostsfact.costtype
 */
export const CostType: IAttribute = newAttribute("label.restaurantcostsfact.costtype");
/**
 * Attribute Title: Employee Id
 * Display Form ID: attr.employee.employeeid
 */
export const EmployeeId: IAttribute = newAttribute("label.employee.employeeid");
export const EmployeeName = {
  /**
   * Display Form Title: Employee Name
   * Display Form ID: label.employee.employeename
   */
  Default: newAttribute("label.employee.employeename")
  /**
   * Display Form Title: Employee URL
   * Display Form ID: label.employee.employeename.employeeurl
   */,
  EmployeeURL: newAttribute("label.employee.employeename.employeeurl")
};
/**
 * Attribute Title: Is Kids Item?
 * Display Form ID: attr.menuitem.iskidsitem
 */
export const IsKidsItem: IAttribute = newAttribute("label.menuitem.iskidsitem");
/**
 * Attribute Title: Line Item Id
 * Display Form ID: attr.salesdetailfact.lineitemid
 */
export const LineItemId: IAttribute = newAttribute("label.salesdetailfact.lineitemid");
/**
 * Attribute Title: Location City
 * Display Form ID: attr.restaurantlocation.locationcity
 */
export const LocationCity: IAttribute = newAttribute("label.restaurantlocation.locationcity");
/**
 * Attribute Title: Location Country
 * Display Form ID: attr.restaurantlocation.locationcountry
 */
export const LocationCountry: IAttribute = newAttribute("label.restaurantlocation.locationcountry");
/**
 * Attribute Title: Location Id
 * Display Form ID: attr.restaurantlocation.locationid
 */
export const LocationId: IAttribute = newAttribute("label.restaurantlocation.locationid");
export const LocationName = {
  /**
   * Display Form Title: Location Name
   * Display Form ID: label.restaurantlocation.locationname
   */
  Default: newAttribute("label.restaurantlocation.locationname")
  /**
   * Display Form Title: Location URL
   * Display Form ID: label.restaurantlocation.locationname.locationurl
   */,
  LocationURL: newAttribute("label.restaurantlocation.locationname.locationurl")
};
/**
 * Attribute Title: Location Ownership
 * Display Form ID: attr.restaurantlocation.locationownership
 */
export const LocationOwnership: IAttribute = newAttribute("label.restaurantlocation.locationownership");
/**
 * Attribute Title: Location Resort
 * Display Form ID: attr.restaurantlocation.locationresort
 */
export const LocationResort: IAttribute = newAttribute("label.restaurantlocation.locationresort");
/**
 * Attribute Title: Location State
 * Display Form ID: attr.restaurantlocation.locationstate
 */
export const LocationState: IAttribute = newAttribute("label.restaurantlocation.locationstate");
/**
 * Attribute Title: Menu Category
 * Display Form ID: attr.menuitem.menucategory
 */
export const MenuCategory: IAttribute = newAttribute("label.menuitem.menucategory");
/**
 * Attribute Title: Menu Item Id
 * Display Form ID: attr.menuitem.menuitemid
 */
export const MenuItemId: IAttribute = newAttribute("label.menuitem.menuitemid");
/**
 * Attribute Title: Menu Item Name
 * Display Form ID: attr.menuitem.menuitemname
 */
export const MenuItemName: IAttribute = newAttribute("label.menuitem.menuitemname");
/**
 * Attribute Title: Restaurant Category
 * Display Form ID: attr.restaurantprofile.restaurantcategory
 */
export const RestaurantCategory: IAttribute = newAttribute("label.restaurantprofile.restaurantcategory");
/**
 * Attribute Title: Transaction Id
 * Display Form ID: attr.salesdetailfact.transactionid
 */
export const TransactionId: IAttribute = newAttribute("label.salesdetailfact.transactionid");
/**
 * Metric Title: _Filter Last 4 Quarter
 * Metric ID: aaIHiWZjfWNA
 * Metric Type: MAQL Metric
 */
export const FilterLast4Quarter: IMeasure<IMeasureDefinition> = newMeasure("aaIHiWZjfWNA");
/**
 * Metric Title: _Filter Quarter
 * Metric ID: aaiF4bffe4yn
 * Metric Type: MAQL Metric
 */
export const FilterQuarter: IMeasure<IMeasureDefinition> = newMeasure("aaiF4bffe4yn");
/**
 * Metric Title: _TIMELINE Q
 * Metric ID: aaJF1ktqc10F
 * Metric Type: MAQL Metric
 */
export const TIMELINEQ: IMeasure<IMeasureDefinition> = newMeasure("aaJF1ktqc10F");
/**
 * Metric Title: [AVG] Same Store Sales Growth MoM
 * Metric ID: aasApLbucFp0
 * Metric Type: MAQL Metric
 */
export const AVGSameStoreSalesGrowthMoM: IMeasure<IMeasureDefinition> = newMeasure("aasApLbucFp0");
/**
 * Metric Title: # Checks
 * Metric ID: aeOt50ngicOD
 * Metric Type: MAQL Metric
 */
export const NrChecks: IMeasure<IMeasureDefinition> = newMeasure("aeOt50ngicOD");
/**
 * Metric Title: # Employees
 * Metric ID: aaTJSTfSaRBg
 * Metric Type: MAQL Metric
 */
export const NrEmployees: IMeasure<IMeasureDefinition> = newMeasure("aaTJSTfSaRBg");
/**
 * Metric Title: # Franchise Locations
 * Metric ID: ackJFayteCFG
 * Metric Type: MAQL Metric
 */
export const NrFranchiseLocations: IMeasure<IMeasureDefinition> = newMeasure("ackJFayteCFG");
/**
 * Metric Title: # Items on Check
 * Metric ID: adFurWGrd2H8
 * Metric Type: MAQL Metric
 */
export const NrItemsOnCheck: IMeasure<IMeasureDefinition> = newMeasure("adFurWGrd2H8");
/**
 * Metric Title: # Owned Locations
 * Metric ID: aaBJGIyWbxfO
 * Metric Type: MAQL Metric
 */
export const NrOwnedLocations: IMeasure<IMeasureDefinition> = newMeasure("aaBJGIyWbxfO");
/**
 * Metric Title: # Restaurants
 * Metric ID: aawAq8YqhM3o
 * Metric Type: MAQL Metric
 */
export const NrRestaurants: IMeasure<IMeasureDefinition> = newMeasure("aawAq8YqhM3o");
/**
 * Metric Title: % Change $ Avg Total Sales
 * Metric ID: afxBqOrPc5Zh
 * Metric Type: MAQL Metric
 */
export const PercentChange$AvgTotalSales: IMeasure<IMeasureDefinition> = newMeasure("afxBqOrPc5Zh");
/**
 * Metric Title: % Change $ Avg Total Sales by Server
 * Metric ID: acMCYQZbbwJg
 * Metric Type: MAQL Metric
 */
export const PercentChange$AvgTotalSalesByServer: IMeasure<IMeasureDefinition> = newMeasure("acMCYQZbbwJg");
/**
 * Metric Title: % of Entree on Total Check Size
 * Metric ID: aagurTlZd1Ul
 * Metric Type: MAQL Metric
 */
export const PercentOfEntreeOnTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure("aagurTlZd1Ul");
/**
 * Metric Title: $ Avg Check Size
 * Metric ID: agGujhRmcjQD
 * Metric Type: MAQL Metric
 */
export const $AvgCheckSize: IMeasure<IMeasureDefinition> = newMeasure("agGujhRmcjQD");
/**
 * Metric Title: $ Avg Daily Total Sales
 * Metric ID: aagJGHg1bxap
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSales: IMeasure<IMeasureDefinition> = newMeasure("aagJGHg1bxap");
/**
 * Metric Title: $ Avg Daily Total Sales by Server
 * Metric ID: aaAwXH5UfVBx
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSalesByServer: IMeasure<IMeasureDefinition> = newMeasure("aaAwXH5UfVBx");
/**
 * Metric Title: $ Avg Daily Total Sales by Server - For Previous
 * Metric ID: aeiCXq43bzcl
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSalesByServerForPrevious: IMeasure<IMeasureDefinition> = newMeasure("aeiCXq43bzcl");
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales
 * Metric ID: acEvQdUMiEAd
 * Metric Type: MAQL Metric
 */
export const $AvgRestaurantDailyTotalSales: IMeasure<IMeasureDefinition> = newMeasure("acEvQdUMiEAd");
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales - For Previous
 * Metric ID: agbBoXF6haIe
 * Metric Type: MAQL Metric
 */
export const $AvgRestaurantDailyTotalSalesForPrevious: IMeasure<IMeasureDefinition> = newMeasure("agbBoXF6haIe");
/**
 * Metric Title: $ Avg Total Sales by Restaurant
 * Metric ID: aaAHkMhRgp7S
 * Metric Type: MAQL Metric
 */
export const $AvgTotalSalesByRestaurant: IMeasure<IMeasureDefinition> = newMeasure("aaAHkMhRgp7S");
/**
 * Metric Title: $ Entree of Total Check Size
 * Metric ID: aavuqQNNaDdc
 * Metric Type: MAQL Metric
 */
export const $EntreeOfTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure("aavuqQNNaDdc");
/**
 * Metric Title: $ Franchise Fees
 * Metric ID: aaEGaXAEgB7U
 * Metric Type: MAQL Metric
 */
export const $FranchiseFees: IMeasure<IMeasureDefinition> = newMeasure("aaEGaXAEgB7U");
/**
 * Metric Title: $ Franchise Fees (Ad Royalty)
 * Metric ID: aabHeqImaK0d
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesAdRoyalty: IMeasure<IMeasureDefinition> = newMeasure("aabHeqImaK0d");
/**
 * Metric Title: $ Franchise Fees (Initial Fee) Last Quarter Timeline
 * Metric ID: aayHf60BfkfS
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesInitialFeeLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure("aayHf60BfkfS");
/**
 * Metric Title: $ Franchise Fees (Initial Franchise Fee)
 * Metric ID: aaDHcv6wevkl
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesInitialFranchiseFee: IMeasure<IMeasureDefinition> = newMeasure("aaDHcv6wevkl");
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty)
 * Metric ID: aaWGcgnsfxIg
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesOngoingRoyalty: IMeasure<IMeasureDefinition> = newMeasure("aaWGcgnsfxIg");
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty) Last Quarter Timeline
 * Metric ID: aaeHf3Mofjir
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesOngoingRoyaltyLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure("aaeHf3Mofjir");
/**
 * Metric Title: $ Franchised Sales
 * Metric ID: aclF4oDIe5hP
 * Metric Type: MAQL Metric
 */
export const $FranchisedSales: IMeasure<IMeasureDefinition> = newMeasure("aclF4oDIe5hP");
/**
 * Metric Title: $ Gross Profit
 * Metric ID: aa5JBkFDa7sJ
 * Metric Type: MAQL Metric
 */
export const $GrossProfit: IMeasure<IMeasureDefinition> = newMeasure("aa5JBkFDa7sJ");
/**
 * Metric Title: $ Owned Sales
 * Metric ID: aaMF7AZGbALB
 * Metric Type: MAQL Metric
 */
export const $OwnedSales: IMeasure<IMeasureDefinition> = newMeasure("aaMF7AZGbALB");
/**
 * Metric Title: $ Owned Sales Last Quarter Timeline
 * Metric ID: abHF4LCfdNdt
 * Metric Type: MAQL Metric
 */
export const $OwnedSalesLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure("abHF4LCfdNdt");
/**
 * Metric Title: $ Scheduled Costs
 * Metric ID: aclJxvAlhCp0
 * Metric Type: MAQL Metric
 */
export const $ScheduledCosts: IMeasure<IMeasureDefinition> = newMeasure("aclJxvAlhCp0");
/**
 * Metric Title: $ Scheduled Labor Costs
 * Metric ID: aaGJzwrDdbfQ
 * Metric Type: MAQL Metric
 */
export const $ScheduledLaborCosts: IMeasure<IMeasureDefinition> = newMeasure("aaGJzwrDdbfQ");
/**
 * Metric Title: $ Total Check Value
 * Metric ID: aattxAMVg2YU
 * Metric Type: MAQL Metric
 */
export const $TotalCheckValue: IMeasure<IMeasureDefinition> = newMeasure("aattxAMVg2YU");
/**
 * Metric Title: $ Total Costs
 * Metric ID: aaQHncjzfrtR
 * Metric Type: MAQL Metric
 */
export const $TotalCosts: IMeasure<IMeasureDefinition> = newMeasure("aaQHncjzfrtR");
/**
 * Metric Title: $ Total Costs - COGs
 * Metric ID: aafHpxx0f3gL
 * Metric Type: MAQL Metric
 */
export const $TotalCostsCOGs: IMeasure<IMeasureDefinition> = newMeasure("aafHpxx0f3gL");
/**
 * Metric Title: $ Total Costs - Labor
 * Metric ID: aamHpELXdotY
 * Metric Type: MAQL Metric
 */
export const $TotalCostsLabor: IMeasure<IMeasureDefinition> = newMeasure("aamHpELXdotY");
/**
 * Metric Title: $ Total Costs - Occupany
 * Metric ID: aagHqrJ6iAhD
 * Metric Type: MAQL Metric
 */
export const $TotalCostsOccupany: IMeasure<IMeasureDefinition> = newMeasure("aagHqrJ6iAhD");
/**
 * Metric Title: $ Total Costs - Operating
 * Metric ID: aaeHqv2qhEE1
 * Metric Type: MAQL Metric
 */
export const $TotalCostsOperating: IMeasure<IMeasureDefinition> = newMeasure("aaeHqv2qhEE1");
/**
 * Metric Title: $ Total Sales
 * Metric ID: aa7ulGyKhIE5
 * Metric Type: MAQL Metric
 */
export const $TotalSales: IMeasure<IMeasureDefinition> = newMeasure("aa7ulGyKhIE5");
/**
 * Metric Title: $ Total Sales Last Quarter Timeline
 * Metric ID: aajFRfDPaJrB
 * Metric Type: MAQL Metric
 */
export const $TotalSalesLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure("aajFRfDPaJrB");
/**
 * Metric Title: Avg # Checks
 * Metric ID: aakujkP2g68f
 * Metric Type: MAQL Metric
 */
export const AvgNrChecks: IMeasure<IMeasureDefinition> = newMeasure("aakujkP2g68f");
/**
 * Metric Title: Avg # Employees - Franchised
 * Metric ID: aciJJMmDfGYG
 * Metric Type: MAQL Metric
 */
export const AvgNrEmployeesFranchised: IMeasure<IMeasureDefinition> = newMeasure("aciJJMmDfGYG");
/**
 * Metric Title: Avg # Employees - Owned
 * Metric ID: abQJKPrmcvPv
 * Metric Type: MAQL Metric
 */
export const AvgNrEmployeesOwned: IMeasure<IMeasureDefinition> = newMeasure("abQJKPrmcvPv");
/**
 * Metric Title: Avg # Items on Check
 * Metric ID: adFurSoPaUaF
 * Metric Type: MAQL Metric
 */
export const AvgNrItemsOnCheck: IMeasure<IMeasureDefinition> = newMeasure("adFurSoPaUaF");
/**
 * Metric Title: Avg # Items on Check By Server
 * Metric ID: aaKwQwBIg1WY
 * Metric Type: MAQL Metric
 */
export const AvgNrItemsOnCheckByServer: IMeasure<IMeasureDefinition> = newMeasure("aaKwQwBIg1WY");
/**
 * Metric Title: Avg % of Entree on Total Check size
 * Metric ID: adQvRqlFawrq
 * Metric Type: MAQL Metric
 */
export const AvgPercentOfEntreeOnTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure("adQvRqlFawrq");
/**
 * Metric Title: Avg Check Size by Restaurant
 * Metric ID: abmxly1WgN0A
 * Metric Type: MAQL Metric
 */
export const AvgCheckSizeByRestaurant: IMeasure<IMeasureDefinition> = newMeasure("abmxly1WgN0A");
/**
 * Metric Title: Avg Check Size by Server
 * Metric ID: afewRzGAersh
 * Metric Type: MAQL Metric
 */
export const AvgCheckSizeByServer: IMeasure<IMeasureDefinition> = newMeasure("afewRzGAersh");
/**
 * Metric Title: Avg Daily # Checks by Restaurant
 * Metric ID: aaKvTDSga0Qc
 * Metric Type: MAQL Metric
 */
export const AvgDailyNrChecksByRestaurant: IMeasure<IMeasureDefinition> = newMeasure("aaKvTDSga0Qc");
/**
 * Metric Title: Avg Daily # of Check by Server
 * Metric ID: afgwRbw8ekwA
 * Metric Type: MAQL Metric
 */
export const AvgDailyNrOfCheckByServer: IMeasure<IMeasureDefinition> = newMeasure("afgwRbw8ekwA");
/**
 * Metric Title: Avg Entree % By Restaurant
 * Metric ID: afQHUg8AfYdl
 * Metric Type: MAQL Metric
 */
export const AvgEntreePercentByRestaurant: IMeasure<IMeasureDefinition> = newMeasure("afQHUg8AfYdl");
/**
 * Metric Title: Avg Entree % By Server
 * Metric ID: aexwEtn0eHwB
 * Metric Type: MAQL Metric
 */
export const AvgEntreePercentByServer: IMeasure<IMeasureDefinition> = newMeasure("aexwEtn0eHwB");
/**
 * Metric Title: Franchise Fee (Initial Fee) % Change
 * Metric ID: aabHgIqabggQ
 * Metric Type: MAQL Metric
 */
export const FranchiseFeeInitialFeePercentChange: IMeasure<IMeasureDefinition> = newMeasure("aabHgIqabggQ");
/**
 * Metric Title: Franchise Fee (Ongoing Royalty) % Change
 * Metric ID: aacHgvmIfZOX
 * Metric Type: MAQL Metric
 */
export const FranchiseFeeOngoingRoyaltyPercentChange: IMeasure<IMeasureDefinition> = newMeasure("aacHgvmIfZOX");
/**
 * Metric Title: Gross Profit %
 * Metric ID: abBJBoqTe5IH
 * Metric Type: MAQL Metric
 */
export const GrossProfitPercent: IMeasure<IMeasureDefinition> = newMeasure("abBJBoqTe5IH");
/**
 * Metric Title: Owned Sales % Change
 * Metric ID: aacF8F2Me67e
 * Metric Type: MAQL Metric
 */
export const OwnedSalesPercentChange: IMeasure<IMeasureDefinition> = newMeasure("aacF8F2Me67e");
/**
 * Metric Title: Same Store Sales
 * Metric ID: aaXAnw7hcbFY
 * Metric Type: MAQL Metric
 */
export const SameStoreSales: IMeasure<IMeasureDefinition> = newMeasure("aaXAnw7hcbFY");
/**
 * Metric Title: Same Store Sales MoM Growth
 * Metric ID: aciAmeQCfGmo
 * Metric Type: MAQL Metric
 */
export const SameStoreSalesMoMGrowth: IMeasure<IMeasureDefinition> = newMeasure("aciAmeQCfGmo");
/**
 * Metric Title: Same Store Sales Previous Month
 * Metric ID: aagAoGqjcuCZ
 * Metric Type: MAQL Metric
 */
export const SameStoreSalesPreviousMonth: IMeasure<IMeasureDefinition> = newMeasure("aagAoGqjcuCZ");
/**
 * Metric Title: Total # Franchised Employees
 * Metric ID: afrJGKajgogi
 * Metric Type: MAQL Metric
 */
export const TotalNrFranchisedEmployees: IMeasure<IMeasureDefinition> = newMeasure("afrJGKajgogi");
/**
 * Metric Title: Total # Owned Employees
 * Metric ID: aazJLFHCdCBh
 * Metric Type: MAQL Metric
 */
export const TotalNrOwnedEmployees: IMeasure<IMeasureDefinition> = newMeasure("aazJLFHCdCBh");
/**
 * Metric Title: Total Sales % Change
 * Metric ID: abhFQRhibZKx
 * Metric Type: MAQL Metric
 */
export const TotalSalesPercentChange: IMeasure<IMeasureDefinition> = newMeasure("abhFQRhibZKx");
/**
 * Fact Title: $ Menu Item Sales
 * Fact ID: fact.salesdetailfact.menuitemsales
 */
export const $MenuItemSales = {
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: sum
   */
  Sum: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("sum"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: count
   */,
  Count: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("count"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: avg
   */,
  Avg: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("avg"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: min
   */,
  Min: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("min"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: max
   */,
  Max: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("max"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: median
   */,
  Median: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("median"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure("fact.salesdetailfact.menuitemsales", m => m.aggregation("runsum"))
};
/**
 * Fact Title: Cost
 * Fact ID: fact.restaurantcostsfact.cost
 */
export const Cost = {
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("sum"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: count
   */,
  Count: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("count"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("avg"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: min
   */,
  Min: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("min"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: max
   */,
  Max: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("max"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: median
   */,
  Median: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("median"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure("fact.restaurantcostsfact.cost", m => m.aggregation("runsum"))
};
/**
 * Fact Title: Menu Item Quantity
 * Fact ID: fact.salesdetailfact.menuitemquantity
 */
export const MenuItemQuantity = {
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("sum"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: count
   */,
  Count: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("count"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("avg"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: min
   */,
  Min: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("min"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: max
   */,
  Max: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("max"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: median
   */,
  Median: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("median"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure("fact.salesdetailfact.menuitemquantity", m => m.aggregation("runsum"))
};
/**
 * Fact Title: Scheduled Cost
 * Fact ID: fact.restaurantcostsfact.scheduledcost
 */
export const ScheduledCost = {
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: sum
   */
  Sum: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("sum"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: count
   */,
  Count: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("count"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("avg"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: min
   */,
  Min: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("min"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: max
   */,
  Max: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("max"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: median
   */,
  Median: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("median"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure("fact.restaurantcostsfact.scheduledcost", m => m.aggregation("runsum"))
};
/**
 * Attribute Title: Year (Date)
 * Display Form ID: date.year
 */
export const DateYear: IAttribute = newAttribute("date.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date)
 * Display Form ID: date.quarter.in.year
 */
export const DateQuarter: IAttribute = newAttribute("date.aam81lMifn6q");
export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaw81lMifn6q
   */,
  WeekStarting: newAttribute("date.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aau81lMifn6q
   */,
  FromTo: newAttribute("date.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.aay81lMifn6q
   */,
  WeekNrYear_1: newAttribute("date.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.aaC81lMifn6q
   */,
  WkQtrYear: newAttribute("date.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.aas81lMifn6q
   */,
  WkQtrYear_1: newAttribute("date.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Display Form ID: date.week.in.year
 */
export const DateWeekSunSat: IAttribute = newAttribute("date.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Display Form ID: date.week.in.quarter
 */
export const DateWeekSunSatOfQtr: IAttribute = newAttribute("date.aaO81lMifn6q");
export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaY81lMifn6q
   */,
  WeekStarting: newAttribute("date.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aaW81lMifn6q
   */,
  FromTo: newAttribute("date.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Display Form ID: date.euweek.in.year
 */
export const DateWeekMonSun: IAttribute = newAttribute("date.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Display Form ID: date.euweek.in.quarter
 */
export const DateWeekMonSunOfQtr: IAttribute = newAttribute("date.abg81lMifn6q");
export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.abm81lMifn6q
   */
  Short: newAttribute("date.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.abs81lMifn6q
   */,
  Long: newAttribute("date.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.abq81lMifn6q
   */,
  Number: newAttribute("date.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.abo81lMifn6q
   */,
  MQ: newAttribute("date.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Display Form ID: date.month.in.quarter
 */
export const DateMonthOfQuarter: IAttribute = newAttribute("date.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date)
 * Display Form ID: date.day.in.year
 */
export const DateDayOfYear: IAttribute = newAttribute("date.abE81lMifn6q");
export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.abK81lMifn6q
   */
  Short: newAttribute("date.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.abO81lMifn6q
   */,
  Long: newAttribute("date.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.abM81lMifn6q
   */,
  Number: newAttribute("date.abM81lMifn6q")
};
export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.abU81lMifn6q
   */
  Short: newAttribute("date.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.abY81lMifn6q
   */,
  Long: newAttribute("date.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.abW81lMifn6q
   */,
  Number: newAttribute("date.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Display Form ID: date.day.in.quarter
 */
export const DateDayOfQuarter: IAttribute = newAttribute("date.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date)
 * Display Form ID: date.day.in.month
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date)
 * Display Form ID: date.quarter
 */
export const DateQuarterYear: IAttribute = newAttribute("date.aci81lMifn6q");
export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.act81lMifn6q
   */
  Short: newAttribute("date.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.acx81lMifn6q
   */,
  Long: newAttribute("date.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.acv81lMifn6q
   */,
  Number: newAttribute("date.acv81lMifn6q")
};
export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.yyyymmdd
   */,
  YyyyMmDd: newAttribute("date.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.mdyy
   */,
  MDYy: newAttribute("date.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.long
   */,
  Long: newAttribute("date.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.ddmmyyyy
   */,
  DdMmYyyy: newAttribute("date.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.eddmmyyyy
   */,
  DdMmYyyy_1: newAttribute("date.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Timeline)
 * Display Form ID: timeline.year
 */
export const TimelineYear: IAttribute = newAttribute("timeline.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Timeline)
 * Display Form ID: timeline.quarter.in.year
 */
export const TimelineQuarter: IAttribute = newAttribute("timeline.aam81lMifn6q");
export const TimelineWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Timeline)
   * Display Form ID: timeline.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("timeline.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Timeline)
   * Display Form ID: timeline.aaw81lMifn6q
   */,
  WeekStarting: newAttribute("timeline.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Timeline)
   * Display Form ID: timeline.aau81lMifn6q
   */,
  FromTo: newAttribute("timeline.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Timeline)
   * Display Form ID: timeline.aay81lMifn6q
   */,
  WeekNrYear_1: newAttribute("timeline.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Timeline)
   * Display Form ID: timeline.aaC81lMifn6q
   */,
  WkQtrYear: newAttribute("timeline.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Timeline)
   * Display Form ID: timeline.aas81lMifn6q
   */,
  WkQtrYear_1: newAttribute("timeline.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Timeline)
 * Display Form ID: timeline.week.in.year
 */
export const TimelineWeekSunSat: IAttribute = newAttribute("timeline.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Timeline)
 * Display Form ID: timeline.week.in.quarter
 */
export const TimelineWeekSunSatOfQtr: IAttribute = newAttribute("timeline.aaO81lMifn6q");
export const TimelineWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Timeline)
   * Display Form ID: timeline.aa281lMifn6q
   */
  WeekNrYear: newAttribute("timeline.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Timeline)
   * Display Form ID: timeline.aaY81lMifn6q
   */,
  WeekStarting: newAttribute("timeline.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Timeline)
   * Display Form ID: timeline.aaW81lMifn6q
   */,
  FromTo: newAttribute("timeline.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Timeline)
 * Display Form ID: timeline.euweek.in.year
 */
export const TimelineWeekMonSun: IAttribute = newAttribute("timeline.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Timeline)
 * Display Form ID: timeline.euweek.in.quarter
 */
export const TimelineWeekMonSunOfQtr: IAttribute = newAttribute("timeline.abg81lMifn6q");
export const TimelineMonth = {
  /**
   * Display Form Title: Short (Jan) (Timeline)
   * Display Form ID: timeline.abm81lMifn6q
   */
  Short: newAttribute("timeline.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Timeline)
   * Display Form ID: timeline.abs81lMifn6q
   */,
  Long: newAttribute("timeline.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Timeline)
   * Display Form ID: timeline.abq81lMifn6q
   */,
  Number: newAttribute("timeline.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Timeline)
   * Display Form ID: timeline.abo81lMifn6q
   */,
  MQ: newAttribute("timeline.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Timeline)
 * Display Form ID: timeline.month.in.quarter
 */
export const TimelineMonthOfQuarter: IAttribute = newAttribute("timeline.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Timeline)
 * Display Form ID: timeline.day.in.year
 */
export const TimelineDayOfYear: IAttribute = newAttribute("timeline.abE81lMifn6q");
export const TimelineDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Timeline)
   * Display Form ID: timeline.abK81lMifn6q
   */
  Short: newAttribute("timeline.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Timeline)
   * Display Form ID: timeline.abO81lMifn6q
   */,
  Long: newAttribute("timeline.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Timeline)
   * Display Form ID: timeline.abM81lMifn6q
   */,
  Number: newAttribute("timeline.abM81lMifn6q")
};
export const TimelineDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Timeline)
   * Display Form ID: timeline.abU81lMifn6q
   */
  Short: newAttribute("timeline.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Timeline)
   * Display Form ID: timeline.abY81lMifn6q
   */,
  Long: newAttribute("timeline.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Timeline)
   * Display Form ID: timeline.abW81lMifn6q
   */,
  Number: newAttribute("timeline.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Timeline)
 * Display Form ID: timeline.day.in.quarter
 */
export const TimelineDayOfQuarter: IAttribute = newAttribute("timeline.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Timeline)
 * Display Form ID: timeline.day.in.month
 */
export const TimelineDayOfMonth: IAttribute = newAttribute("timeline.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Timeline)
 * Display Form ID: timeline.quarter
 */
export const TimelineQuarterYear: IAttribute = newAttribute("timeline.aci81lMifn6q");
export const TimelineMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Timeline)
   * Display Form ID: timeline.act81lMifn6q
   */
  Short: newAttribute("timeline.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Timeline)
   * Display Form ID: timeline.acx81lMifn6q
   */,
  Long: newAttribute("timeline.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Timeline)
   * Display Form ID: timeline.acv81lMifn6q
   */,
  Number: newAttribute("timeline.acv81lMifn6q")
};
export const TimelineDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Timeline)
   * Display Form ID: timeline.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("timeline.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Timeline)
   * Display Form ID: timeline.date.yyyymmdd
   */,
  YyyyMmDd: newAttribute("timeline.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Timeline)
   * Display Form ID: timeline.date.mdyy
   */,
  MDYy: newAttribute("timeline.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Timeline)
   * Display Form ID: timeline.date.long
   */,
  Long: newAttribute("timeline.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Timeline)
   * Display Form ID: timeline.date.ddmmyyyy
   */,
  DdMmYyyy: newAttribute("timeline.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Timeline)
   * Display Form ID: timeline.date.eddmmyyyy
   */,
  DdMmYyyy_1: newAttribute("timeline.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_year
 */
export const FiscalDateYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_aag81lMifn6q");
/**
 * Attribute Title: Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_quarter.in.year
 */
export const FiscalDateQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_aam81lMifn6q");
export const FiscalDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaA81lMifn6q
   */
  WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaw81lMifn6q
   */,
  WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aau81lMifn6q
   */,
  FromTo: newAttribute("fiscaldate.fiscaljun1_aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aay81lMifn6q
   */,
  WeekNrYear_1: newAttribute("fiscaldate.fiscaljun1_aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaC81lMifn6q
   */,
  WkQtrYear: newAttribute("fiscaldate.fiscaljun1_aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aas81lMifn6q
   */,
  WkQtrYear_1: newAttribute("fiscaldate.fiscaljun1_aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_week.in.year
 */
export const FiscalDateWeekSunSat: IAttribute = newAttribute("fiscaldate.fiscaljun1_aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_week.in.quarter
 */
export const FiscalDateWeekSunSatOfQtr: IAttribute = newAttribute("fiscaldate.fiscaljun1_aaO81lMifn6q");
export const FiscalDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aa281lMifn6q
   */
  WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaY81lMifn6q
   */,
  WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaW81lMifn6q
   */,
  FromTo: newAttribute("fiscaldate.fiscaljun1_aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_euweek.in.year
 */
export const FiscalDateWeekMonSun: IAttribute = newAttribute("fiscaldate.fiscaljun1_aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_euweek.in.quarter
 */
export const FiscalDateWeekMonSunOfQtr: IAttribute = newAttribute("fiscaldate.fiscaljun1_abg81lMifn6q");
export const FiscalDateMonth = {
  /**
   * Display Form Title: Short (Jan) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abm81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abs81lMifn6q
   */,
  Long: newAttribute("fiscaldate.fiscaljun1_abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abq81lMifn6q
   */,
  Number: newAttribute("fiscaldate.fiscaljun1_abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abo81lMifn6q
   */,
  MQ: newAttribute("fiscaldate.fiscaljun1_abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_month.in.quarter
 */
export const FiscalDateMonthOfQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.year
 */
export const FiscalDateDayOfYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_abE81lMifn6q");
export const FiscalDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abK81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abO81lMifn6q
   */,
  Long: newAttribute("fiscaldate.fiscaljun1_abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abM81lMifn6q
   */,
  Number: newAttribute("fiscaldate.fiscaljun1_abM81lMifn6q")
};
export const FiscalDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abU81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abY81lMifn6q
   */,
  Long: newAttribute("fiscaldate.fiscaljun1_abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abW81lMifn6q
   */,
  Number: newAttribute("fiscaldate.fiscaljun1_abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.quarter
 */
export const FiscalDateDayOfQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.month
 */
export const FiscalDateDayOfMonth: IAttribute = newAttribute("fiscaldate.fiscaljun1_aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_quarter
 */
export const FiscalDateQuarterYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_aci81lMifn6q");
export const FiscalDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_act81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_acx81lMifn6q
   */,
  Long: newAttribute("fiscaldate.fiscaljun1_acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_acv81lMifn6q
   */,
  Number: newAttribute("fiscaldate.fiscaljun1_acv81lMifn6q")
};
export const FiscalDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.mmddyyyy
   */
  MmDdYyyy: newAttribute("fiscaldate.fiscaljun1_date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.yyyymmdd
   */,
  YyyyMmDd: newAttribute("fiscaldate.fiscaljun1_date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.mdyy
   */,
  MDYy: newAttribute("fiscaldate.fiscaljun1_date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.long
   */,
  Long: newAttribute("fiscaldate.fiscaljun1_date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.ddmmyyyy
   */,
  DdMmYyyy: newAttribute("fiscaldate.fiscaljun1_date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.eddmmyyyy
   */,
  DdMmYyyy_1: newAttribute("fiscaldate.fiscaljun1_date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Paydate)
 * Display Form ID: paydate.year
 */
export const PaydateYear: IAttribute = newAttribute("paydate.year.default");
/**
 * Attribute Title: Quarter (Paydate)
 * Display Form ID: paydate.quarter.in.year
 */
export const PaydateQuarter: IAttribute = newAttribute("paydate.quarter.in.year.default");
export const PaydateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Paydate)
   * Display Form ID: paydate.week.wk_year
   */
  WeekNrYear: newAttribute("paydate.week.wk_year")
  /**
   * Display Form Title: Week Starting (Paydate)
   * Display Form ID: paydate.week.starting
   */,
  WeekStarting: newAttribute("paydate.week.starting")
  /**
   * Display Form Title: From - To (Paydate)
   * Display Form ID: paydate.week.from_to
   */,
  FromTo: newAttribute("paydate.week.from_to")
  /**
   * Display Form Title: Week #/Year (Cont.) (Paydate)
   * Display Form ID: paydate.week.wk_year_cont
   */,
  WeekNrYear_1: newAttribute("paydate.week.wk_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate)
   * Display Form ID: paydate.week.wk_qtr_year_cont
   */,
  WkQtrYear: newAttribute("paydate.week.wk_qtr_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Paydate)
   * Display Form ID: paydate.week.wk_qtr_year
   */,
  WkQtrYear_1: newAttribute("paydate.week.wk_qtr_year")
};
/**
 * Attribute Title: Week (Sun-Sat) (Paydate)
 * Display Form ID: paydate.week.in.year
 */
export const PaydateWeekSunSat: IAttribute = newAttribute("paydate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Paydate)
 * Display Form ID: paydate.week.in.quarter
 */
export const PaydateWeekSunSatOfQtr: IAttribute = newAttribute("paydate.week.in.quarter.number_us");
export const PaydateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Paydate)
   * Display Form ID: paydate.euweek.wk_year
   */
  WeekNrYear: newAttribute("paydate.euweek.wk_year")
  /**
   * Display Form Title: Week Starting (Paydate)
   * Display Form ID: paydate.euweek.starting
   */,
  WeekStarting: newAttribute("paydate.euweek.starting")
  /**
   * Display Form Title: From - To (Paydate)
   * Display Form ID: paydate.euweek.from_to
   */,
  FromTo: newAttribute("paydate.euweek.from_to")
};
/**
 * Attribute Title: Week (Mon-Sun) (Paydate)
 * Display Form ID: paydate.euweek.in.year
 */
export const PaydateWeekMonSun: IAttribute = newAttribute("paydate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Paydate)
 * Display Form ID: paydate.euweek.in.quarter
 */
export const PaydateWeekMonSunOfQtr: IAttribute = newAttribute("paydate.euweek.in.quarter.number_eu");
export const PaydateMonth = {
  /**
   * Display Form Title: Short (Jan) (Paydate)
   * Display Form ID: paydate.month.in.year.short
   */
  Short: newAttribute("paydate.month.in.year.short")
  /**
   * Display Form Title: Long (January) (Paydate)
   * Display Form ID: paydate.month.in.year.long
   */,
  Long: newAttribute("paydate.month.in.year.long")
  /**
   * Display Form Title: Number (M1) (Paydate)
   * Display Form ID: paydate.month.in.year.number
   */,
  Number: newAttribute("paydate.month.in.year.number")
  /**
   * Display Form Title: M/Q (M1/Q1) (Paydate)
   * Display Form ID: paydate.month.in.year.m_q
   */,
  MQ: newAttribute("paydate.month.in.year.m_q")
};
/**
 * Attribute Title: Month of Quarter (Paydate)
 * Display Form ID: paydate.month.in.quarter
 */
export const PaydateMonthOfQuarter: IAttribute = newAttribute("paydate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Paydate)
 * Display Form ID: paydate.day.in.year
 */
export const PaydateDayOfYear: IAttribute = newAttribute("paydate.day.in.year.default");
export const PaydateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Paydate)
   * Display Form ID: paydate.day.in.week.short
   */
  Short: newAttribute("paydate.day.in.week.short")
  /**
   * Display Form Title: Long (Sunday) (Paydate)
   * Display Form ID: paydate.day.in.week.long
   */,
  Long: newAttribute("paydate.day.in.week.long")
  /**
   * Display Form Title: Number (1=Sunday) (Paydate)
   * Display Form ID: paydate.day.in.week.number
   */,
  Number: newAttribute("paydate.day.in.week.number")
};
export const PaydateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Paydate)
   * Display Form ID: paydate.day.in.euweek.short
   */
  Short: newAttribute("paydate.day.in.euweek.short")
  /**
   * Display Form Title: Long (Monday) (Paydate)
   * Display Form ID: paydate.day.in.euweek.long
   */,
  Long: newAttribute("paydate.day.in.euweek.long")
  /**
   * Display Form Title: Number (1=Monday) (Paydate)
   * Display Form ID: paydate.day.in.euweek.number
   */,
  Number: newAttribute("paydate.day.in.euweek.number")
};
/**
 * Attribute Title: Day of Quarter (Paydate)
 * Display Form ID: paydate.day.in.quarter
 */
export const PaydateDayOfQuarter: IAttribute = newAttribute("paydate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Paydate)
 * Display Form ID: paydate.day.in.month
 */
export const PaydateDayOfMonth: IAttribute = newAttribute("paydate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Paydate)
 * Display Form ID: paydate.quarter
 */
export const PaydateQuarterYear: IAttribute = newAttribute("paydate.quarter.short_us");
export const PaydateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Paydate)
   * Display Form ID: paydate.month.short
   */
  Short: newAttribute("paydate.month.short")
  /**
   * Display Form Title: Long (January 2010) (Paydate)
   * Display Form ID: paydate.month.long
   */,
  Long: newAttribute("paydate.month.long")
  /**
   * Display Form Title: Number (1/2010) (Paydate)
   * Display Form ID: paydate.month.number
   */,
  Number: newAttribute("paydate.month.number")
};
export const PaydateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Paydate)
   * Display Form ID: paydate.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("paydate.date.day.us.mm_dd_yyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Paydate)
   * Display Form ID: paydate.date.day.yyyy_mm_dd
   */,
  YyyyMmDd: newAttribute("paydate.date.day.yyyy_mm_dd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Paydate)
   * Display Form ID: paydate.date.day.us.m_d_yy
   */,
  MDYy: newAttribute("paydate.date.day.us.m_d_yy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate)
   * Display Form ID: paydate.date.day.us.long
   */,
  Long: newAttribute("paydate.date.day.us.long")
  /**
   * Display Form Title: dd/mm/yyyy (Paydate)
   * Display Form ID: paydate.date.day.uk.dd_mm_yyyy
   */,
  DdMmYyyy: newAttribute("paydate.date.day.uk.dd_mm_yyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Paydate)
   * Display Form ID: paydate.date.day.eu.dd_mm_yyyy
   */,
  DdMmYyyy_1: newAttribute("paydate.date.day.eu.dd_mm_yyyy")
};
/**
 * Attribute Title: US Week Year (Paydate)
 * Display Form ID: paydate.year.for.week
 */
export const PaydateUSWeekYear: IAttribute = newAttribute("paydate.year.for.week.number");
/**
 * Attribute Title: US Week Quarter (Paydate)
 * Display Form ID: paydate.quarter.for.week
 */
export const PaydateUSWeekQuarter: IAttribute = newAttribute("paydate.quarter.for.week.number");
/**
 * Attribute Title: EU Week Year (Paydate)
 * Display Form ID: paydate.year.for.euweek
 */
export const PaydateEUWeekYear: IAttribute = newAttribute("paydate.year.for.euweek.number");
/**
 * Attribute Title: EU Week Quarter (Paydate)
 * Display Form ID: paydate.quarter.for.euweek
 */
export const PaydateEUWeekQuarter: IAttribute = newAttribute("paydate.quarter.for.euweek.number");
export const Insights = {
  /**
   * Insight Title: Avg Entree %
   * Insight ID: abHVSjwFgk4i
   */
  AvgEntreePercent: "abHVSjwFgk4i"
  /**
   * Insight Title: Total Sales by City
   * Insight ID: acPWDTL2bJeX
   */,
  TotalSalesByCity: "acPWDTL2bJeX"
  /**
   * Insight Title: Total Sales by Location Last Quarter
   * Insight ID: abmeiDsUhTNW
   */,
  TotalSalesByLocationLastQuarter: "abmeiDsUhTNW"
  /**
   * Insight Title: Total Sales by Week
   * Insight ID: aeSCEMsTfoj8
   */,
  TotalSalesByWeek: "aeSCEMsTfoj8"
  /**
   * Insight Title: $ Check Value by Trx
   * Insight ID: aa7N3HExdhKw
   */,
  $CheckValueByTrx: "aa7N3HExdhKw"
  /**
   * Insight Title: $ Total Sales by Location
   * Insight ID: aaBN5UG3dXu4
   */,
  $TotalSalesByLocation: "aaBN5UG3dXu4"
  /**
   * Insight Title: Sales over Time
   * Insight ID: acFJltTsifSQ
   */,
  SalesOverTime: "acFJltTsifSQ"
  /**
   * Insight Title: Costs over Time
   * Insight ID: abHJmzD1fZrW
   */,
  CostsOverTime: "abHJmzD1fZrW"
  /**
   * Insight Title: Labor Costs vs Scheduled Costs
   * Insight ID: abhJpedgcfU2
   */,
  LaborCostsVsScheduledCosts: "abhJpedgcfU2"
  /**
   * Insight Title: Gross profit % (date filters)
   * Insight ID: acOfuc2QiDZK
   */,
  GrossProfitPercentDateFilters: "acOfuc2QiDZK"
  /**
   * Insight Title: Table report Labor Costs Vs Scheduled Costs
   * Insight ID: aatFRvXBdilm
   */,
  TableReportLaborCostsVsScheduledCosts: "aatFRvXBdilm"
  /**
   * Insight Title: Franchise Fees
   * Insight ID: aahnVeLugyFj
   */,
  FranchiseFees: "aahnVeLugyFj"
  /**
   * Insight Title: Jak se ukladaj totaly?
   * Insight ID: aag18QiFahiP
   */,
  JakSeUkladajTotaly: "aag18QiFahiP"
  /**
   * Insight Title: doc_bb
   * Insight ID: aandGpipapsE
   */,
  DocBb: "aandGpipapsE"
  /**
   * Insight Title: Owned by city
   * Insight ID: aabnb2Kae09O
   */,
  OwnedByCity: "aabnb2Kae09O"
  /**
   * Insight Title: location filter
   * Insight ID: aacoryj5fJDB
   */,
  LocationFilter: "aacoryj5fJDB"
  /**
   * Insight Title: pivot table test
   * Insight ID: aae1lFs8hjW8
   */,
  PivotTableTest: "aae1lFs8hjW8"
  /**
   * Insight Title: pivot test 2
   * Insight ID: aacFP4anfb59
   */,
  PivotTest2: "aacFP4anfb59"
  /**
   * Insight Title: bar chart test
   * Insight ID: aacLScsebpR2
   */,
  BarChartTest: "aacLScsebpR2"
  /**
   * Insight Title: pivot table test 3
   * Insight ID: aadfnfPBbOPT
   */,
  PivotTableTest3: "aadfnfPBbOPT"
  /**
   * Insight Title: Ondruv big pivot
   * Insight ID: aappR4vfcFbc
   */,
  OndruvBigPivot: "aappR4vfcFbc"
  /**
   * Insight Title: Gross Profit Date filter
   * Insight ID: aabH7H5KeQmC
   */,
  GrossProfitDateFilter: "aabH7H5KeQmC"
  /**
   * Insight Title: pivot saved sort test
   * Insight ID: aabKUfWbgIEF
   */,
  PivotSavedSortTest: "aabKUfWbgIEF"
  /**
   * Insight Title: test pivot table
   * Insight ID: aafSxnYyiFfJ
   */,
  TestPivotTable: "aafSxnYyiFfJ"
  /**
   * Insight Title: pivot_lho
   * Insight ID: aabkQXHpayg5
   */,
  PivotLho: "aabkQXHpayg5"
  /**
   * Insight Title: dual axes bar
   * Insight ID: aaelg6f2eVQw
   */,
  DualAxesBar: "aaelg6f2eVQw"
  /**
   * Insight Title: test pivot table 2
   * Insight ID: aabtW12gev8y
   */,
  TestPivotTable2: "aabtW12gev8y"
  /**
   * Insight Title: pivot 2
   * Insight ID: aac7e1q3dmP0
   */,
  Pivot2: "aac7e1q3dmP0"
  /**
   * Insight Title: test 2
   * Insight ID: aac249qvixcU
   */,
  Test2: "aac249qvixcU"
  /**
   * Insight Title: drill test
   * Insight ID: aafkGVOGeVqI
   */,
  DrillTest: "aafkGVOGeVqI"
  /**
   * Insight Title: Dual axes test
   * Insight ID: aaePJArweqWe
   */,
  DualAxesTest: "aaePJArweqWe"
  /**
   * Insight Title: DHO_test
   * Insight ID: aaxhtKfGfkEF
   */,
  DHOTest: "aaxhtKfGfkEF"
  /**
   * Insight Title: DHO_test2
   * Insight ID: aabiyT4CehGr
   */,
  DHOTest2: "aabiyT4CehGr"
  /**
   * Insight Title: small
   * Insight ID: aanzUEMWbq6z
   */,
  Small: "aanzUEMWbq6z"
  /**
   * Insight Title: more
   * Insight ID: aacAuwnXespp
   */,
  More: "aacAuwnXespp"
  /**
   * Insight Title: DHO_test3
   * Insight ID: aacWKocqgmEQ
   */,
  DHOTest3: "aacWKocqgmEQ"
  /**
   * Insight Title: one row
   * Insight ID: aacXsNbVguPs
   */,
  OneRow: "aacXsNbVguPs"
  /**
   * Insight Title: PivotTable sort over col attr TEST
   * Insight ID: aaoX68WrbizG
   */,
  PivotTableSortOverColAttrTEST: "aaoX68WrbizG"
  /**
   * Insight Title: PivotTable TEST delete
   * Insight ID: aak2sQdegGaU
   */,
  PivotTableTESTDelete: "aak2sQdegGaU"
  /**
   * Insight Title: DHO_test4
   * Insight ID: aah24doLdkfQ
   */,
  DHOTest4: "aah24doLdkfQ"
  /**
   * Insight Title: DHO_test6
   * Insight ID: aab9BbnTeARE
   */,
  DHOTest6: "aab9BbnTeARE"
  /**
   * Insight Title: DHO_test7
   * Insight ID: aab9CyaOeudX
   */,
  DHOTest7: "aab9CyaOeudX"
  /**
   * Insight Title: DHO_test10
   * Insight ID: aaeCF1BQggYI
   */,
  DHOTest10: "aaeCF1BQggYI"
  /**
   * Insight Title: PivotTable rollup TEST
   * Insight ID: aahCVIXgcxDB
   */,
  PivotTableRollupTEST: "aahCVIXgcxDB"
  /**
   * Insight Title: DHO_RAIL-1285
   * Insight ID: aafM5QCbgVtb
   */,
  DHORAIL1285: "aafM5QCbgVtb"
  /**
   * Insight Title: EmptyTable
   * Insight ID: aabZT8uRflyw
   */,
  EmptyTable: "aabZT8uRflyw"
  /**
   * Insight Title: EmptyBarChart
   * Insight ID: aabZUbXsfroQ
   */,
  EmptyBarChart: "aabZUbXsfroQ"
  /**
   * Insight Title: Total Rollup check
   * Insight ID: aamgg7RnfKl4
   */,
  TotalRollupCheck: "aamgg7RnfKl4"
  /**
   * Insight Title: verify-1275
   * Insight ID: aadl8yxHdO4m
   */,
  Verify1275: "aadl8yxHdO4m"
  /**
   * Insight Title: hurtak - 1327
   * Insight ID: aabki5dXh9wQ
   */,
  Hurtak1327: "aabki5dXh9wQ"
  /**
   * Insight Title: xxx
   * Insight ID: aadA4E0gatW2
   */,
  Xxx: "aadA4E0gatW2"
  /**
   * Insight Title: Pivot Demo
   * Insight ID: aanRWCnEbsqd
   */,
  PivotDemo: "aanRWCnEbsqd"
  /**
   * Insight Title: Barchart
   * Insight ID: aacFqqnPbD5h
   */,
  Barchart: "aacFqqnPbD5h"
  /**
   * Insight Title: Employes vs Employes year ago
   * Insight ID: aabQVJmMb9Yi
   */,
  EmployesVsEmployesYearAgo: "aabQVJmMb9Yi"
  /**
   * Insight Title: hurtak - 1120
   * Insight ID: aabW0DCNgVFQ
   */,
  Hurtak1120: "aabW0DCNgVFQ"
  /**
   * Insight Title: hurtak - 1120
   * Insight ID: aabW0PfagVK5
   */,
  Hurtak1120_1: "aabW0PfagVK5"
  /**
   * Insight Title: saved
   * Insight ID: aac1q69Teini
   */,
  Saved: "aac1q69Teini"
  /**
   * Insight Title: PV Table
   * Insight ID: aac42ScWbg9l
   */,
  PVTable: "aac42ScWbg9l"
  /**
   * Insight Title: table
   * Insight ID: aadHFQlacx2A
   */,
  Table: "aadHFQlacx2A"
  /**
   * Insight Title: sort table
   * Insight ID: aadUPJy5ahXZ
   */,
  SortTable: "aadUPJy5ahXZ"
  /**
   * Insight Title: Vis Column
   * Insight ID: aab4Z649bbEU
   */,
  VisColumn: "aab4Z649bbEU"
  /**
   * Insight Title: Mai - Datepicker
   * Insight ID: aarIeGdNiBHS
   */,
  MaiDatepicker: "aarIeGdNiBHS"
  /**
   * Insight Title: Mai-pảyoll
   * Insight ID: aaFTfnkGhhWz
   */,
  MaiPYoll: "aaFTfnkGhhWz"
  /**
   * Insight Title: KPI
   * Insight ID: aa2Td9p9ahWP
   */,
  KPI: "aa2Td9p9ahWP"
  /**
   * Insight Title: Bullet
   * Insight ID: aaM1eRq5eDjN
   */,
  Bullet: "aaM1eRq5eDjN"
  /**
   * Insight Title: Check measure using identifier
   * Insight ID: aaNGpWw7fPV5
   */,
  CheckMeasureUsingIdentifier: "aaNGpWw7fPV5"
  /**
   * Insight Title: 12
   * Insight ID: aaE76f5deHhr
   */,
  _12: "aaE76f5deHhr"
  /**
   * Insight Title: 1235
   * Insight ID: aadffKZVaSNm
   */,
  _1235: "aadffKZVaSNm"
  /**
   * Insight Title: XIR
   * Insight ID: aagjDM8OcKJn
   */,
  XIR: "aagjDM8OcKJn"
  /**
   * Insight Title: BarChart - short by the first measure
   * Insight ID: aailIXJdd3k2
   */,
  BarChartShortByTheFirstMeasure: "aailIXJdd3k2"
  /**
   * Insight Title: BarChart - sort on stacking
   * Insight ID: aacl8fRCaSqC
   */,
  BarChartSortOnStacking: "aacl8fRCaSqC"
  /**
   * Insight Title: DualBarChart- sorting
   * Insight ID: aadl8fRCaSqC
   */,
  DualBarChartSorting: "aadl8fRCaSqC"
  /**
   * Insight Title: AreaChart
   * Insight ID: aahNloljf3fk
   */,
  AreaChart: "aahNloljf3fk"
  /**
   * Insight Title: Bullet_2
   * Insight ID: aabNRd4BgMCp
   */,
  Bullet2: "aabNRd4BgMCp"
  /**
   * Insight Title: Heatmap
   * Insight ID: aabOAY90d7Jz
   */,
  Heatmap: "aabOAY90d7Jz"
  /**
   * Insight Title: Treemap
   * Insight ID: aabOA2Ice5E2
   */,
  Treemap: "aabOA2Ice5E2"
  /**
   * Insight Title: Combo
   * Insight ID: aacOz8yJe5t2
   */,
  Combo: "aacOz8yJe5t2"
  /**
   * Insight Title: Donut
   * Insight ID: aabOChn4hm8I
   */,
  Donut: "aabOChn4hm8I"
  /**
   * Insight Title: Pie
   * Insight ID: aabOCoJIe5Di
   */,
  Pie: "aabOCoJIe5Di"
  /**
   * Insight Title: Headline
   * Insight ID: aacOA2Ice5E2
   */,
  Headline: "aacOA2Ice5E2"
  /**
   * Insight Title: StackArea
   * Insight ID: aacOAY90d7Jz
   */,
  StackArea: "aacOAY90d7Jz"
  /**
   * Insight Title: Scatter
   * Insight ID: aatOtuoYdwRn
   */,
  Scatter: "aatOtuoYdwRn"
  /**
   * Insight Title: bubble
   * Insight ID: aanOuT1Dc1D4
   */,
  Bubble: "aanOuT1Dc1D4"
  /**
   * Insight Title: Xirr
   * Insight ID: aaiOsQrVdsvO
   */,
  Xirr: "aaiOsQrVdsvO"
  /**
   * Insight Title: Line
   * Insight ID: aarOkYKKeejQ
   */,
  Line: "aarOkYKKeejQ"
  /**
   * Insight Title: PV
   * Insight ID: aatOx1qegRU8
   */,
  PV: "aatOx1qegRU8"
};
