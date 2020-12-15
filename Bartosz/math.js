const sum = (arg) => {
    
    let sum = arg.reduce((a, b) => {
        return a += Number(b)
    }, 0);
    console.log(sum);
}

const avg = (arg) => {
    
    let sum = arg.reduce((a, b) => {
        return a += Number(b)
    }, 0);
    
    let avg = sum / arg.length
    console.log(avg); 
}

module.exports = {sum, avg}