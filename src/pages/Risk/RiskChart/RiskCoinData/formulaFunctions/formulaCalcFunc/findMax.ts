import { max } from 'mathjs'

export const findMax = (m1: any, m2: any, metrixTabs: any, currentIndex: any) => {
    let arr: any = [];
    let arr1: any = [];
    /**new code started here for finding max value */

    let inputArr = metrixTabs[currentIndex].formulaInput.split(/[(]|[)]|[,]|[-]|[\/]/)
    inputArr = inputArr.filter((el: any) => {
      return el != "";
    });

    let formName = inputArr[0];
    let element1 = inputArr[1].trim();
    let element2 = inputArr[2].trim();

    let elements: any = [], data: any = [];
    // elements.push(element1, element2);

    /**start code here for get max value from muliple metrics */
    inputArr.map((ele: any, i: any) => {
      if (i === 0) {
        formName = ele;
      } else {
        elements.push(ele);
      }
    })

    /**start code here for get min value from muliple metrics */

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

    let maxLengthData = max(data[0].length, data[1].length);
    data[0].map((res: any, i: any) => {
      let val = Math.max(res, data[1][i] === undefined ? 0 : data[1][i])
      arr.push(val);
    })
    let maxData = Math.max(...arr)
    m1.map((res: any, i: any) => {
      arr1.push(([res[0], maxData]))
    })
    return arr1;
    /**new code end here for finding max value */


}