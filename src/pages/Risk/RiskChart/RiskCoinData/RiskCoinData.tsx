import { useEffect } from "react";
import { fetchPriceData } from "./fetchPriceData";
import { fetchRiskData } from "./fetchRiskData";
import { calculation } from "./formulaFunctions/calculation";

const RiskCoinData = ({chartConfigProps,coinSentiment,selectedCoin}: any) => {

   const { currentTitle, setcurrentTitle,
    metrixTabs, setMetrixTabs,
    currentIndex, 
    error} = chartConfigProps;
    
   useEffect(() => {
    if (currentTitle === 'New Metric' || currentTitle === 'CustomFormula Metric') {      
      
        if (metrixTabs[currentIndex].selectedMetric === 'Price') {
          fetchPriceData(selectedCoin, metrixTabs, currentIndex, 
            currentTitle).then((dataRes: any) => {
              metrixTabs[currentIndex].data = dataRes;
              setMetrixTabs([...metrixTabs]);       
              setcurrentTitle(''); 
            })
        }
        else if (metrixTabs[currentIndex].selectedMetric !== 'Price') {
          fetchRiskData(metrixTabs, currentIndex, coinSentiment, setMetrixTabs, setcurrentTitle);
        }
      }

      if (currentTitle === 'New Price Metric') {
        if (metrixTabs[currentIndex].selectedMetric === 'Price') {
          fetchPriceData(selectedCoin, metrixTabs, currentIndex, 
            currentTitle).then((dataRes: any) => {
              metrixTabs[currentIndex].data = dataRes;
              setMetrixTabs([...metrixTabs]);       
              setcurrentTitle(''); 
            })  
        }
        else if (metrixTabs[currentIndex].selectedMetric !== 'Price') {
          fetchRiskData(metrixTabs, currentIndex, coinSentiment, setMetrixTabs, setcurrentTitle);
        }
      }

      
    if (currentTitle === 'Add Metric' || currentTitle === 'Replace Metric') {
      console.log('coming here...',metrixTabs);
      
      if (metrixTabs[currentIndex].selectedMetric === 'Price') {
        fetchPriceData(selectedCoin, metrixTabs, currentIndex, 
          currentTitle).then((dataRes: any) => {
            metrixTabs[currentIndex].data = dataRes;
            if (currentIndex > -1) { // only splice array when item is found

              //  2nd parameter means remove one item only

              metrixTabs.splice(currentIndex, 1, metrixTabs[currentIndex]);

              setMetrixTabs([...metrixTabs]);
              console.log('ending here...',metrixTabs);
            }
            setcurrentTitle('');
          })
      }
      else if (metrixTabs[currentIndex].selectedMetric !== 'Price') {
        fetchRiskData(metrixTabs, currentIndex, coinSentiment, setMetrixTabs, setcurrentTitle);
      }
    }

    if (!error) {

      if (currentTitle === 'Formula') {        
        let inputArr: any = [];
        /**start code here for input */
        if (metrixTabs[currentIndex].formulaInputArr && metrixTabs[currentIndex].formulaInputArr.length > 0) {
          let index = 0
          /**get metric one data here start */
          let arrayOfFormula = ["cumsum", "log", "abs", "range",
            "percentage_change", "pow", "diff", "sma", "ema", "cumstd", "cummean", "min", "max", "rsi", "if", "corr",
            "shift",
            "std",
            "median",
            "sum"]

          if (metrixTabs[index].selectedMetric === 'Price') {
            fetchPriceData(selectedCoin, metrixTabs, currentIndex, 
              currentTitle).then((dataRes: any) => {
                let ifFormula: boolean = false;
                calculation(dataRes, arrayOfFormula, metrixTabs, currentIndex, ifFormula).then((res: any) => {
                  metrixTabs[currentIndex].data = res;
                  setMetrixTabs([...metrixTabs]);
                })
              })  
              setcurrentTitle('')
            
          }
          else if (metrixTabs[index].selectedMetric !== 'Price') {
            if (metrixTabs[index].selectedMetric === 'Formula' && metrixTabs.length > 1) {
              index = 1;
            }
            let dps1 = metrixTabs[index].data.map((index: any, i: any) => {
              return { x: index[0], y: [index[1]] }
            })

            let ifFormula: boolean = false;
            calculation(dps1, arrayOfFormula, metrixTabs, currentIndex, ifFormula).then((res: any) => {
              metrixTabs[currentIndex].data = res;
              setMetrixTabs([...metrixTabs]);
            })
            /**formula code end here */
            setcurrentTitle('')
          }
        }
      }

    }

   },[error, metrixTabs[currentIndex] !== undefined && metrixTabs[currentIndex].data === null, metrixTabs.length, coinSentiment, selectedCoin, currentTitle]);
  return <></>;
}

export default RiskCoinData
