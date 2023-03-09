import { Select, Modal, Form, Typography, Input, Row } from "antd";
import { useEffect, useState } from "react";
import getRandomColor from "../../../../components/Common/getRandomColor";
import { InlineStylesModel } from "../../../../models/InlineStyleModel";
import { AddRiskMatricSelector } from "./AddRiskMetricSelector";
import CrytpoMenuItems from "./CrytpoMenuItems";
import { RiskMetricSelector } from "./RiskMetricSelector";


const ChartPopup = ({title, chartConfigProps, formulaProps, coinSentiment, chartProps, isModalOpen, setIsModalOpen}: any) => {
  const [selectedMetric,setSelectedMetric] = useState('')
  const [currentCoin, setCurrentCoin] = useState();
  const [currentMetric, setCurrentMetric] = useState();
  const [popupError, setPopupError] = useState<any>(false);

  const {formulaValue,
    formulaInputArr,
    singleFormulaInputArr,
    m, setM,
    f} = formulaProps
  
  const {chartConfig, setChartConfiguration, 
    setshowRiskDataSetter, setcurrentTitle,
    metrixTabs, setMetrixTabs,
    customAxis, setCustomAxis,
    currentIndex, setcurrentIndex,
    selectedCrypto, setSelectedCrypto,
    coinData, setIsHidden, setYLabel, setActiveTab} = chartConfigProps;

    const [formName, setFormName] = useState(`${metrixTabs[currentIndex]?.formulaName}`)

    useEffect(() => {
        setSelectedMetric('');      
    }, [selectedCrypto, metrixTabs[currentIndex] !== undefined && metrixTabs[currentIndex].selectedCrypto]);

    useEffect(() => {
      setCurrentCoin(metrixTabs[currentIndex] !== undefined && metrixTabs[currentIndex].selectedCrypto);
      setCurrentMetric(metrixTabs[currentIndex] !== undefined && metrixTabs[currentIndex].selectedMetric);
    }, [currentIndex])

    const addCryptoSelected = (value:string)=>{
      const found = coinData.find((coin: any) => coin.id === value);
      setSelectedCrypto(found)
      if (found !== undefined) {
        setMetrixTabs([...metrixTabs]);
      }
    }
    
  const cryptoSelected = (value: string) => {
    const found = chartProps.coinData.find((coin: any) => coin.id === value);
    metrixTabs[currentIndex].selectedCrypto = found
    if (found !== undefined) {
      setMetrixTabs([...metrixTabs]);
    }

  };

    const handleCancel = (e: any) => {
      metrixTabs[currentIndex].selectedCrypto = currentCoin
      metrixTabs[currentIndex].selectedMetric = currentMetric
      setMetrixTabs([...metrixTabs]);      
      setIsModalOpen(false);
    };

    
  const renameForm = (e:any) => {
    setFormName(e.target.value);
  }

    
  const handleOk = (e: any, title: any, selectedCrypto: any, selectedMetric: any, formName: any) => {
    setcurrentTitle(title);
    if (title === 'Add Metric') {
      if (selectedCrypto && selectedMetric) {    
        
      setActiveTab(`${currentIndex + 1}`.toString());
      setshowRiskDataSetter(true);
      setYLabel(metrixTabs.length + 1);
      setMetrixTabs([...metrixTabs, {
        m: m + 1,
        f: f,
        formulaName:`Formula${f + 1}`,
        selectedCrypto,
        selectedMetric,
        resolution: '1D',
        customFormula: { name: 'SMA', days: 0 },
        formulaInput: formulaValue,
        formulaInputArr: formulaInputArr,
        singleFormulaInputArr: singleFormulaInputArr,
        scale: 'Linear',
        color: `${getRandomColor()}`,
        yAxis: chartConfig.series.length,
        chartStyle: 'Line',
        Visibility: true,
        zoom: 'ALL',
        data: null, 
        formulaClicked: false
      }
      ])
      setM(m + 1);
      setCustomAxis([...customAxis, {
        label: `Y${metrixTabs.length + 1}`,
        key: metrixTabs.length + 1,
      }]);
      chartConfig.yAxis.push({
        labels: {
          style: {
            color: "white",
          },
          lineColor: '#FF0000',
        },
        type: "linear",
        opposite: metrixTabs.length % 2 === 0 ? false : true,
        gridLineColor: "rgba(164,164,164,.35)",
        tickInterval: "1000",
        // softMinimum: "1000",
        // softMaximum: "120000",
      })

      setcurrentIndex(metrixTabs.length);
      setChartConfiguration({ ...chartConfig });
      setIsHidden(false);
      setIsModalOpen(false);
    } else {
      setPopupError(true);
    }
  }
  
  if (title === 'Rename Formula') {
    metrixTabs[currentIndex].formulaName = formName;
    setMetrixTabs([...metrixTabs])
    setIsModalOpen(false);
  }

  if (title === 'Replace Metric') {
    if (selectedCrypto && selectedMetric) { 
        setIsModalOpen(false);
      } else {
      setPopupError(true);
    }
  }
  };

  return (
    <div>
      {title === 'Add Metric'?
      (<Modal 
        title={title}  
        visible={isModalOpen} 
        onCancel={handleCancel}
        onOk={(e: any) => handleOk(e, title, selectedCrypto, selectedMetric, formName)}>
        {popupError === true && 
                  <Row>
                    <Typography style={{ color: 'red'}}>
                      All fields are required.
                    </Typography>
                  </Row>}
        <Form>
          <Typography>Assets</Typography>
          <Select style={{ width: "100%", marginBottom: "10px", backgroundColor: "gray" }} 
          onChange={addCryptoSelected} 
          value={selectedCrypto !== null ? selectedCrypto.id : null}
          >
            {CrytpoMenuItems(coinData)}
          </Select>
          <Typography>Metrics</Typography>
          <AddRiskMatricSelector
            setPopupError={setPopupError}
            setStateAction={setSelectedMetric}
            currentStateValue={selectedMetric}
            coinSentiment={coinSentiment}
            selectedCoin={selectedCrypto}
          />
        </Form>
      </Modal>) : 
      title === 'Rename Formula'?
      (<Modal title={title} 
      visible={isModalOpen} 
      onOk={(e: any) => handleOk(e, title, selectedMetric, selectedCrypto,formName)} 
      onCancel={handleCancel}>
        <Form>
          <Typography>Name</Typography>
          <Input placeholder="formula" value={formName} onChange={(e)=> {renameForm(e)}}/>
        </Form>
      </Modal>) :
      (
      <Modal 
        title={title} visible={isModalOpen} 
        onOk={(e: any) => handleOk(e, title, selectedCrypto, selectedMetric, formName)}
        onCancel={handleCancel}>
          {popupError === true && 
          <Row>
            <Typography style={{ color: 'red'}}>
              All fields are required.
            </Typography>
          </Row>}
        <Form>
          <Typography>Assets</Typography>
          <Select 
            style={{ width: "100%", marginBottom: "10px", backgroundColor: "gray" }} 
            onChange={cryptoSelected} 
            value={
              metrixTabs[currentIndex] !== undefined &&
              metrixTabs[currentIndex].selectedCrypto !== null ? 
              metrixTabs[currentIndex].selectedCrypto.id : null}>
            {CrytpoMenuItems(coinData)}
          </Select>
          <Typography>Metrics</Typography>
          <RiskMetricSelector
            setPopupError={setPopupError}
            metricData={metrixTabs}
            setMetricData={setMetrixTabs}
            currentIndex={currentIndex}
            setStateAction={setSelectedMetric}
            currentStateValue={selectedMetric}
            coinSentiment={coinSentiment}
            selectedCoin={metrixTabs[currentIndex] !== undefined && metrixTabs[currentIndex].selectedCrypto}
          />
        </Form>
      </Modal>)}
    </div>
  )
}

export default ChartPopup;