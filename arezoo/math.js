function resultSum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}
function average(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue) / arr.length;
}

exports.resultSum = resultSum;
exports.average = average;
