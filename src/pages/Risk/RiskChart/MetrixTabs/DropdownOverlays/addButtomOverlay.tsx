import { Menu } from "antd";
import {
  DollarOutlined, BarChartOutlined, PlusSquareOutlined
} from "@ant-design/icons";
import getRandomColor from "../../../../../components/Common/getRandomColor";
import { showModal } from "../../ChartPopup/showModels";

const addButtomOverlay = (tabId: any, chartConfigProps: any, isModalOpen: any, setIsModalOpen: any, formulaProps: any) => {
    return (
    <Menu
      onClick={(e: any) => handleAddButtomOverlay(e, tabId, 
           isModalOpen, setIsModalOpen, chartConfigProps, formulaProps)}
      items={[
        {
          key: '1',
          label: 'Metric',
          icon: <BarChartOutlined />,
        },
        {
          key: '2',
          label: 'Formula',
          icon: <PlusSquareOutlined />,
        },
        {
          key: '3',
          label: 'Price',
          icon: <DollarOutlined />,
        },
      ]}
    />
  );
}
export default addButtomOverlay


const handleAddButtomOverlay = (e: any, tabId: any, 
  isModalOpen: any, setIsModalOpen: any, chartConfigProps: any, formulaProps: any) => {
    const {chartConfig, setChartConfiguration, 
      setcurrentTitle, setActiveTab,
      metrixTabs, setMetrixTabs, 
      setcurrentIndex, setAddMatric,
      selectedCrypto, setYLabel,
      customAxis, setCustomAxis,
      setshowRiskDataSetter, setRemovalKey} = chartConfigProps;

      const {formulaValue, setFormulaValue,
        formulaValueArr, setFormulaValueArr,
        formulaInputArr, setFormulaInputArr,
        singleFormulaInputArr, setSingleFormulaInputArr,
        m, setM,
        f, setF} = formulaProps

  if (e.key === '1') {
   console.log('clicked 1', isModalOpen);
   setAddMatric(true);
   showModal(e, chartConfigProps);
   setcurrentTitle('Add Matric');
   setRemovalKey(true);
   setshowRiskDataSetter(false);
  }
  if (e.key === '2') {
    console.log('clicked 2');   
    setcurrentTitle('Formula');
      setRemovalKey(false);
      setshowRiskDataSetter(false);
      setActiveTab((tabId).toString());
    setMetrixTabs([...metrixTabs,
      {
        m: m,
        f: f + 1,
        formulaName: `Formula${f + 1}`,
        selectedCrypto,
        selectedMetric: 'Formula',
        resolution: '1D',
        customFormula: { name: 'SMA', days: 0 },
        formulaInput: '',
        formulaInputArr: [],
        singleFormulaInputArr: singleFormulaInputArr,
        scale: 'Linear',
        color: getRandomColor(),
        yAxis: chartConfig.yAxis.length,
        chartStyle: 'Line',
        Visibility: true,
        zoom: 'ALL',
        data: null,
        formulaClicked: true
      }])
      chartConfig.yAxis.push({
        labels: {
          enabled:false,
          style: {
            color: "white",
          },
          lineColor: '#FF0000',
        },
        type: "linear",
        opposite: tabId % 2 === 0 ? false : true,
        gridLineColor: "rgba(164,164,164,.35)",
        tickInterval: "1000",
        lineWidth: undefined
        // softMinimum: "1000",
        // softMaximum: "120000",
      })
      setF(f + 1);
      setcurrentIndex(tabId);
  }
  if (e.key === '3') {
    console.log('clicked 3');
    setActiveTab(tabId.toString());
    setRemovalKey(true);
    setshowRiskDataSetter(true);
    setcurrentTitle('New Price Metric');
    setYLabel(tabId + 1)
    setMetrixTabs([...metrixTabs, {
      m: m + 1,
      f: f,
      formulaName: `Formula${f + 1}`,
      selectedCrypto: {symbol: 'BTC'},
      selectedMetric: 'Price',
      resolution: '1D',
      customFormula: { name: 'SMA', days: 0 },
      formulaInput: formulaValue,
      formulaInputArr: formulaInputArr,
      singleFormulaInputArr: singleFormulaInputArr,
      scale: 'Linear',
      color: getRandomColor(),
      yAxis: chartConfig.yAxis.length,
      chartStyle: 'Line',
      Visibility: true,
      zoom: 'ALL',
      data: null, //metricData[0].selectedCrypto.symbol === 'btc'&& metricData[0].selectedMetric === 'Price'?metricData[0].data:null
      formulaClicked: false
    }
    ])
    setM(m + 1);
    setCustomAxis([...customAxis, {
      label: `Y${tabId + 1}`,
      key: tabId + 1,
    }]);    
    chartConfig.yAxis.push({
      labels: {
        enabled:true,
        style: {
          color: "white",
        },
        lineColor: '#FF0000',
      },
      type: "linear",
      opposite: tabId % 2 === 0 ? false : true,
      gridLineColor: "rgba(164,164,164,.35)",
      tickInterval: "1000",
      lineWidth: undefined
      // softMinimum: "1000",
      // softMaximum: "120000",
    })
    setcurrentIndex(tabId);
    setChartConfiguration({ ...chartConfig });

    /**update chart data end here */

  }
};
