import React from 'react'
import { formatKeys } from '../../../../../components/Common/formatMetrics';

const addMetrix = (metrixTabs: any, currentIndex: any, chart: any) => {
    if (metrixTabs[currentIndex].data) {
        chart.current.chart.addSeries({
          color: metrixTabs[currentIndex].color,
          data: metrixTabs[currentIndex].data,
          name: `${metrixTabs[currentIndex].selectedCrypto.symbol.toUpperCase()} ${formatKeys(metrixTabs[currentIndex].selectedMetric)}`,
          yAxis: metrixTabs[currentIndex].yAxis
        });
        chart.current.chart.yAxis[currentIndex].update({
          lineColor: metrixTabs[currentIndex].color,
          lineWidth: 1
        });
      } else {
      }
}

export default addMetrix
