import { max, min } from 'mathjs'

export function findIfCalculation(metrixTabs: any, currentIndex: any) {
    let inputArr = metrixTabs[currentIndex].formulaInput.split(/[(]|[)]|[,]|[-]|[\/]/)
    inputArr = inputArr.filter((el: any) => {
      return el != "";
    });
    let operators = ["=", "!=", ">", "<", ">=", "<="];
    let formName = inputArr[0];
    let element1 = inputArr[1].trim();
    let operator = inputArr[2].trim()
    let element2 = inputArr[3].trim();
    let trueResult = inputArr[4].trim();
    let falseResult = inputArr[5].trim();

    /**find here elements data and compare using operator start */
    let elements: any = [], data: any = [];
    elements.push(element1, element2);
    let mData = elements.map((res: any, i: any) => {
      metrixTabs.map((ele: any, i: any) => {
        if (res[0] === 'm') {
          if ((Number(ele.m) === Number(res[1])) && (ele.selectedMetric !== 'Formula')) {
            if (ele.data !== null) {
              let digData = ele.data.map((res: any, i: any) => {
                return { m: ele.m, data: res[1] === undefined ? 0 : res[1] }
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
                return { f: ele.f, data: res[1] === undefined ? 0 : res[1] }
              })
              data.push(digData)
              return res;
            }
          }
        }
      })
      return res;
    })

    if (operators.includes(operator)){
      let lengthOfMetric: any = [];
      data.map((ele: any, i: any) => {
        lengthOfMetric.push(ele && ele.length ? ele.length : 0)
      })

      let maxLength = max(...lengthOfMetric);
      let minLength = min(...lengthOfMetric);
      let startIndex = maxLength - minLength;
      var lengthArray = metrixTabs.map((t: any) => t.data && t.data !== null ? t.data.length : 0
      )
      var BigObjectIndex = lengthArray.indexOf(Math.max.apply(null, lengthOfMetric))
      let newMtericData = metrixTabs[BigObjectIndex];
      console.log("newMtericDatanewMtericDatanewMtericData:",newMtericData)
      // let maxLengthArr = max(data[0].length,data[1].length)
      if (operator === '=') {
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          console.log("data[1]data[1]data[1]:",data[1].length)
          // if (data[1][i] === undefined) {
          //   data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          // }
          
          if (data[0].length === data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push((data[1][i] && data[1][i].data?data[1][i].data:0));
              return (data[1][i] && data[1][i].data?data[1][i].data:0)
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      }
      if (operator === '!=') {
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          // if (data[1][i] === undefined) {
          //   data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          // }
          if (data[0].length !== data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push((data[1][i] && data[1][i].data?data[1][i].data:0));
              return (data[1][i] && data[1][i].data?data[1][i].data:0)
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      }
      if (operator === '>') {
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          // if (data[1][i] === undefined) {
          //   data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          // }
          if (data[0].length > data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push(data[1][i] && data[1][i].data?data[1][i].data:0);
              return (data[1][i] && data[1][i].data?data[1][i].data:0)
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      }
      if (operator === '<') {
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          if (data[1][i] === undefined) {
            data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          }
          if (data[0].length < data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push(data[1][i] && data[1][i].data?data[1][i].data:0);
              return (data[1][i] && data[1][i].data?data[1][i].data:0)
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      }
      if (operator === '>='){
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          if (data[1][i] === undefined) {
            data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          }
          if (data[0].length >= data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push((data[1][i] && data[1][i].data?data[1][i].data:0));
              return data[1][i]
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      }
      if (operator === '<=') {
        let resultData: any = [];
        data[0].map((ele: any, i: any) => {
          // if (data[1][i] === undefined) {
          //   data[1][i] = [...data[1], data[1][i] = { m: data[1][1].m, data: 0 }]
          // }
          if (data[0].length <= data[1].length) {
            if (Number(trueResult[1]) === Number(data[0][i].m)) {
              console.log("ellllllllll:",ele.data)
              resultData.push(ele.data);
              return ele.data
            } else if (data[1][i] && (Number(trueResult[1]) === Number(data[1][i].m))) {
              resultData.push(data[1][i] && data[1][i].data?data[1][i].data:0);
              return (data[1][i] && data[1][i].data?data[1][i].data:0)
            }
            // return resultData;
          } else {
            resultData.push(Number(falseResult))
            // return resultData
          }
        })
        console.log("resultData:",resultData)
        return resultData;
      } 
    }
}