export const calculateSMA1 = (values: any, countBefore: any) => {

    countBefore = countBefore-1;
    let countAfter = 0;
    const result: number[][] = [];
    let array = values.map((res:any,i:any)=>{
      return res.y[0];
    })
    for (let i = 0; i < array.length; i++) {
      const subArr = array.slice(Math.max(i - countBefore, 0), Math.min(i + countAfter + 1, array.length));
     
        const addition = subArr.reduce((a: any, b: any) => 
        a + (isNaN(b) ? 0 : b), 0);    
        const avg = addition/subArr.length;
        result.push([avg]);
      
    }
    
    let data:any=[]
    values.map((res:any,i:any)=>{
      data.push({ x: res.x, y: result[i][0] });
    })
    
    if (data && data.length > 0) {
      data = data.filter(Boolean);
    }
    return data;
  }