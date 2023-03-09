import { Col, Row } from 'antd'
import HighchartsReact from "highcharts-react-official";
import Highcharts, { setOptions } from "highcharts/highstock";
import { useEffect, useRef, useState } from 'react';
import { InlineStylesModel } from '../../../../models/InlineStyleModel';
import RiskCoinData from '../RiskCoinData/RiskCoinData';
import NewMetrix from './DisplayGraphFunc/newMetrix';
import multiMetrix from './DisplayGraphFunc/multiMetrix';
import addMetrix from './DisplayGraphFunc/addMetrix';
import replaceMetrix from './DisplayGraphFunc/replaceMetrix';
import formulaMetrix from './DisplayGraphFunc/formulaMetrix';


const styles: InlineStylesModel = { 
  datePickerRow2: {
      borderBottom: "1px solid rgba(164,164,164, .5)",
    },
}

const RiskGraph = (MetrixProp: any) => {
  const { chartConfigProps, formulaProps, chartProps} = MetrixProp;

  const {chartConfig, setChartConfiguration, 
    currentTitle, 
    activeTab, 
    metrixTabs, setMetrixTabs,
    currentIndex, 
    selectedCrypto, setSelectedCrypto,
    showRiskDataSetter} = chartConfigProps;

    const chart = useRef<any>();

    useEffect(() => {
      if (selectedCrypto === null) {
        if (chartProps.coinData !== null) {
          setSelectedCrypto(chartProps.coinData[0]);
          metrixTabs[0].selectedCrypto = chartProps.coinData[0]
          setMetrixTabs([...metrixTabs])
        }
      }

      let series: any = []
      if (currentTitle === 'Replace Matric') {
        replaceMetrix(chartConfig, currentIndex, metrixTabs, chart)
      } else if (currentTitle === 'Add Metric') {
        addMetrix(metrixTabs, currentIndex, chart)
      }  else if (currentTitle === 'Formula') {
        formulaMetrix(chartConfigProps, chart)
      } else if (currentTitle === 'New Metric' || currentTitle === 'CustomFormula Metric') {        
        /*On start loading default Graph chart or CustomFormula Graph chart*/
        NewMetrix(metrixTabs, series, currentIndex, chartConfig, setChartConfiguration)
      } 
      else if (currentTitle === 'New Price Metric') {
        /*On adding new price metric Graph chart*/
        NewMetrix(metrixTabs, series, currentIndex, chartConfig, setChartConfiguration)
      }
      else if (metrixTabs && metrixTabs.length > 0) {
        /*To display all Graph lines from chartConfig.series at the same time*/ 
        multiMetrix(metrixTabs, selectedCrypto, series, chartConfig, setChartConfiguration)
      }
      console.log(metrixTabs,'metrixTabs');
      console.log(chartConfig,'chartConfig');
      
    }, [metrixTabs.length, metrixTabs[currentIndex]?.data, metrixTabs[activeTab]?.yAxis, metrixTabs[activeTab]?.Visibility])

  return (
    <>
    <Row align="middle">
    <Col className="date-col">
                  {(showRiskDataSetter === true) && chartProps.coinData !== null ? (
                    <RiskCoinData
                      selectedCoin={selectedCrypto}
                      chartConfigProps={chartConfigProps}
                      coinSentiment={
                        chartProps.coinSentiment !== null
                          ? chartProps.coinSentiment
                            : null
                      }
                    />
                  ) : null}
                </Col>
    </Row>
    <HighchartsReact
                containerProps={{
                  style: {
                    height: chartProps.riskPage ? chartProps.chartHeight : "90%",
                    width: `calc(${chartProps.chartWidth} - 1vw)`,
                    borderRadius: "25px",
                    paddingBottom: "1vh",
                    paddingLeft: ".5vw",
                    paddingRight: ".5vw",
                    paddingTop: "1vh",
                  },
                }}
                highcharts={Highcharts}
                options={chartConfig}
                constructorType={"stockChart"}
                ref={chart}
              />
    </>
  )
}

export default RiskGraph
