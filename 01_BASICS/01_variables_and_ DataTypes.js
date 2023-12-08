const accountId = 11411 ; 
let email = "akhilmishra1676@gmail.com";
var Fname = "Akhil Mishra";
address  = "RajajiPuram" ; //not Preferable tareeka; 
let accountState ;  // Default Value => undefined  ; 

/*Null vs Undefined  
=> "Null" mtlb null is a SPECIAL TYPE VALUE IN JAVA SCRIPT meaning KCH NHI;
=> "Undefined" mtlb variable declare ho chuka hai but usme koi value assign Ni hui hai; 

**CONST  vs LET vs VAR** 

--> CONST=> Jo ek baar likh diya vo likh diya dobara value change ni hoga.
--> LET => isme hm values change kr skte hai; 
--> VAR => isme bhi values change kr skte hai but difference arrises in block scope aur function scope isme block scope,
aur functional scope jiasa kch bhi exist nhi krta.
khi bhi define kroge aur agli baar change hnkroge toh hr jagah change hoi jayega. 

=>  accountId = 92835934 ; X NOT ALLOWED GIVES ERROR BCZ CONST KEYWORD IS USED BEFORE DECLARATION ; 

--> NOTE => It is not Advised to use var anymore in the programming SPACE ; 
*/

console.log(typeof(address));
console.table([typeof(address) , typeof(accountId) ,typeof(email),typeof(Fname)]); 
console.table([accountId , email , Fname , address , accountState] ); 

// DATA TYPES IN JAVA SCRIPT; 
 
let num = 10; // number
let str = "hello"; // string
let bool = true; // boolean
let n = null; // null
let u = undefined; // undefined
let obj = {name: "John", age: 30}; // object
let sym = Symbol('foo'); // symbol

console.log(typeof(null)); // Its type is "object"  Interview Question;
console.log(typeof(undefined)); //Its type is undefined;  




