import RiskContainer from "./RiskContainer";
import { fetchTop100Coins } from "../../services/MarketCapService";
import { useEffect, useState } from "react";

const Risk = () => {
  
  const [top100Coins, setTop100Coins] = useState<any>(null);

  useEffect(() => {
    const getTop100Coins = async () => {
      const coinData = await fetchTop100Coins();
      setTop100Coins(coinData);
    };

    if (top100Coins === null) {
      getTop100Coins();
    }
  }, [top100Coins]);

  return (
    <>
      <div style={{ width: "100%", marginTop: "20px"}}>
        <RiskContainer coinData={top100Coins} />
      </div>
    </>
  );
};

export default Risk;
