import { Menu } from 'antd'
import React from 'react'
const axisDropOverlay = (tabId: any, chartConfigProps: any) => {
  const {customAxis, setCustomAxis} = chartConfigProps;

  return (
    <>
      <Menu
        onClick={(e: any) => handleAxisMenuClick(e, tabId, chartConfigProps)}
        items={customAxis}
      />
    </>
  )
}

export default axisDropOverlay

const handleAxisMenuClick = (e: any, tabId: any, chartConfigProps: any) => {
    const {chartConfig, setChartConfiguration, 
        metrixTabs, setMetrixTabs,
        setYLabel} = chartConfigProps;

    try {
        metrixTabs.forEach((item: any, id: any) => {
        if (id === tabId) {
            chartConfig.yAxis[metrixTabs[tabId].yAxis].lineWidth = 0
            chartConfig.series[tabId].yAxis = e.key - 1
          metrixTabs[tabId].yAxis = e.key -1 
          if (e.key > 0) {
            setYLabel(e.key)
          }
        }
      })

      setChartConfiguration({ ...chartConfig });
      setMetrixTabs([...metrixTabs]);
    } catch (err) {
      console.log(err)
    }

  };

