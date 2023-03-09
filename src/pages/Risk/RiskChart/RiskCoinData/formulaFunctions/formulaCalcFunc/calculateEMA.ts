export const calculateEMA = (dps: any, count: any) => {
    /**formula 
   ( price-btcPrice)*2+btcprice
    */
    var multiplyer = 2 / (count + 1);
    var emaDps = [{ x: dps[0].x, y: dps[0].y.length ? dps[0].y[0] : dps[0].y }];

    for (var i = 1; i < dps.length; i++) {
      let price =dps[i].y.length ? dps[i].y[0] : dps[i].y;
      let prev = emaDps[i - 1].y
      emaDps.push({ x: dps[i].x, y: ((price - prev) * multiplyer) + prev });
      
    }
    
    return emaDps;
  }