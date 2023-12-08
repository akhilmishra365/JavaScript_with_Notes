//HERE WE WILL LEARN CRUCIAL CONCEPT ABOUT TYPE CONVERSION ; 


let name = "AKHIL ";

let converted_name  = Number(name) ; 
console.log(converted_name + "   type after conversion  =>  " + typeof(converted_name));

// String => Number ==> output value of that string (if string doesnt contains a Nnumber) changes to => NaN


let string_nums = "33" ; 
console.log(typeof(string_nums));

let num =  Number(string_nums) ; 
console.log(num);
console.log(typeof(num)) ; 

let numsString = "33abc" ;
let converted =  Number(numsString) ; 

console.log(converted) ; 
console.log(typeof(numsString)) ; 

console.log("Value of numsString has changed from ${33abc} to ${NaN}" ) ; 



/*Similarly :
String ==> Boolean :
==> if empty string "" is converted to boolean output => false; 
==> if non empty string (" ") or (" 654e267") is converted to boolean   output ==> true  



Similarly num to bool or vice versa : 
1=> true ;
0=> false ; 
*/
let a =  true;
console.log(a); 


let w = String(a);

console.log(typeof(w));  

let string  = "123" ;
let bool_string = Boolean(string)
console.log(bool_string) ; 



