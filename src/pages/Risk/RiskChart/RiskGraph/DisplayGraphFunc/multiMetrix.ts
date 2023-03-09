import React from 'react'
import { formatKeys } from '../../../../../components/Common/formatMetrics';

const multiMetrix = (metrixTabs: any, selectedCrypto: any, series: any, chartConfig: any, setChartConfiguration: any) => {
    metrixTabs.forEach((v: any, index: any) => {
        if (v && v !== undefined && v.data !== undefined && v.data !== null && v.data.length > 0) {
          chartConfig.yAxis[v.yAxis].lineColor = chartConfig.yAxis[v.yAxis].lineColor === undefined? v.color : chartConfig.yAxis[v.yAxis].lineColor;
          chartConfig.yAxis[v.yAxis].lineWidth = 1;
          const seriesName =
            v.selectedMetric === 'Formula' ? `${v.selectedMetric}${v.f}` :
              selectedCrypto !== null
                ? `${v.selectedCrypto.symbol.toUpperCase()} ${formatKeys(v.selectedMetric)}`
                : "series 1";
          series.push({
            data: metrixTabs[index].Visibility === true ? v.data : [],
            name: seriesName,
            turboThreshold: 0,
            color: metrixTabs[index].color,
            yAxis: v.yAxis
          });

        }

        else {

        }

      })

      setChartConfiguration({
        ...chartConfig,
        series: series
      })
}

export default multiMetrix
