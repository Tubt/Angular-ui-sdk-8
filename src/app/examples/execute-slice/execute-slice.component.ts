import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import React, { useState } from "react";
import { RawExecute, LoadingComponent, ErrorComponent, Execute } from "@gooddata/sdk-ui";
import { newMeasure } from "@gooddata/sdk-model";

import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import { workspace } from "../../../utils/fixtures";
import { LdmExt, Ldm } from "../../../ldm";
import { newAttributeSort } from "@gooddata/sdk-model";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import invariant from 'invariant';

import {
  attributeIdentifier,
  IAttributeFilter,
  IPositiveAttributeFilter,
  INegativeAttributeFilter,
  isAttributeElementsByRef,
  isPositiveAttributeFilter,
} from "@gooddata/sdk-model";
import { AttributeFilter } from '@gooddata/sdk-ui-filters';

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
let self: any;
interface AttributeFilterProps {
  identifier: any;
  fullscreenOnMobile?: boolean;
  onApply: any;
  backend: any;
  workspace: any;
  titleWithSelection?: boolean;
  filter?: any;
}

interface ExecuteProps {
  seriesBy: any[];
  slicesBy?: any;
  sortBy?: any[];
  filters?: any[];
  workspace: any;
  backend: any;
  children: any;
}
interface ErrorProps {
  message: string;
  description?: any;
}
@Component({
  selector: 'app-execute-slice',
  template: `<div class="attribute-filter" style="height:50px" [id]="rootAttrDomID"></div>
  <div style="height:500px" [id]="rootDomID"></div>`
})
export class ExecuteSliceComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;
  public rootAttrDomID: string;
  message: string;
  filters: any[] = [];
  protected getAttributeProps(): AttributeFilterProps {
    return {
      workspace: workspace,
      backend: backend,
      identifier: attributeIdentifier(Ldm.LocationCity),
      onApply: this.onApply,
      fullscreenOnMobile: false,
      titleWithSelection: true,
    };
  }
  onApply(filter: IAttributeFilter) {
    if (isPositiveAttributeFilter(filter)) {
      self.filterPositiveAttribute(filter);
    } else {
      self.filterNegativeAttribute(filter);
    }
    self.render([filter])
  }
  public filterPositiveAttribute(filter: IPositiveAttributeFilter) {
    var filters;
    const {
      positiveAttributeFilter,
      positiveAttributeFilter: { displayForm },
    } = filter;
    const inElements = filter.positiveAttributeFilter.in;
    const checkLengthOfFilter = isAttributeElementsByRef(positiveAttributeFilter.in)
      ? positiveAttributeFilter.in.uris.length !== 0
      : positiveAttributeFilter.in.values.length !== 0;
    if (checkLengthOfFilter) {
      filters = [
        {
          positiveAttributeFilter: {
            displayForm,
            in: inElements,
          },
        },
      ];
    } else {
      return self.message = 'The filter must have at least one item selected';
    }
    return filters;
  }
  public filterNegativeAttribute(filter: INegativeAttributeFilter) {
    var filters;
    const {
      negativeAttributeFilter: { notIn, displayForm },
    } = filter;
    const checkLengthOfFilter = isAttributeElementsByRef(notIn)
      ? notIn.uris.length !== 0
      : notIn.values.length !== 0;
    if (checkLengthOfFilter) {
      filters = [
        {
          negativeAttributeFilter: {
            displayForm,
            notIn,
          },
        },
      ];
    }
    return filters;
  }

  sortBy = [newAttributeSort(Ldm.LocationCity, "asc")]

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getAtributeRootDomNode() {
    const node = document.getElementById(this.rootAttrDomID);
    invariant(node, `Node '${this.rootAttrDomID} not found!`);
    return node;
  }
  protected getErrorProps(error): ErrorProps {
    return {
      message: "There was an error getting your execution",
      description: JSON.stringify(error, null, 2)
    }
  }
  children =
    ({
      error,
      isLoading,
      result
    }) => {
      if (error) {
        return React.createElement(ErrorComponent, this.getErrorProps(error));
      }
      if (isLoading || !result) {
        return React.createElement(LoadingComponent, null);
      }
      const slices = result
        .data()
        .slices()
        .toArray();

      const LocationState = slices.map(slice => {
        const sliceTitles = slice.sliceTitles();
        return sliceTitles[0]
      })

      const LocationCity = slices.map(slice => {
        const sliceTitles = slice.sliceTitles();
        return sliceTitles[1]
      })

      const TotalSales = slices.map(slice => {
        const sales = parseInt(slice.rawData()[0])
        return sales
      })

      const franchisedSales = slices.map(slice => {
        const franchisedSales = parseInt(slice.rawData()[1])
        return franchisedSales
      })
      const GrossProfit = slices.map(slice => {
        const GrossProfit = parseInt(slice.rawData()[2])
        return GrossProfit
      })

      const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          name: "Total Sales",
          type: "column",
          data: TotalSales,
        },
        {
          name: "Franchised Sales",
          type: "column",
          data: franchisedSales
        },
        {
          type: 'spline',
          name: 'Average',
          data: GrossProfit,
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          }
        }
        ],
        xAxis: {
          categories: LocationCity
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          }
        },
        

      }
      return React.createElement(HighchartsReact, {
        highcharts: Highcharts,
        options: options
      })
    }

  protected getExecuteProp(filters): ExecuteProps {
    return {
      seriesBy: [Ldm.$TotalSales, Ldm.$TotalCosts, Ldm.$GrossProfit, Ldm.$FranchiseFees],
      slicesBy: [Ldm.LocationState, Ldm.LocationCity],
      sortBy: this.sortBy,
      filters: filters,
      backend: backend,
      workspace: workspace,
      children: this.children
    }
  }

  protected render(filters) {
    ReactDOM.render(
      React.createElement(AttributeFilter, this.getAttributeProps()), this.getAtributeRootDomNode());
    // if (this.message) {
    //   ReactDOM.render(React.createElement(ErrorComponent, this.getErrorProps()), this.getLineDataNode());
    // } else {
      ReactDOM.render(React.createElement(Execute, this.getExecuteProp(filters)), this.getRootDomNode());
    // }
  }

  ngOnInit() {
    self = this;
    this.rootDomID = uuid.v4();
    this.rootAttrDomID = uuid.v4();
  }
  ngOnChanges() {
    this.render(this.filters);
  }

  ngAfterViewInit() {
    this.render(this.filters);
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
