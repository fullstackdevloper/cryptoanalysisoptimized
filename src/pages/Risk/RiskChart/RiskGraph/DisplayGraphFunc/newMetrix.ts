import { formatKeys } from '../../../../../components/Common/formatMetrics';

const NewMetrix = (metrixTabs: any, series:any, currentIndex: any, chartConfig: any, setChartConfiguration: any) => {
    if (metrixTabs[currentIndex].data) {       
        const seriesName =
        metrixTabs[currentIndex].selectedCrypto !== null
            ? `${metrixTabs[currentIndex].selectedCrypto.symbol.toUpperCase()} ${formatKeys(metrixTabs[currentIndex].selectedMetric)}`
            : "series 1";
        series.push({
          data: metrixTabs[currentIndex].Visibility === true ? metrixTabs[currentIndex].data : [],
          name: seriesName,
          turboThreshold: 0,
          color:  metrixTabs[currentIndex].color,
          yAxis: metrixTabs[currentIndex].yAxis
        });
        
        chartConfig.series = series
        setChartConfiguration({
            ...chartConfig
          })   
          return series; 
      } else {
      }
}

export default NewMetrix
