
function factorial(a){ 
    if (a == 0) 
        return 1; 

    return a * factorial(a - 1); 
} 

console.log("factorial of 10 = " + factorial(10));
console.log("factorial of 15 = " + factorial(15));