//Numbers can be declared in two ways.

// 1=> 
    const num  = 123 ;

// 2=> 
const num2 = new Number(12300000000000) ; // THIS CREATES AN NUM OBJECT. isse hm ispe num pe number ke functions like exponent ,max , min etc apply kr skyte hai ;

console.log(typeof(num2)) ; 
console.log(num2)  ; 


console.log(num.toPrecision(2)) ;  
console.log(num.toFixed(1)) ;
console.log(num2.toLocaleString('en-IN')) ; 
console.log(isNaN(num2)) ; 

console.log(isFinite(num2)) ; 


//**************************************MATHS************************************ */


// MATH FUNCTION IN JAVASCRIPT SAME AS JAVA 
console.log(Math.floor(4.9999999))
//other function like math.floor , math.random , math,.ceile etc ,etc;