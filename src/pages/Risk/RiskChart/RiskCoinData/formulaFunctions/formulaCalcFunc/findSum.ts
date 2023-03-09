export function findSum(array: any, period: any) {
  let countAfter = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let subArr = array.slice(Math.max(i - period, 0), Math.min(i + countAfter + 1, array.length));
    let sum = subArr.reduce((a: any, b: any) => a + (isNaN(b) ? 0 : b), 0);
    result.push(sum);
  }
  return result;
}