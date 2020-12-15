const { sum, avg } = require("./math");

//console.log(process.argv);

let operation = process.argv[2];

let arguments = process.argv.slice(3);

if (operation === "sum") {
  console.log(sum(arguments));
} else if (operation === "avg") {
  console.log(avg(arguments));
} else if (operation === "oops") {
  console.log(
    "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"
  );
}

// console.log(arguments);

arguments.map((item) => {
  if (isNaN(item)) {
    console.log(
      `Sorry, the argument '${item}' is not a number, please try again`
    );
    process.exit();
  } else {
    return Number(item);
  }
});
