const sum = (args) => {
    console.log("SUM = ",
        args.reduce((a, b) => a + b)
    )
}

const avg = (args) => {
    let total = args.reduce((a, b) => (a + b))
    let length = args.length
    console.log("AVG = ",
        total / length
    )
}

const oops = () => {
    console.log(
        'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    )
}

const wrong = () => {
    console.log(
        "Sorry, the argument 'hello' is not a number, please try again"
    )
}

const med = (args) => {
    let ordered = args.sort(function (a, b) {
        return a - b
    })
    let indexOfLast = ordered.length - 1
    let medianIndex = indexOfLast / 2

    console.log("MED = ")
    console.log("Ordered --> ", ordered)
    console.log("Median Index --> ", medianIndex)
    if (medianIndex % 2 === 0) {
        console.log("Median value --> ", ordered[medianIndex])
    } else {
        let medianIndexEven = (ordered[medianIndex - .5] + ordered[medianIndex + .5]) / 2
        console.log("Median value --> ", medianIndexEven)
    }
}

module.exports = { sum, avg, oops, wrong, med }