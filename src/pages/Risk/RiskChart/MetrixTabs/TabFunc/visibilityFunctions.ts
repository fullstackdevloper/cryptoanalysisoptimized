export const showChartData = (tabId: any, chartConfigProps: any) => {
    const {metrixTabs, setMetrixTabs, chartConfig, setChartConfiguration} = chartConfigProps;
        metrixTabs.forEach((tab: any, id: any) => {
        if (id === tabId) {
            metrixTabs[tabId].Visibility = true;
        }
        setMetrixTabs([...metrixTabs]);
      })
}

export const hideChartData = (tabId: any, chartConfigProps: any) => {
    const {metrixTabs, setMetrixTabs, chartConfig, setChartConfiguration} = chartConfigProps;
    metrixTabs.forEach((tab: any, id: any) => {
      if (id === tabId) {
        metrixTabs[tabId].Visibility = false;
      }
      setChartConfiguration({
        ...chartConfig
      });
      setMetrixTabs([...metrixTabs]);
    })

  }