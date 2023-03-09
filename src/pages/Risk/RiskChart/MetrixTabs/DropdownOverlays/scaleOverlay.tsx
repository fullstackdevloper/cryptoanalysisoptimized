import { Menu } from 'antd';

const scaleOverlay = (tabId: any, chartConfigProps: any) => {
  return (
    <>
      <Menu
        onClick={(e: any) => handleScaleClick(e, tabId, chartConfigProps)}
        items={[
          {
            label: 'Linear',
            key: '1',
          },
          {
            label: 'Log',
            key: '2',
          },
        ]}
      />
    </>
  );
}

export default scaleOverlay

const handleScaleClick = (e: any, tabId: any, chartConfigProps: any) => {
    const {chartConfig, setChartConfiguration, 
        metrixTabs, setTypeScale} = chartConfigProps;

    if (e.key === '1') {
        chartConfig.yAxis[tabId].type = 'linear'
        setTypeScale('Linear');
        metrixTabs[tabId].scale = 'Linear';
        setChartConfiguration({ ...chartConfig });
      }
  
      if (e.key === '2') {
        chartConfig.yAxis[tabId].type = 'logarithmic'
        setTypeScale('Log');
        metrixTabs[tabId].scale = 'Log';
        setChartConfiguration({ ...chartConfig });
      }
}
