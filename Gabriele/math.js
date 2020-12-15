const sum = (arr) => {
  const sum = arr.reduce((acc, num) => (acc += Number(num)), 0);
  return sum;
};

const avg = (arr) => {
  const avg = arr.reduce((acc, num) => (acc += Number(num)), 0) / arr.length;
  return avg;
};

module.exports = { sum, avg };
