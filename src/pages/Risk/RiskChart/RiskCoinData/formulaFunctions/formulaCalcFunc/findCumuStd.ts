import { std } from 'mathjs';

export const findCumuStd = (arr: any) => {
  const creds = arr.reduce((acc: any, val: any) => {
    let { sum, res } = acc;
    sum += std(val.y[0]);
    res.push({ x: val.x, sum });
    return { sum, res };
  }, {
    sum: 0,
    res: []
  });
  return creds.res;
};