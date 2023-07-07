const sum = (num1,num2)=>{
    return num1+num2;
}

const subtract = (num1,num2)=>{
    return num1-num2;
}

const multiply = (num1,num2)=>{
    return num1*num2;
}

const divide = (num1,num2)=>{
    if(num2==0){
        return "Invalid input";
    }
    return num1/num2;
}

const sqrt = (num1)=>{
    return Math.sqrt(num1);
}

const pow = (num1,num2)=>{
    return Math.pow(num1,num2);
}
const log = (num1)=>{
    return Math.log(num1);
}

module.exports = {sum,subtract,multiply,divide,sqrt,pow,log};