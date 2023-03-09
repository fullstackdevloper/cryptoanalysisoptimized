export const findCumulativeMeanObject = (arr: any) => {
    let count = 0;
    const creds = arr.reduce((acc: any, val: any) => {
      count = count + 1;
      let { sum, res } = acc;
      sum += val.y[0];
      let mean = sum / count;
      res.push({ x: val.x, mean });
      return { sum, res };
    }, {
      sum: 0,
      res: []
    });
    return creds.res;
  };