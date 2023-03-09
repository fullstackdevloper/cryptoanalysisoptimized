import { std } from 'mathjs';

export function findStd(metrixTabs: any, currentIndex: any, period: any) {

    let inputArr = metrixTabs[currentIndex].formulaInput.split(/[(]|[)]|[,]|[-]|[\/]/)
    inputArr = inputArr.filter((el: any) => {
      return el != "";
    });

    let formName = inputArr[0];
    let element1 = inputArr[1].trim();
    period = inputArr[2].trim();
    period = period - 1;

    let elements: any = [], data: any = [];
    elements.push(element1);
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
      x = data[0].slice(Math.max(i - period, 0), Math.min(i + countAfter + 1, data[0].length));
      //step 3 put value in formula of pearson correlation
      let std1: any;
      std1 = std(...x)
      result.push(std1);
    }
    return result;
  }