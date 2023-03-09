import { Menu } from "antd";

const chartStyleOverlay = (tabId: any, chartConfigProps: any) => {
  return (
    <>
      <Menu
        onClick={(e: any) => handleChartStyleClick(e, tabId, chartConfigProps)}
        items={[
          {
            label: 'Line',
            key: '1',
          },
          {
            label: 'Bar',
            key: '2',
          },
        ]}
      />
    </>
  );
}

export default chartStyleOverlay

const handleChartStyleClick = (e: any, tabId: any, chartConfigProps: any) => {
    const {chartConfig, setChartConfiguration, 
        setChartStyle} = chartConfigProps;

    if (e.key === '1') {

        chartConfig.chart.type = 'line'
  
        setChartStyle('Line');
  
        setChartConfiguration({ ...chartConfig });
  
      }
  
      if (e.key === '2') {
  
        chartConfig.chart.type = 'column'
  
        setChartStyle('Bar');
  
        setChartConfiguration({ ...chartConfig });
      }
}
