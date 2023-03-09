import { Menu } from 'antd';

const resolutionOverlay = (tabId: any, chartConfigProps: any) => {
        
    return (
    <>
      <Menu
        onClick={(e) => handleResolutionMenuClick(e, tabId, chartConfigProps)}
        items={[
          {
            label: '1 Month',
            key: '1M',
          },
          {
            label: '1 Week',
            key: '7D',
          },
          {
            label: '1 Day',
            key: '1D',
          },
          {
            label: '1 Hour',
            key: '1H',
          },
          {
            label: '10 Minutes',
            key: '10MIN',
          },
        ]}
      />
    </>
  )
};

export default resolutionOverlay

const handleResolutionMenuClick = (e: any, tabId: any, chartConfigProps: any) => {
    const {chartConfig, metrixTabs, setMetrixTabs, setLabelSEM} = chartConfigProps;

    metrixTabs[tabId].resolution = e.key;
    if (e.key === '1M') {
      setLabelSEM('0 Months')
      chartConfig.rangeSelector.selected = 0;

    } else

      if (e.key === '7D') {
        setLabelSEM('0 Weeks')

        chartConfig.rangeSelector.selected = 1;

      } else

        if (e.key === '1D') {
          setLabelSEM('0 Days')

          chartConfig.rangeSelector.selected = 2;

        } else

          if (e.key === '1H') {
            setLabelSEM('0 Days')
            chartConfig.rangeSelector.selected = 3;

          } else

            if (e.key === '10MIN') {
              setLabelSEM('0 Days')
              chartConfig.rangeSelector.selected = 4;

            }

            setMetrixTabs([...metrixTabs]);
}

