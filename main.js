const {sum,avg} = require("./funtions")

console.log(process.argv);

let operation= process.argv[2]
let numbers = process.argv.slice(3)

if (operation==="sum") {
    sum(numbers)
}


let operation2 = process.argv[2]
let total = process.argv[3]
let numbers2 =process.argv.slice(4)

if (operation2==="avg" && total==="sum") {
    avg(numbers2)
}