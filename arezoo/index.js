const { resultSum, average } = require("./math");

console.log(process.argv);
console.log(process.argv[2]);
var myArgs = process.argv.slice(3);
console.log(myArgs);
let finalArray = myArgs.map((item) => {
  if (isNaN(item)) {
    console.log(`sorry ${item} is not a number`);
    process.exit();
  } else {
    return Number(item);
  }
});
console.log("finalArray", finalArray);
//----------------------------------------------
if (process.argv[2] === "sum") {
  console.log("sum: ", resultSum(finalArray));
} else if (process.argv[2] === "avg") {
  console.log("average: ", average(finalArray));
} else {
  console.log(
    "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"
  );
}
