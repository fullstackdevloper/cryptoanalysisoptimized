import React from 'react'
import { formatKeys } from '../../../../../components/Common/formatMetrics';

const replaceMetrix = (chartConfig: any, currentIndex: any, metrixTabs: any, chart: any) => {
    if (chartConfig.series[currentIndex] && metrixTabs[currentIndex].data !== chartConfig.series[currentIndex].data) {
        chart.current.chart.series[currentIndex].update({
          color: metrixTabs[currentIndex].color,
          data: metrixTabs[currentIndex].data,
          name: `${metrixTabs[currentIndex].selectedCrypto.symbol.toUpperCase()} ${formatKeys(metrixTabs[currentIndex].selectedMetric)}`
        });
      } else {
        chart.current.chart.series[currentIndex].update({
          color:  metrixTabs[currentIndex].color,
          data: metrixTabs[currentIndex].data,
          name: `${metrixTabs[currentIndex].selectedCrypto.symbol.toUpperCase()} ${formatKeys(metrixTabs[currentIndex].selectedMetric)}`
        });
      }
}

export default replaceMetrix
