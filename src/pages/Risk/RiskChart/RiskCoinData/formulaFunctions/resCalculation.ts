import { log, pow, abs } from 'mathjs';
import { findCorr } from './formulaCalcFunc/findCorr';

import { calculateEMA } from "./formulaCalcFunc/calculateEMA";
import { calculateSMA1 } from "./formulaCalcFunc/calculateSMA1";
import { findCumulativeMeanObject } from "./formulaCalcFunc/findCumulativeMeanObject";
import { findCumulativeSumObject } from "./formulaCalcFunc/findCumulativeSumObject";
import { findCumuStd } from "./formulaCalcFunc/findCumuStd";
import { findMax } from './formulaCalcFunc/findMax';
import { findMin } from './formulaCalcFunc/findMin';
import { findMovingMedian } from "./formulaCalcFunc/findMovingMedian";
import { findStd } from "./formulaCalcFunc/findStd";
import { findSum } from "./formulaCalcFunc/findSum";
import { getDifference } from "./formulaCalcFunc/getDifference";
import { percentageChange } from "./formulaCalcFunc/percentageChange";
import { rsiChange } from './formulaCalcFunc/rsiChange';
import { findIfCalculation } from './formulaCalcFunc/findIfCalculation';

export const resSma = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => {
      dps1 = data1[0]
      ifFormula = false;
      let res = calculateSMA1(dps1, period)
      let data = res.map((index: any) => [index.x, index.y]);
      newData.push(data);
      return newData[0];
}

export const resEma = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => {
    ifFormula = false;
      dps1 = data1[0]
      let res = calculateEMA(dps1, period)
      let data = res.map((index: any) => [index.x, index.y]);
      newData.push(data);
      return newData[0];
}

export const resmedian = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => {
      dps1 = data1[0]
      ifFormula = false;
      let myArr = dps1.map((res: any, i: any) => {
        return res.y[0];
      })
      let res = findMovingMedian(myArr, Number(period) - 1, 0)
      
      let result = res.map((ele: any, i: any) => {
        return [dps1[i].x, ele]
      })
      newData.push(result);
      return newData[0];
}

export const resSum = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => {
      dps1 = data1[0]
      ifFormula = false;
      let data = dps1.map((res: any, i: any) => {
        return res.y[0];
      })
      let res = findSum(data, period - 1);
      res = dps1.map((ele: any, i: any) => {
        return [ele.x, res[i]];
      })
      newData.push(res);
      return newData[0];
}

export const resCummean = (dps1: any, data1: any, ifFormula: any, newData: any) => {
      dps1 = data1[0];
      ifFormula = false;
      let res = findCumulativeMeanObject(dps1);
      let data = res.map((index: any, i: any) => [index.x, index.mean])
      newData.push(data);
      return newData[0];
}

export const resCumstd = (dps1: any, data1: any, ifFormula: any, newData: any) => {
  dps1 = data1[0];
  ifFormula = false;
  let res = findCumuStd(dps1)

  let data = res.map((index: any, i: any) => [index.x, index.sum])
  newData.push(data);
  return newData[0];
}

export const resCumsum = (dps1: any, data1: any, ifFormula: any, newData: any) => {
      dps1 = data1[0];
      ifFormula = false;
      let res = findCumulativeSumObject(dps1)

      let data = res.map((index: any, i: any) => [index.x, index.sum])
      newData.push(data);
      return newData[0];
}

export const resStd = (dps1: any, metrixTabs: any, currentIndex: any, ifFormula: any, period: any, newData: any) => {
  ifFormula = false;
  let res = findStd(metrixTabs, currentIndex, period - 1);
  let result = res.map((ele: any, i: any) => {
    return [dps1[i].x, ele]
  })
  newData.push(result);
  return newData[0];
}

export const resPercentage = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => {
  ifFormula = false;
  dps1 = data1[0]
  let res = percentageChange(dps1, period - 1)
  newData.push(res);
  return newData[0];
}

export const resDiff = (dps1: any, data1: any, ifFormula: any, period: any) => {
    ifFormula = false;
    dps1 = data1[0]
    let res = getDifference(dps1, period - 1)
    return res;
}

export const resLog = (dps1: any, data1: any, ifFormula: any, dataForm: any, newData: any) => {
  ifFormula = false;
  dps1 = data1[0]
  dataForm = dps1.map((index: any) => {
    return [index.x, log(index.y[0])]
  }
  );
  newData.push(dataForm);
  return newData[0];
}

export const resPow = (dps1: any, data1: any, ifFormula: any, dataForm: any, newData: any, period: any) => {
    ifFormula = false;
    dps1 = data1[0]
    dataForm = dps1.map((index: any) => [index.x, pow(index.y[0], period)]);
    newData.push(dataForm);
    return newData[0];
}

export const resAbs = (dps1: any, data1: any, ifFormula: any, dataForm: any, newData: any) => { 
    ifFormula = false;
    dps1 = data1[0]
    dataForm = dps1.map((index: any) => [index.x, abs(index.y[0])]);
    newData.push(dataForm);
    return newData[0];
}

export const resRange = (dps1: any, data1: any, ifFormula: any, dataForm: any, newData: any) => { 
      ifFormula = false;
      dps1 = data1[0]
      dataForm = dps1.map((index: any, i: any) => [index.x, i]);
      newData.push(dataForm);
      return newData[0];
}

export const resRsi = (dps1: any, data1: any, ifFormula: any, period: any, newData: any) => { 
    ifFormula = false;
    dps1 = data1[0]
    let res = rsiChange(dps1, period)
    newData.push(res);
    return newData[0];
}

export const resMax = (metrixTabs: any, currentIndex: any, ifFormula: any, newData: any) => { 
  ifFormula = false;
  if (metrixTabs && metrixTabs[metrixTabs.length - 1].m > 1) {
    let m1 = metrixTabs[0].data;
    let m2 = metrixTabs[1].data;
    let res = findMax(m1, m2, metrixTabs, currentIndex)
    newData.push(res);
    return newData[0];
  }
}

export const resMin = (metrixTabs: any, currentIndex: any, ifFormula: any, newData: any) => { 
  ifFormula = false;
  if (metrixTabs && metrixTabs[metrixTabs.length - 1].m > 1) {
    let m1 = metrixTabs[0].data;
    let m2 = metrixTabs[1].data;

    let res = findMin(m1, m2, metrixTabs, currentIndex)
    newData.push(res);
    return newData[0];
  }
}

export const resCorr = (dps1: any, metrixTabs: any, currentIndex: any, ifFormula: any, newData: any, period: any) => { 
  ifFormula = false;
  let res = findCorr(metrixTabs, currentIndex, period);
  let result = res.map((ele: any, i: any) => {
    return [dps1[i].x, ele]
  })
  newData.push(result);
  return newData[0];
}

export const resIf = (dps1: any, metrixTabs: any, currentIndex: any, ifFormula: any, newData: any) => { 
  ifFormula = true;
      let data = findIfCalculation(metrixTabs, currentIndex);
      let difference  = metrixTabs[0].data.length - data.length;
      console.log("differenece",difference)
      let ifnewData:any=[];
      metrixTabs[0].data.map((ele: any, i: any) => {
        if(i>=difference){
          ifnewData.push(ele[0]);
        }
        
      })
      let res = ifnewData.map((ele:any,i:any)=>{
        return [ele[0], data[i]]
      })
      
      newData.push(res);
      return newData[0];
}