// Addition
let sum = 5 + 3;
console.log(sum); // Output: 8

// Subtraction
let difference = 10 - 5;
console.log(difference); // Output: 5

// Multiplication
let product = 4 * 6;
console.log(product); // Output: 24 

// Division
let quotient = 20 / 5;
console.log(quotient); // Output: 4    

// Modulus (Remainder)
let remainder = 15 % 4;
console.log(remainder); // Output: 3

// ROUNDED OFF DIVISION 
let quotientS = 20 / 3;
let roundedQuotient = Math.round(quotientS);
console.log(roundedQuotient); //Output: 7



console.log( 2+2 + "1") ;  // output 41 
console.log("1" + 2+2) ;  // output 122 
console.log(("1") + (2+2)) ; //output 14


// => jo pehle mila usi hisab se agge continue krega for example => 
// console.log( 2+2 + "1") ;  // output 41  isme pehla number mila toh number ke hisab se 2+2 fir string concat;
// isitrah  console.log("1" + 2+2) ; // output 144 isme pehla string mila toh string ke hisab se pure usko convert kiya ; 

// ****************************************CONVERSION******************************************** ==>

console.log(null >= 0) ; // Output : true    
console.log(null == 0) ; // Output : false 
console.log(null>0 ) ;   // Output : false  

// why true , false , false bcz => The reasons is that equality check and comparision(<= , >=) work differently in javascript,
// comparision convert null to another number. treating it as zero,  thats why <= ,>=  gives false 


console.log(undefined >= 0) ; // Output : false   
console.log(undefined == 0) ; // Output : false 
console.log(undefined >0 ) ;   // Output : false 






// == checks for only Value. but === checks for value as well as Datatype.  

console.log(5 == "5"); // Output: true
console.log(5 === "5"); // Output: false

console.log(true == 1); // Output: true
console.log(true === 1); // Output: false

console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false


