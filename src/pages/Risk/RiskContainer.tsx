import { useEffect, useState } from "react";

import { InlineStylesModel } from "../../models/InlineStyleModel";
import { getMarketSentiment } from "../../services/MarketSentimentService";
import RiskChart from "./RiskChart/RiskChart";

const styles: InlineStylesModel = {
    riskContainer: {
      border: "1px solid grey",
    },
  };

const RiskContainer = ({ coinData }: any) => {
    const [coinSentiments, setCoinSentiments] = useState<any>(null);
    useEffect(() => {
        const getCoinSentiment = async () => {
          const coinSentiments = await getMarketSentiment();
          setCoinSentiments(coinSentiments);
        };
    
        if (coinSentiments === null) {
          getCoinSentiment();
        }
      });

  return (
    <div style={styles.riskContainer}>
        
        <RiskChart
            chartHeight={"70vh"}
            chartWidth="100%"
            coinData={coinData}
            coinSentiment={coinSentiments}
            riskPage={true}
          />
    </div>    
  )
}

export default RiskContainer;
