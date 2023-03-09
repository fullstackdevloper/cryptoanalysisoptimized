const formulaMetrix = (chartConfigProps: any, chart: any) => {

    const {
        setcurrentTitle, 
        metrixTabs,
        currentIndex, 
        error} = chartConfigProps;
  
    if (metrixTabs[currentIndex] && metrixTabs[currentIndex].data && (error === false)) {
        
        chart.current.chart.addSeries({
          color: metrixTabs[currentIndex].color,
          data: metrixTabs[currentIndex].data,
          name: `${metrixTabs[currentIndex].formulaName}`,
          yAxis: metrixTabs[currentIndex].yAxis
        });
      }
      else {
        setcurrentTitle('');
      }
}

export default formulaMetrix
