import { calculateEMA } from "../formulaFunctions/formulaCalcFunc/calculateEMA";
import { calculateMM } from "../formulaFunctions/formulaCalcFunc/calculateMM";
import { calculateSMA1 } from "../formulaFunctions/formulaCalcFunc/calculateSMA1";

  /**function for calculate sma,ema,mm for price */
  export async function customFormulas(metrixTabs: any, currentIndex: any, priceData: any) {
    if (metrixTabs[currentIndex].customFormula && metrixTabs[currentIndex].customFormula.days !== 0) {
      let dps1: any = []
      priceData = priceData.filter((index: any, i: any) => {
        dps1.push({ x: index.time, y: [Number(index.open), Number(index.high), Number(index.low), Number(index.close)] });
      });

      /**for sma */
      if (metrixTabs[currentIndex].customFormula.name === 'SMA') {
        /**calculate sma */
        let data = calculateSMA1(dps1, metrixTabs[currentIndex].customFormula.days)
        priceData = data.map((index: any) => [index.x * 1000, index.y]);
      }

      /**for ema */
      if (metrixTabs[currentIndex].customFormula.name === 'EMA') {
        let data = calculateEMA(dps1, metrixTabs[currentIndex].customFormula.days)
        priceData = data.map((index: any) => [index.x * 1000, index.y]);
      }

      /**for mm */
      if (metrixTabs[currentIndex].customFormula.name === 'MM') {
        let data = await calculateMM(dps1, metrixTabs[currentIndex].customFormula.days)
        priceData = data.map((index: any) => [index.x * 1000, index.y]);
      }
    } else {
      priceData = priceData.map((index: any) => [index.time * 1000, index.open]);
    }
    return priceData;
  }