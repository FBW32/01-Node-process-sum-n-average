function sum(theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous+current;
  });
}
function average(theArgs) {
  let amount=theArgs.length
  return (sum(theArgs)/amount)
}
function median(theArgs){
  theArgs.sort((a, b) => a - b);
  if(theArgs.length%2==0){
    return (theArgs[theArgs.length/2-1]+theArgs[theArgs.length/2])/2
  }
  else{
    return theArgs[Math.floor(theArgs.length/2)]
  }
}

const program=(firstArg,numbers)=>{
  if (firstArg=='sum'||firstArg=='avg'||firstArg=='med'){
    const parsedNums=numbers.map(item=>Number(item))
    const notNumberInputs=numbers.filter(input=>isNaN(input)==true)
      if(notNumberInputs.length!==0){
      console.log(`Sorry, '${notNumberInputs}' is not a number, please try again`);}
      else{
         if (firstArg=='sum'){
           console.log('the sum of the numbers is:'+sum(parsedNums))
         }
         else if(firstArg=='avg'){
           console.log(average(parsedNums))
         }
         else if(firstArg=='med'){
             console.log(median(parsedNums))
         }
        }
    }
      else{
    console.log("I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (to calculate the Average)");
    process.exit}
    }




program(process.argv[2],process.argv.slice(3))
//note:the last output in the readme.md file is wrong, it should be 5.5