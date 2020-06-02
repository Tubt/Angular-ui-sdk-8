import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { LdmExt } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

import { CUSTOM_COLOR_PALETTE } from "../../../utils/colors";

interface AreaChartHasColorPaletteBucketProps {
  measures: any[];
  viewBy?: any;
  backend: any;
  workspace: any;
  config?: any;
}

@Component({
  selector: 'app-area-chart-has-color-palette',
  template: '<div class="area-chart-has-color-palette" style="height:500px" [id]="rootDomID"></div>',
})

export class AreaChartHasColorPaletteComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
    LdmExt.FranchiseFeesOngoingRoyalty,
  ];  
  
  config = {
    stackMeasures: false,
    stackMeasuresToPercent: true,
    colorPalette: CUSTOM_COLOR_PALETTE,
    dataLabels: {
      visible: 'auto'
    },
    legend: {
      enabled: true,
      position: 'top',
    },
    separators: {
      thousand: '.',
      decimal: ','
    },
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): AreaChartHasColorPaletteBucketProps {
    return {
      backend: backend,
      workspace: workspace,
      measures: this.measures,
      viewBy: LdmExt.monthDate,
      config: this.config
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(AreaChart, this.getProps()), this.getRootDomNode());
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
