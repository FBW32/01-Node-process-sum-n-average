const sum=(arg)=>{
    
    let sum=arg.reduce((acc,num)=>{
        return acc += Number(num)
    },0);
    console.log(sum);
}

const avg=(arg)=>{
    
    let sum = arg.reduce((acc,num)=>{
        return acc += Number(num)
    },0)
    
    let avg = sum/ arg.length
    console.log(avg); 
}

module.exports ={sum,avg}