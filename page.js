sum = 0;
for (i = 3; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

let avg = sum / process.argv.length

console.log(sum);
console.log(avg);
module.exports= {sum,avg}