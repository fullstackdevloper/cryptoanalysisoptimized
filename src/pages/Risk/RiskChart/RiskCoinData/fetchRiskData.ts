import React from 'react'
import { zoomCustom } from './MetrixTabFunc/zoomCustom';

export const fetchRiskData = (
    metrixTabs: any, currentIndex: any, coinSentiment: any, setMetrixTabs: any, setcurrentTitle: any) => {
    let data: any = [];
          let coin = metrixTabs[currentIndex].selectedCrypto !== null && metrixTabs[currentIndex].selectedCrypto.symbol;
          coinSentiment[coin.toUpperCase()].forEach((coin: any) => {
            const date = new Date(coin.CloseTime).getTime();
            new Date(coin.CloseTime).toUTCString();
            const coinSymbol = metrixTabs[currentIndex].selectedCrypto.symbol.toUpperCase();
            const udpi = parseFloat(coin[coinSymbol + "_" + metrixTabs[currentIndex].selectedMetric]);
            data.push([date, parseFloat(udpi.toFixed(3))]);
          });
  
          /**start code of resolution */
          let series: any = []
          series = zoomCustom(metrixTabs, currentIndex, series, data)
          
          metrixTabs[currentIndex].data = series;
          setMetrixTabs([...metrixTabs]);
          setcurrentTitle('');
}
