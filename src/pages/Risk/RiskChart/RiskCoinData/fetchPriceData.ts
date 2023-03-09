import { fetchPriceInformation } from "../../../../services/RiskChartService";
import { customFormulas } from "./MetrixTabFunc/customFormulas";

export const fetchPriceData = async (selectedCoin: any, metrixTabs: any, currentIndex: any, currentTitle: any) => {
    if (selectedCoin || metrixTabs[currentIndex].selectedCrypto) {
      if (metrixTabs[currentIndex].zoom === 'YTD') {
        metrixTabs[currentIndex].zoom = '1Y'
      }
      let priceData = await fetchPriceInformation(
        metrixTabs[currentIndex].selectedCrypto !== null && metrixTabs[currentIndex].selectedCrypto.symbol,
        metrixTabs[currentIndex].zoom
      );
      if (currentTitle === 'CustomFormula Metric') {
        priceData = await customFormulas(metrixTabs, currentIndex, priceData);
        return priceData;
      } else if (currentTitle === 'Formula') {
        let dps1: any = [];
        priceData = priceData.filter((index: any, i: any) => {
          dps1.push({ x: index.time * 1000, y: [Number(index.open), Number(index.high), Number(index.low), Number(index.close)] });
        });
        return dps1;
      } else {
        priceData = priceData.map((index: any) => [index.time * 1000, index.open]);
        return priceData;
      }
    }    
  };