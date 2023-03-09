export const findCumulativeSumObject = (arr: any) => {
    const creds = arr.reduce((acc: any, val: any) => {
      let { sum, res } = acc;
      sum += val.y[0];
      res.push({ x: val.x, sum });
      return { sum, res };
    }, {
      sum: 0,
      res: []
    });
    return creds.res;
  };