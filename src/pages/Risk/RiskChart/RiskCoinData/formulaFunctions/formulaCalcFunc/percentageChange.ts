export const percentageChange = (values: any, period: any) => {
    period = Number(period + 1);
    /**code start here for percentage change with period */
    let countAfter = 0;
    let result: any = [];
    let subArrVal: any = [];
    let data = values.map((ele: any, i: any) => {
      const subArr = values.slice(Math.max(i - period, 0), Math.min(i + countAfter + 1, values.length));
      if (subArr.length === period + 1) {
        subArrVal.push(subArr);
      }
      const lastIndexCurrent = subArr[subArr.length - 1];
      const prevIndex = subArr[0];
      let res = [ele.x,
      (Number(((lastIndexCurrent.y[0] - prevIndex.y[0]) / Math.abs(prevIndex.y[0]))))]
      result.push((Number(((Number(lastIndexCurrent.y[0]) - Number(prevIndex.y[0])) / Number(lastIndexCurrent.y[0])))));
      return res
    })
    if (data && data.length > 0) {
      data = data.filter(Boolean);
    }

    console.log("percentage chaneg done hree:", data)
    return data;
  }