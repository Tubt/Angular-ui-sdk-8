import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ColumnChart, BarChart, LineChart, Headline, BubbleChart, ScatterPlot, PieChart, Treemap, BulletChart, ComboChart, Xirr } from "@gooddata/sdk-ui-charts";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";
import { newPositiveAttributeFilter, newNegativeAttributeFilter, newAbsoluteDateFilter, newRelativeDateFilter, ITotal, attributeIdentifier, measureIdentifier, newAttributeSort, newMeasureSort } from '@gooddata/sdk-model';
import { franchiseFeesLocalId, franchiseFeesAdRoyaltyLocalId, LocationStateLocalId, MenuCategoryLocalId, monthDateLocalId, quaterDateLocalId } from 'src/ldm/ext';

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

interface AreaChartBucketProps {
  viewBy?: any[];
  // stackBy?: any;
  // config?: any;
  // trendBy?:any;
  // segmentBy?: any;
  primaryMeasure: any
  // secondaryMeasures?: any[];
  // xAxisMeasure?: any;
  // yAxisMeasure?: any;
  // attribute?: any;
  // columns?: any[];
  // rows?: any[];
  // size?: any;
  // filters?: any[];
  backend: any;
  workspace: any;
  // insight:any;
  // measure: any;
  // totals?: any[];
  targetMeasure?: any;
  comparativeMeasure?: any;
  // sortBy?: any[];
}

@Component({
  selector: 'app-column-has-aggregate-measure',
  template: '<div class="s-column-chart" style="height:500px" [id]="rootDomID"></div>',
})

export class ColumnHasAggregateMeasureComponent implements OnInit {


  sortByMeasure = [newAttributeSort(LdmExt.quaterDate, "desc", true),
  newMeasureSort(LdmExt.FranchiseFees, "desc", [{
    attributeLocatorItem: {
      attributeIdentifier: quaterDateLocalId,
      element: `/gdc/md/${workspace}/obj/2009/elements?id=2`
    }
  }, {
    attributeLocatorItem: {
      attributeIdentifier: monthDateLocalId,
      element: `/gdc/md/${workspace}/obj/2071/elements?id=4`
    }
  }])]
  sortBy = [newMeasureSort(LdmExt.FranchiseFees, "desc", [{
    attributeLocatorItem: {
      attributeIdentifier: quaterDateLocalId,
      element: `/gdc/md/${workspace}/obj/2009/elements?id=1`
    }
  }, {
    attributeLocatorItem: {
      attributeIdentifier: monthDateLocalId,
      element: `/gdc/md/${workspace}/obj/2071/elements?id=1`
    }
  }])]

  totals: ITotal[] = [
    {
      measureIdentifier: franchiseFeesLocalId,
      type: "sum",
      attributeIdentifier: LocationStateLocalId,
    },
    {
      measureIdentifier: franchiseFeesAdRoyaltyLocalId,
      type: "sum",
      attributeIdentifier: LocationStateLocalId,
    },
    {
      measureIdentifier: franchiseFeesLocalId,
      type: "max",
      attributeIdentifier: LocationStateLocalId,
    },
    {
      measureIdentifier: franchiseFeesLocalId,
      type: "sum",
      attributeIdentifier: MenuCategoryLocalId,
    },
    // {
    //     measureIdentifier: "franchiseFeesAdRoyalty",
    //     type: "sum",
    //     attributeIdentifier: "menu",
    // },
  ];

  filters = [
    // newPositiveAttributeFilter(Ldm.EmployeeName.Default, ["Abbie Adams", "Aaron Clements", "Adam Kimble", "Allen Garza"]),
    newNegativeAttributeFilter(Ldm.EmployeeName.Default, { uris: [`/gdc/md/${workspace}/obj/2200/elements?id=6339877`, `/gdc/md/${workspace}/obj/2200/elements?id=6339879`] }),
    // newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2017-01-01", "2017-05-31"),
    newRelativeDateFilter(LdmExt.dateDatasetIdentifier, "GDC.time.year", -3, -3)
  ];


  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): AreaChartBucketProps {
    return {
      backend: backend,
      workspace: workspace,
      // insight: "aadl8fRCaSqC",
      // sortBy: this.sortByMeasure,
      // measure: Ldm.$Cashflow,
      // attribute: Ldm.DateDate.MmDdYyyy,

      targetMeasure: LdmExt.TotalSales2,
      primaryMeasure: Ldm.$GrossProfit,
      //   secondaryMeasures: this.lineMeasures,
      //   config: {
      //     primaryChartType: 'column', // string
      //     secondaryChartType: 'line' // string
      // },
      comparativeMeasure: Ldm.$TotalCosts,
      viewBy: [Ldm.LocationResort, Ldm.DateYear],
      // measures: this.measures,
      // rows: this.attributes,
      // columns: this.columns,
      // totals: this.totals,
      // config: {
      //   menu: {
      //     aggregations: true,    
      //     aggregationsSubMenu: true,
      //   }
      // },
      // xAxisMeasure: LdmExt.AttributeFilter_values,
      // yAxisMeasure: Ldm.$FranchiseFees,
      // size: Ldm.$FranchisedSales,
      // attribute: Ldm.EmployeeName.Default,

      // primaryMeasure: this.primaryMeasure,
      // secondaryMeasure: this.secondaryMeasure,
      // viewBy: Ldm.LocationResort,
      // trendBy: Ldm.LocationResort,
      // segmentBy: LdmExt.monthDate,
      // stackBy: Ldm.LocationResort,
      // filters: this.filters, 
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BulletChart, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v4();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
