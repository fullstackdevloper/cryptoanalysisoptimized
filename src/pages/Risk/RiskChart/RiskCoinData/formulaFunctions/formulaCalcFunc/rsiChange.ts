export const rsiChange = (values: any, period: any) => {
    // let data: any = [];
    // let res = getDifference(values,period-1)
    // // .then((res: any) => {
    // let difference = res;
    // let sumGain = 0;
    // let sumLoss = 0;
    // res.forEach((ele: any, i: any) => {
    //   if (ele[1] > 0) {
    //     sumGain += ele[1]
    //   } else {
    //     sumLoss += abs(ele[1])
    //   }
    //   let avgGain = sumGain/period;
    //   let avgLoss = sumLoss/period;
    //   var relativeStrength = avgGain/avgLoss;
    //   data.push([ele[0], (100.0 - (100.0 / (1 + relativeStrength)))])
    // })
    // // })
    // return data;

    period = Number(period);
    /**code start here for percentage change with period */
    let countAfter = period;
    let result: any = [];
    let subArrVal: any = [];
    let data = values.map((ele: any, i: any) => {
      const subArr = values.slice(Math.max(i - period, 0), Math.min(i + countAfter + 1, values.length));
      /**new code start here */
      let difference: any = [];
      subArr.map((ele: any, i: any) => {
        difference.push(subArr[i + 1]?.y[0] - ele?.y[0]);
      })

      /**new code end here */
      const lastIndexCurrent = subArr[subArr.length - 1];
      const prevIndex = subArr[0];
      let res = [ele.x,
      (Number(((lastIndexCurrent.y[0] - prevIndex.y[0]))))]
      result.push((Number(((Number(lastIndexCurrent.y[0]) - Number(prevIndex.y[0]))))));
      return res
    })

    if (data && data.length > 0) {
      data = data.filter(Boolean);
    }
    return data;
  }