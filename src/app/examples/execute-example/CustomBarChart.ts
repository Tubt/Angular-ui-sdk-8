// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { LoadingComponent, ErrorComponent } from '@gooddata/sdk-ui';

const CustomBarChart = ({error, isLoading, result}) => {
  if (isLoading) {
    return React.createElement(LoadingComponent);
  }

  if (error) {
    return React.createElement(ErrorComponent, this.getErrorProps())
  }

  const config = {
    chart: {
      type: 'column',
    },
    title: {
      text: '🎉🍾🙌 My First Custom Chart 🙌🍾🎉'
    },
    series: result.executionResult.data.map((row, i) =>
      ({ data: [parseFloat(row[0])] }))
  };

  if (result) {
    return (
      React.createElement(ReactHighcharts, {
        config: config
      })
    );
  }
};

export default CustomBarChart;
