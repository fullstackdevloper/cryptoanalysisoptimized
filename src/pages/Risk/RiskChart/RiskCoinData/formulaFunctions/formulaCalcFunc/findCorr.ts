export function findCorr(metrixTabs: any, currentIndex: any, period: any) {

  let inputArr = metrixTabs[currentIndex].formulaInput.split(/[(]|[)]|[,]|[-]|[\/]/)
  inputArr = inputArr.filter((el: any) => {
    return el != "";
  });

  let formName = inputArr[0];
  let element1 = inputArr[1].trim();
  let element2 = inputArr[2].trim();
  period = inputArr[3].trim();
  period = period;
  let elements: any = [], data: any = [];
  elements.push(element1, element2);
  let mData = elements.map((res: any, i: any) => {
    metrixTabs.map((ele: any, i: any) => {
      if (res[0] === 'm') {
        if ((Number(ele.m) === Number(res[1])) && (ele.selectedMetric !== 'Formula')) {
          if (ele.data !== null) {
            let digData = ele.data.map((res: any, i: any) => {
              return res[1] === undefined ? 0 : res[1]
            })
            data.push(digData)
            return res;
          }
        }
      }
      if (res[0] === 'f') {
        if (Number(ele.f) === Number(res[1])) {
          if (ele.data !== null) {
            let digData = ele.data.map((res: any, i: any) => {
              return res[1] === undefined ? 0 : res[1]
            })
            data.push(digData)
            return res;
          }
        }
      }
    })
    return res;
  })

  let countAfter = 0;
  const result = [];
  let x: any = [], y: any = [];
  for (let i = 0; i < data[0].length; i++) {
    x = data[0].slice(Math.max(i - (period - 1), 0), Math.min(i + countAfter + 1, data[0].length));
    y = data[1].slice(Math.max(i - (period - 1), 0), Math.min(i + countAfter + 1, data[1].length));
    //step 1 find product of xy,xx,yy

    var productXY: any = [], xSquare: any = [], ySquare: any = [];
    x.map((ele: any, i: any) => {
      productXY.push(ele * y[i]);
      xSquare.push(ele * ele);
      ySquare.push(y[i] * y[i]);
    })

    //step 2 find sum of x,y,xy,xx,yy
    let sumX = x.reduce((a: any, b: any) =>
      a + (isNaN(b) ? 0 : b), 0);
    let sumY = y.reduce((a: any, b: any) => a + (isNaN(b) ? 0 : b), 0);
    let sumXY = productXY.reduce((a: any, b: any) => a + (isNaN(b) ? 0 : b), 0);
    let sumXSquare = xSquare.reduce((a: any, b: any) => a + (isNaN(b) ? 0 : b), 0);
    let sumYSquare = ySquare.reduce((a: any, b: any) => a + (isNaN(b) ? 0 : b), 0);

    //step 3 put value in formula of pearson correlation
    // r = (n (∑xy)- (∑x)(∑y))/(√ [n ∑x2-(∑x)2][n ∑y2– (∑y)2 )
    let r: number
    let x3: any;
    let x0 = (period * sumXY - sumX * sumY);
    let x1 = (period * sumXSquare - (sumX * sumX));
    let x2 = (period * sumYSquare - (sumY * sumY));
    x3 = x1 * x2;
    r = x0 / Math.sqrt(x3);
    result.push(r);
  }
  return result;
}