export const findMin = (m1: any, m2: any, metricData: any, currentIndex: any) => {
    let arr: any = [];
    let arr1: any = [];

    let inputArr = metricData[currentIndex].formulaInput.split(/[(]|[)]|[,]|[-]|[\/]/)
    inputArr = inputArr.filter((el: any) => {
      return el != "";
    });

    let formName = inputArr[0];
    let elements: any = [], data: any = [];
    // elements.push(element1, element2);
    inputArr.map((ele: any, i: any) => {
      if (i === 0) {
        formName = ele;
      } else {
        elements.push(ele.trim());
      }
    })
    let mData = elements.map((res: any, i: any) => {
      metricData.map((ele: any, i: any) => {
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

    data[0].map((res: any, i: any) => {
      let val = Math.min(res, data[1][i] === undefined ? 0 : data[1][i])
      arr.push(val);
    })
    let minData = Math.min(...arr)
    m1.map((res: any, i: any) => {
      arr1.push(([res[0], minData]))
    })
    return arr1;
  }