import { Menu } from 'antd';
import {
    CloseOutlined, SwapOutlined
  } from "@ant-design/icons";

  export const tabButtonOverlay = (tabKey: any, chartConfigProps: any, formulaProps: any, setIsModalOpen: any) => {
    
    return (
        <>
          <Menu
                onClick={(e: any) => handleTabMenuClick(e, tabKey, chartConfigProps, formulaProps, setIsModalOpen)}
                items={[
                {
                    label: 'Replace',
                    key: '1',
                    icon: <SwapOutlined />,
                },
                {
                    label: 'Remove',
                    key: '2',
                    icon: <CloseOutlined />,
                },
                ]}
            />
            </>
        );
}

const handleTabMenuClick: any = (e: any, tabKey: any, chartConfigProps: any, formulaProps: any, setIsModalOpen: any) => {
  
  const {chartConfig, setChartConfiguration, setActiveTab,setCurrentMatic,
    metrixTabs, setMetrixTabs, setcurrentIndex, customAxis, setCustomAxis,
     setAddMatric, setIsHidden, setshowRiskDataSetter, activeTab, setYLabel, setRemovalKey} = chartConfigProps;

     const {setFormulaValue,
      formulaValueArr, setFormulaInputArr,setRenameFormula,
      setM, setF} = formulaProps

    if (e.key === '1') {
      setshowRiskDataSetter(true);
      setRemovalKey(true);
      setAddMatric(false);
      if (metrixTabs[tabKey].selectedMetric === 'Formula') {
        setRenameFormula(true);
      } else {
        setRenameFormula(false);
      }
      if (metrixTabs[tabKey] !== undefined && (metrixTabs[tabKey] !== null)) {
        setcurrentIndex(tabKey);
        setCurrentMatic(metrixTabs[tabKey]);
        setIsModalOpen(true);
      }
    }
    if (e.key === '2') {
      setcurrentIndex(tabKey);
      const index = tabKey;
      if (tabKey !== 0 && metrixTabs.length > 0) {
        setActiveTab((tabKey - 1).toString());
        setYLabel(activeTab);
      } else {
        setYLabel(tabKey + 1);
        setActiveTab('0');
      }

      if (metrixTabs.length === 1) {
        setActiveTab('0')
      }
      /*set here value of m*/

      if (index > -1) { // only splice array when item is found
        setcurrentIndex(tabKey - 1);
        formulaValueArr[metrixTabs[index].f] = '';
        setFormulaInputArr([]);
        setFormulaValue('');

        if(metrixTabs.length ===  chartConfig.yAxis.length){
          chartConfig.yAxis.splice(index,1);
        }
        // 2nd parameter means remove one item only
        metrixTabs.splice(index, 1);
        customAxis.splice(metrixTabs.length, 1);
        chartConfig.series.splice(index, 1)
        
        chartConfig.series.forEach((element: any, index: any) => {
          chartConfig.yAxis[index].opposite = index % 2 === 0 ? false : true
        })

        if (metrixTabs.length !== chartConfig.series.length) {
          chartConfig.series.forEach((element: any, index: any) => {
            chartConfig.series[index].yAxis = index
          });
          let data: any = []
          metrixTabs.forEach((element: any, index: any) => {
            if (element.data !== null) {
              data.push(element);
            }
          });
          data.forEach((element: any, index: any) => {
            element.yAxis = index
          });
        } else {
          metrixTabs.forEach((element: any, index: any) => {
            chartConfig.series[index].yAxis = index
            element.yAxis = index
          });
        }
        setChartConfiguration({ ...chartConfig });
        setMetrixTabs([...metrixTabs]);
        setCustomAxis([...customAxis]);
      }
      if (metrixTabs.length === 0) {
        setAddMatric(true); 
        setRemovalKey(true);
        setIsHidden(true);
      }

      if (metrixTabs.length > 0) {
        setF(metrixTabs[metrixTabs.length - 1].f);
        setM(metrixTabs[metrixTabs.length - 1].m);
      } 
      else {
        setM(0);
        setF(0);
      }
      /*set here value of m*/ 
      setRemovalKey(false);
      setshowRiskDataSetter(false);
      // setIsHidden(true);
    }
}
