const {sum, avg} = require("./math")

let operation = process.argv[2]
let numbers = process.argv.slice(3)

let operation2 = process.argv[2]
let numbers2 = process.argv.slice(3)

if (operation === "sum"){
    sum(numbers)
} else if (operation2 === "avg"){
    avg(numbers2)
} else {
    console.log("I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)");
}

numbers.map((item) => {
    if (isNaN(item)) {
      console.log(`Sorry, the argument '${item}' is not a number, please try again`);
      process.exit();
    } else {
      return Number(item);
    }
  });