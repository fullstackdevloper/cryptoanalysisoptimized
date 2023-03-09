import { InlineStylesModel } from "../../../models/InlineStyleModel"
import { useEffect, useRef, useState } from "react";
import { useChartConfig } from "../../../hooks/useChartConfig";
import MetrixTabs from "./MetrixTabs/MetrixTabs";
import RiskGraph from "./RiskGraph/RiskGraph";

import ChartPopup from "./ChartPopup/ChartPopup";
import { Button } from "antd";
import NoChart from "./NoChart";
import getRandomColor from "../../../components/Common/getRandomColor";
import useFormulaConfig from "../../../hooks/useFormulaConfig";

const styles: InlineStylesModel = { 
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
      },
      chartAndCoinContainer: {
        border: ".5px solid rgba(164,164,164,.35)",
        backgroundColor: "rgb(22,24,29)",
        height: "100%",
      }
}

const RiskChart = (chartProps: any) => {
    const myElem = useRef<any>(null);   

  const [formulaValue, setFormulaValue,
    formulaValueArr, setFormulaValueArr,
    formulaInputArr, setFormulaInputArr,
    singleFormulaInputArr, setSingleFormulaInputArr,
    renameFormula, setRenameFormula,
    m, setM,
    f, setF] = useFormulaConfig();

    const formulaProps = {formulaValue, setFormulaValue,
      formulaValueArr, setFormulaValueArr,
      formulaInputArr, setFormulaInputArr,
      singleFormulaInputArr, setSingleFormulaInputArr,
      renameFormula, setRenameFormula,
      m, setM,
      f, setF}

    const [chartConfig, setChartConfiguration, 
      currentTitle, setcurrentTitle,
      activeTab, setActiveTab,
      metrixTabs, setMetrixTabs,
      currentIndex, setcurrentIndex,
      selectedCrypto, setSelectedCrypto,
      labelSMA, setLabelSEM,
      yLabel, setYLabel,
      chartStyle, setChartStyle,
      coinData, setCoinData,
      addMatric, setAddMatric,
      isHidden, setIsHidden,
      SEMDays, setSEMDays,
      formulaOptions, setFormulaOptions,
      typeScale, setTypeScale,
      colorPicker, setColorPicker,
      error, setError,
      showRiskDataSetter, setshowRiskDataSetter,
      removalKey, setRemovalKey,
      customAxis, setCustomAxis,
      isModalOpen, setIsModalOpen,
      currentMatric, setCurrentMatic] = useChartConfig([{
        m,
        f,
        formulaName:`Formula1`,
        selectedCrypto: {symbol: 'BTC'},
        selectedMetric: 'Price',
        resolution: '1D',
        customFormula: { name: 'SMA', days: 0 },
        formulaInput: formulaValue,
        formulaInputArr,
        singleFormulaInputArr,
        scale: 'Linear',
        // color: `#F${(Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2)}`,
        color: getRandomColor(),
        yAxis: 0,
        chartStyle: 'Line',
        Visibility: true,
        zoom: 'ALL',
        data: null,
        formulaClicked: false
      }]);

      const chartConfigProps = {chartConfig, setChartConfiguration, 
      currentTitle, setcurrentTitle,
      activeTab, setActiveTab,
      metrixTabs, setMetrixTabs,
      currentIndex, setcurrentIndex,
      selectedCrypto, setSelectedCrypto,
      labelSMA, setLabelSEM,
      yLabel, setYLabel,
      chartStyle, setChartStyle,
      coinData, setCoinData,
      addMatric, setAddMatric,
      isHidden, setIsHidden,
      SEMDays, setSEMDays,
      formulaOptions, setFormulaOptions,
      typeScale, setTypeScale,
      colorPicker, setColorPicker,
      error, setError,
      showRiskDataSetter, setshowRiskDataSetter,
      removalKey, setRemovalKey,
      customAxis, setCustomAxis,
      isModalOpen, setIsModalOpen,
      currentMatric, setCurrentMatic}

  return (
   
    <div
      style={styles.mainContainer}
    >
      {
        isHidden === true ?
          (
            <NoChart chartConfigProps={chartConfigProps} 
            formulaProps={formulaProps}
            chartProps={chartProps} />
          )
          : 
      (<div
              style={{
                ...styles.chartAndCoinContainer,
                ...{ width: "100%" },
              }}
              ref={myElem}
            >
            <MetrixTabs chartConfigProps={chartConfigProps} 
            formulaProps={formulaProps} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <RiskGraph formulaProps={formulaProps} 
            chartConfigProps={chartConfigProps} chartProps={chartProps}/>
            {removalKey === true && <ChartPopup 
              title={addMatric === true ? 'Add Metric' : renameFormula === true ? 'Rename Formula' : 'Replace Metric'}
              chartConfigProps={chartConfigProps} 
              formulaProps={formulaProps} 
              coinSentiment={
                chartProps.coinSentiment !== null
                  ? chartProps.coinSentiment
                    : null
              } 
              chartProps={chartProps} 
              isModalOpen={isModalOpen} 
              setIsModalOpen={setIsModalOpen}/>}
        </div>)}
    </div>
  )
}

export default RiskChart
