import { resAbs, resCorr, resCummean, resCumstd, resCumsum, resDiff, resEma, resIf, resLog, resMax, resmedian, resMin, resPercentage, resPow, resRange, resRsi, resSma, resStd, resSum } from "./resCalculation";

 export function formulaCalculate1(element: any, metrixTabs: any, currentIndex: any, res: any, dps1: any, ifFormula: any) {
    let data1: any = []
    let period: any;
    let eleArr = element.split(/[(]|[)]|[,]|[-]|[\/]/);
    console.log("eleArrrrrr:",eleArr)
    eleArr = eleArr.filter((el: any) => {
      return el != "";
    });
    res = eleArr && eleArr.length > 1 ? eleArr[0] : '';
    res = res.trim();

    let m: any, m1, m2;
    if (res === 'max' || res === 'min' || res === 'corr') {
      ifFormula = false;
      m = eleArr && eleArr.length > 1 ? eleArr[1] : 'm1';
      m1 = eleArr && eleArr.length > 1 ? eleArr[1] : 'm1';
      m2 = eleArr && eleArr.length > 1 ? eleArr[2] : 'm2';
      period = eleArr && eleArr.length > 1 ? Number(eleArr[3]) : 7;
      period = period === 'n' ? 7 : Number(period);
    } else {
      ifFormula = false;
      m = eleArr && eleArr.length > 1 ? eleArr[1] : 'm1';
      period = eleArr && eleArr.length > 1 ? Number(eleArr[2]) : 7;
    }
    //if(m1, ">", m2, m1, 0) esko manage karna hai abhi


    /**new code start here */
    let currentMetric = metrixTabs.map((res: any, i: any) => {
      if (m[0] === 'm') {
        if ((res.m === Number(m[1])) && (res.selectedMetric !== 'Formula')) {
          return res;
        }
      }
      if (m[0] === 'f') {
        if ((res.m === Number(m[1])) && (res.selectedMetric === 'Formula')) {
          return res;
        }
      }
    })
    /**new code end here */
    console.log("vvvvvvvvvvvvL:", currentMetric)
    dps1 = currentMetric.filter(Boolean)[0] && currentMetric.filter(Boolean)[0].data.map((res: any, i: any) => {
      return { x: res[0], y: [Number(res[1])] }
    })



    /**calculate value of m start */

    metrixTabs.map((ele: any, i: any) => {
      if (m[0] === 'm') {
        if ((Number(ele.m) === Number(m[1])) && (ele.selectedMetric !== 'Formula')) {
          if (ele.data !== null) {
            let digData = ele.data.map((res: any, i: any) => {
              return { x: res[0], y: res[1] === undefined ? 0 : [Number(res[1])], m: ele.m }
            })
            data1.push(digData)
            return res;
          }
        }
      }
      if (m[0] === 'f') {
        if (Number(ele.f) === Number(m[1])) {
          if (ele.data !== null) {
            let digData = ele.data.map((res: any, i: any) => {
              return { x: res[0], y: res[1] === undefined ? 0 : [Number(res[1])], f: ele.f }
            })
            data1.push(digData)
            return res;
          }
        }
      }
    })
    /**calculate value of m end */

    let newData: any = []
    let dataForm: any;

    if (res === 'sma') {
      newData = resSma(dps1, data1, ifFormula, period, newData)
      return newData;
    }

    /**code for ema start */
    if (res === `ema`) {
      newData = resEma(dps1, data1, ifFormula, period, newData)
      return newData;
    }

    /**code for moving median start */
    if (res === 'median') {
      newData = resmedian(dps1, data1, ifFormula, period, newData)
      return newData;
    }
    
    if (res === 'sum') {
      newData = resSum(dps1, data1, ifFormula, period, newData)
      return newData;
    }
    
    if (res === 'cummean') {
      newData = resCummean(dps1, data1, ifFormula, newData)
      return newData;
    }

    if (res === 'cumstd') {
      newData = resCumstd(dps1, data1, ifFormula, newData)
      return newData;
    }
    
    if (res === 'cumsum') {
      newData = resCumsum(dps1, data1, ifFormula, newData)
      return newData;
    }

    if (res === 'std') {
      newData = resStd(dps1, metrixTabs, currentIndex, ifFormula, period, newData)
      return newData;      
    }

    if (res === 'percentage_change') {
      newData = resPercentage(dps1, data1, ifFormula, period, newData)
      return newData; 
    }
    
    if (res === 'diff') {
      newData = resDiff(dps1, data1, ifFormula, period)
      return newData; 
    }

    if (res === 'log') {
      newData = resLog(dps1, data1, ifFormula, dataForm, newData)
      return newData; 
    }

    if (res === 'pow') {
      newData = resPow(dps1, data1, ifFormula, dataForm, newData, period)
      return newData; 
    }

    if (res === 'abs') {
      newData = resAbs(dps1, data1, ifFormula, dataForm, newData)
      return newData;
    }

    if (res === 'range') {
      newData = resRange(dps1, data1, ifFormula, dataForm, newData)
      return newData;
    }
    
    if (res === 'rsi') {
      newData = resRsi(dps1, data1, ifFormula, period, newData)
      return newData;
    }

    if (res === 'max') {
      newData = resMax(metrixTabs, currentIndex, ifFormula, newData)
      return newData;
    }

    if (res === 'min') {
      newData = resMin(metrixTabs, currentIndex, ifFormula, newData)
      return newData;
    }

    if (res === 'corr') {
      newData = resCorr(dps1, metrixTabs, currentIndex, ifFormula, newData, period)
      return newData;
    }

    if (res === 'if') {
      newData = resIf(dps1, metrixTabs, currentIndex, ifFormula, newData)
      return newData;
    }

    return dataForm;
  }