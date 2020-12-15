const { sum, avg, oops, wrong, med } = require("./calculation")

// console.log(process.argv)

const args = process.argv.slice(2)
const argsArr = (args.slice(1)).map((i) => Number(i))

console.log("Original array --> ", args)
console.log("To Number array --> ", argsArr)

if (args[0] === "sum") {
    // console.log((args.slice(1)))
    // console.log(
    //     (args.slice(1)).map((i) => Number(i))
    // )
    sum(argsArr)

} else if (args[0] === "avg") {
    avg(argsArr)

} else if (args[0] === "oops") {
    oops()

} else if (args[0] === "med") {
    med(argsArr)

}


// const args = process.argv.
// always try to google the right method, there are a couple of methods that have a couple of ways of doing things
// understnad teh differences between the methods availabel and learn them