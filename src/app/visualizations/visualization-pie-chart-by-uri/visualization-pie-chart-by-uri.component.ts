import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import { projectId, pieVisualizationUri } from "../../../utils/fixtures";
import { Visualization } from '@gooddata/react-components';

interface VisualizationPieChartByUriProps {
  projectId: any;
  uri: any;
  onLoadingChanged?: (any);
  onError?: (any);
}

@Component({
  selector: 'app-visualization-pie-chart-by-uri',
  template: '<div class="visualization-pie-chart-by-uri" style="height:400px" [id]="rootDomID"></div>',
})
export class VisualizationPieChartByUriComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() onLoadingChanged?: (any);
  @Input() onError?: (any);

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationPieChartByUriProps {
    return {
      projectId: projectId,
      uri: pieVisualizationUri,
      onLoadingChanged: this.onLoadingChanged,
      onError: this.onError,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Visualization, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
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


