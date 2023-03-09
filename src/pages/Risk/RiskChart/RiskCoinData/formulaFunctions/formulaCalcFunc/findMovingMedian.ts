
export function findMovingMedian(array: any, countBefore: any, countAfter: any) {
    if (countAfter == undefined) countAfter = 0;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const subArr = array.slice(Math.max(i - countBefore, 0), Math.min(i + countAfter + 1, array.length));
      const mid = Math.floor(subArr.length / 2),
        nums = [...subArr].sort((a, b) => a - b);
      const avg = subArr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      result.push(avg);
    }
    return result;
  }