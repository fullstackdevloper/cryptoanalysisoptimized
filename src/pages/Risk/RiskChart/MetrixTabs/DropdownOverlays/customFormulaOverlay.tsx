import { Button, Col, Input, Menu, Radio, Row } from 'antd';
import React from 'react'

const customFormulaOverlay = (tabId: any, chartConfigProps: any) => {

    const {chartConfig, setChartConfiguration, 
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
        setFormulaOptions} = chartConfigProps;

  const options = [
    {
      label: 'SMA',
      value: 'SMA',
    },
    {
      label: 'EMA',
      value: 'EMA',
    },
    {
      label: 'MM',
      value: 'MM',
    },
  ];

 return (
    <>
      <div className="MenuOptionsCss">
        <Radio.Group options={options} optionType="button" onChange={(e: any) => selectCustomFormula(e, setFormulaOptions)} />
        <Menu
          onClick={(e) => handleAverageFormulas(e, tabId, chartConfigProps)}
          items={
            metrixTabs[tabId].resolution === '1D' ?
              [
                {
                  label: '0 Day',
                  key: 0,
                },
                {
                  label: '7 Day',
                  key: 7,
                },
                {
                  label: '14 Day',
                  key: 14,
                },
                {
                  label: '30 Day',
                  key: 30,
                },
                {
                  label: '50 Day',
                  key: 50,
                },
                {
                  label: '90 Day',
                  key: 90,
                },
              ] : metrixTabs[tabId].resolution === '1M' ? [
                {
                  label: '0 Months',
                  key: 30,
                },
                {
                  label: '2 Months',
                  key: 60,
                },
                {
                  label: '4 Months',
                  key: 120,
                },
                {
                  label: '6 Months',
                  key: 180,
                },
                {
                  label: '8 Months',
                  key: 240,
                },
                {
                  label: '10 Months',
                  key: 300,
                },
                {
                  label: '12 Months',
                  key: 360,
                },
              ] : metrixTabs[tabId].resolution === '7D' ? [
                {
                  label: '0 Weeks',
                  key: 7,
                },
                {
                  label: '2 Weeks',
                  key: 14,
                },
                {
                  label: '4 Weeks',
                  key: 28,
                },
                {
                  label: '6 Weeks',
                  key: 42,
                },
                {
                  label: '8 Weeks',
                  key: 56,
                },
                {
                  label: '10 Weeks',
                  key: 70,
                },
                {
                  label: '12 Weeks',
                  key: 82,
                },
              ] : metrixTabs[tabId].resolution === '1H' ? [
                {
                  label: '0 Day',
                  key: 0,
                },
                {
                  label: '7 Day',
                  key: 7,
                },
                {
                  label: '14 Day',
                  key: 14,
                },
                {
                  label: '30 Day',
                  key: 30,
                },
                {
                  label: '50 Day',
                  key: 50,
                },
                {
                  label: '90 Day',
                  key: 90,
                },
              ] : metrixTabs[tabId].resolution === '10MIN' ? [
                {
                  label: '0 Day',
                  key: 0,
                },
                {
                  label: '7 Day',
                  key: 7,
                },
                {
                  label: '14 Day',
                  key: 14,
                },
                {
                  label: '30 Day',
                  key: 30,
                },
                {
                  label: '50 Day',
                  key: 50,
                },
                {
                  label: '90 Day',
                  key: 90,
                },
              ] : [
                {
                  label: '0 Day',
                  key: 0,
                },
                {
                  label: '7 Day',
                  key: 7,
                },
                {
                  label: '14 Day',
                  key: 14,
                },
                {
                  label: '30 Day',
                  key: 30,
                },
                {
                  label: '50 Day',
                  key: 50,
                },
                {
                  label: '90 Day',
                  key: 90,
                },
              ]
          }
        />
        <Row>
          <Col span={16}>
            <Input value={SEMDays} placeholder="100" onChange={(e) => onChangeSEM(e, setSEMDays)} />
          </Col>
          <Col span={8}>
            <Button onClick={() => applySEM(tabId, chartConfigProps)}>
              Apply
            </Button>
          </Col>
        </Row>
      </div></>
  );
}

export default customFormulaOverlay

const handleAverageFormulas = (e: any, tabId: any, chartConfigProps: any) => {
    const {setcurrentTitle, metrixTabs,
         setMetrixTabs, setcurrentIndex,
         setLabelSEM, formulaOptions} = chartConfigProps;

    setLabelSEM(`${e.key} Days`);
    let obj = { name: formulaOptions, days: Number(e.key) }
    setcurrentIndex(tabId)
    metrixTabs[tabId].customFormula = obj;
    setcurrentTitle('CustomFormula Metric');
    setMetrixTabs([...metrixTabs])
}

const selectCustomFormula = (e: any, setFormulaOptions: any) => {
    setFormulaOptions(e.target.value);
  }

const applySEM = (tabId: any, chartConfigProps: any) => {
    const {setLabelSEM, setcurrentTitle, metrixTabs,
        setcurrentIndex, SEMDays,
         formulaOptions} = chartConfigProps;

    setLabelSEM(`${SEMDays} Days`);
    let obj = { name: formulaOptions, days: SEMDays }
    setcurrentIndex(tabId)
    metrixTabs[tabId].customFormula = obj;
    setcurrentTitle('CustomFormula Metric');
}

const onChangeSEM = (e: any, setSEMDays: any) => {
    setSEMDays(e.target.value)
  }

