import { Col, Input, Button } from 'antd'
import React from 'react'

const EvaluateComponent = ({f, chartConfigProps, id, formulaProps}: any) => {
    const {formulaValueArr} = formulaProps;

    console.log(formulaValueArr[f],'formulaValueArrformulaValueArrformulaValueArr');
    

  return (
    <>
        <Col span={20}>
            <Input style={{ margin: '15px 15px 0px 15px' }} value={formulaValueArr[f]} placeholder={'sma(m1,7)*100'} onChange={(e) => onChangeFormulaArr(e, f, formulaProps, chartConfigProps)} />
        </Col>
        <Col span={4}>
            <Button style={{ margin: '15px 20px 0px 20px' }} onClick={(e) => evaluateFormula(e, id, chartConfigProps, formulaProps)}>
            Evaluate and draw
            </Button>
        </Col>
    </>
  )

}

export default EvaluateComponent



  
const onChangeFormulaArr = (e: any,f:any, formulaProps: any, chartConfigProps: any) =>{
  const {setFormulaValue,
    formulaValueArr, setFormulaValueArr,
    setFormulaInputArr,
    singleFormulaInputArr, setSingleFormulaInputArr} = formulaProps;

    formulaValueArr[f] = e.target.value;
    setFormulaValueArr([...formulaValueArr]);
    setFormulaValue(formulaValueArr[f])
    setSingleFormulaInputArr([...singleFormulaInputArr, formulaValueArr[f]]);
    setFormulaInputArr([formulaValueArr[f]])
}

const evaluateFormula = (e: any, tabId: any,  chartConfigProps: any, formulaProps: any) => {
  const {chartConfig, setshowRiskDataSetter,
    metrixTabs, setMetrixTabs,
     setError, setYLabel,
     customAxis, setCustomAxis,
    setcurrentTitle, setcurrentIndex} = chartConfigProps;

  const {formulaValue, formulaValueArr, f,
    formulaInputArr, singleFormulaInputArr} = formulaProps;

   setshowRiskDataSetter(true);
   metrixTabs[tabId].formulaInput = formulaValueArr[metrixTabs[tabId].f];
   metrixTabs[tabId].formulaInputArr = formulaInputArr
   metrixTabs[tabId].singleFormulaInputArr = singleFormulaInputArr
    setYLabel(tabId + 1);

    if (formulaValue) {
      // formulaValueArr[f]
      let res = formulaValue.match(/[a-z][0-9]/g);
      /**find out value of m start*/
      let data = metrixTabs.map((res: any) => {

        if (res.selectedMetric === 'Formula') {
          if (metrixTabs[tabId].f > res.f) {
            if (res.data !== null) {
              return `f${res.f}`
            }
            return ''
          }
        } else {
          return `m${res.m}`
        }
      })
      data = data.filter((item: any,
        index: any) => data.indexOf(item) === index);
      /**find error value is not exist like m2 */
      const spreaded = [...res, ...data];
      let val = spreaded.filter(el => {
        if (!(data.includes(el))) {
          return el;
        }
      })
      if (val && val.length > 0) {
        setError(true)
      } else {
        setError(false)
      }
      /**find out value of m end*/
    }

    setshowRiskDataSetter(true);
    setcurrentTitle('Formula')
    setcurrentIndex(tabId)
    if (metrixTabs.length > customAxis.length) {
      setCustomAxis([...customAxis, {
        label: `Y${tabId + 1}`,
        key: tabId + 1,
      }]);
    }
 
    chartConfig.yAxis[metrixTabs[tabId]?.yAxis].labels.enabled = true;
    setMetrixTabs([...metrixTabs]);

}

