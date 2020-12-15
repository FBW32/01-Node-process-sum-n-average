const {sum,avg} = require("./page")


if (process.argv[2] == 'sum') {
    console.log(sum);
   
} else if (process.argv[2] == 'avg') {
    console.log(avg);    
}
else if (process.argv[2] !== 'avg' &&  process.argv[2] !== 'sum') {
    console.log(`Sorry, the argument ${process.argv[2]} is not a number, please try again`);   
}



