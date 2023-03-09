import { min, max } from 'mathjs'
import { calc } from './calc';
import { formulaCalculate1 } from './formulaCalculate1';
  
export async function calculation(dps1: any, arrayOfFormula: any, metrixTabs: any, currentIndex: any, ifFormula: any) {
    let operatorExist: any = false;
    let allOperators = ['*', '+', '-', '/', '%'];
    let firstInput = metrixTabs[currentIndex].formulaInput;
    
    let result1: any = [], result: any;
    let existOperator: any = [];
    if (firstInput) {
      allOperators.map((ele: any) => {
        if (firstInput.includes(ele)) {
          existOperator.push(ele)
        }
      })
    }
    if (existOperator.length !== 0) {
      let res = calc(firstInput);
      res = firstInput.split(/[*]|[+]|[%]|[-]|[\/]/);
      result = metrixTabs[currentIndex].formulaInput;
      result1 = res;
    }
    else {
      result = metrixTabs[currentIndex].formulaInput !== undefined && metrixTabs[currentIndex].formulaInput.replaceAll(')', ') ');
      result1 = result.split(/[ ]/)
    }
    result1 = result1.filter((el: any) => {
      return el != "";
    })
    let dataForm: any;
    let formRes: any = [];
    let newData: any = [];
    let newData1: any = [];
    let dataRes: any = [];
    /**start here new code for */

    result1.forEach((element: any, index: any) => {
      arrayOfFormula.map((res: any, i: any) => {
        if (element.includes(res)) {
          formRes.push(res);
        }
      });

      /**start code here for multiple formulas with operator  */
      if (formRes && formRes.length > 0) {
        operatorExist = true;
        formRes.map((el: any, i: any) => {
          let ele = formulaCalculate1(element, metrixTabs, currentIndex, el, dps1, ifFormula);
          dataRes.push(ele);
          
        })
      } else if (formRes && formRes.length === 1 && result1.length === 1) {
        operatorExist = true;
        let ele = formulaCalculate1(element, metrixTabs, currentIndex, formRes[0], dps1, ifFormula);
        dataRes.push(ele);
        dataForm = ele;
      } 
      
      if (formRes.length !== 0 && formRes[index] === undefined) {
        /**start code  */
        let firstInput = element
        let calculation = element.match(/[a-z][0-9]/g);
        if (calculation !== null) {
          let data: any = [];
          let newData2: any = []

          let mData = calculation.map((res: any, i: any) => {
            metrixTabs.map((ele: any, i: any) => {
              if (res[0] === 'm') {
                if ((Number(ele.m) === Number(res[1])) && (ele.selectedMetric !== 'Formula')) {
                  if (ele.data !== null) {
                    let digData = ele.data.map((res: any, i: any) => {
                      return (res[1])
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
                      return (res[1])
                    })
                    data.push(digData)
                    return res;
                  }
                }
              }
            })
            return res;
          })

          metrixTabs[0].data.map((res: any, i: any) => {
            let replaceString: any;
            data.map((ele: any, indx: any) => {
              replaceString = element.replace(mData[indx], data[indx][i]);
              element = replaceString;
            })
            console.log(replaceString,'replaceStringreplaceString');
            
            let adddata = eval(replaceString);
            element = firstInput
            newData2.push([res[0], adddata])
          })
          dataRes.push(newData2)
        } else {
          operatorExist = true;
          const index = result1.indexOf(element);
          if (index > -1) { // only splice array when item is found
            result1.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        /**end code */
      }
      /**new code end */

    })

    if (dataRes && dataRes.length > 0) {
      
      let firstInput = result
      dataRes = dataRes.filter(Boolean);
      /**start here code for small length value */
      let lengthOfMetric: any = [];
      dataRes.map((ele: any, i: any) => {
        lengthOfMetric.push(ele && ele.length ? ele.length : 0)
      })

      let maxLength = max(...lengthOfMetric);
      let minLength = min(...lengthOfMetric);
      let startIndex = maxLength - minLength;
      var lengthArray = metrixTabs.map((t: any) => t.data && t.data !== null ? t.data.length : 0
      )
      var BigObjectIndex = lengthArray.indexOf(Math.max.apply(null, lengthOfMetric))
      let newMtericData = metrixTabs[BigObjectIndex];
      /**end here code for small length value */

      dataRes = dataRes.map((ele: any, i: any) => {
        if (ele.length > minLength) {
          ele.splice(0, startIndex)
        } else {
          ele = ele
        }
        return ele;
      })
      let newSmallData: any = []; let newSmallDate: any = [];
        newMtericData.data.map((res: any, i: any) => {
          if (i >= startIndex) {
            newSmallDate.push(res[0])
          }
          let replaceString: any;
          if (i < minLength) {
            result1.map((ele: any, indx: any) => {
              replaceString = metrixTabs[currentIndex].formulaInput.replace(ele, `(${dataRes[indx][i][1]})`);
              metrixTabs[currentIndex].formulaInput = replaceString;
            })
            
            let adddata = eval(replaceString);
            metrixTabs[currentIndex].formulaInput = firstInput;
            newSmallData.push(adddata);
            // newData.push([res[0], adddata])
          }
        })
        newSmallData.map((ele: any, i: any) => {
          newData1.push([newSmallDate[i], ele])
        })
        
      return newData1;
    }
    /**end here new code for */
    if (dataForm) {
      dataForm = dataForm.then((res: any) => {
        return res[0]
      })
      return dataForm;
    }
    else {
      let calculation = metrixTabs[currentIndex].formulaInput.match(/[a-z][0-9]/g);
      
      let data: any = [];
      if (calculation === null) {
        newData.push(null);
      } else {
        let mData = calculation.map((res: any, i: any) => {
            metrixTabs.map((ele: any, j: any) => {
            
            if (res[0] === 'm') {
         
              if ((Number(ele.m) === Number(res[1])) && (ele.selectedMetric !== 'Formula')) {
                
                if (ele.data !== null) {
                  let digData = ele.data.map((res: any, i: any) => {
                    res[1] = (res[1])
                    return res[1]
                  })
                  data.push(digData)
                  return res;
                }
              }
            }
            if (res[0] === 'f') {
              if (Number(ele.f) === Number(res[1])&& (ele.selectedMetric === 'Formula')) {
                
                if (ele.data !== null) {
                  let digData = ele.data.map((res: any, i: any) => {
                    return (res[1])
                  })
                  data.push(digData)
                  return res;
                }
              }
            }
          })
          return res;
        })

        /**start here code for small length value */
        let lengthOfMetric: any = [];
        data.map((ele: any, i: any) => {
          lengthOfMetric.push(ele && ele.length ? ele.length : 0)
        })

        let maxLength = max(...lengthOfMetric);
        let minLength = min(...lengthOfMetric);
        let startIndex = maxLength - minLength;

        /**change data bigger length */
        var lengthArray = metrixTabs.map((t: any) => t.data && t.data !== null ? t.data.length : 0
        )
        var BigObjectIndex = lengthArray.indexOf(Math.max.apply(null, lengthOfMetric))
        let newMtericData = metrixTabs[BigObjectIndex];

        data = data.map((ele: any, i: any) => {
          if (ele.length > minLength) {
            ele.splice(0, startIndex)
          } else {
            ele = ele
          }
          return ele;
        })

        /**end here code for small length value */

        let newSmallData: any = []; let newSmallDate: any = [];
        newMtericData.data.map((res: any, i: any) => {
          if (i >= startIndex) {
            newSmallDate.push(res[0])
          }
          let replaceString: any;
          if (i < minLength) {
            data.map((ele: any, indx: any) => {
              replaceString = metrixTabs[currentIndex].formulaInput.replace(mData[indx], `(${data[indx][i]})`);
              metrixTabs[currentIndex].formulaInput = replaceString;
            })
            let adddata = eval(replaceString);
            metrixTabs[currentIndex].formulaInput = firstInput;
            newSmallData.push(adddata);
          }
        })
        newSmallData.map((ele: any, i: any) => {
          newData.push([newSmallDate[i], ele])
        })
      }

      return newData;
    }

  }