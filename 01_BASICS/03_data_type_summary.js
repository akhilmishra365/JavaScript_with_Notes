//JavaScript data types has been categorized into types (on the basis of how they are called and accessed)



//Primitive (call by value. )



let myNumber = 42; // number
let myString = "Hello, world!"; // string
let myBoolean = true; // boolean
let myUndefined = undefined; // undefined
let myNull = null; // null   ====>       *** return type => object 

/* QUES => WHY TYPE OF OBJECT IS NULL ?
ANS => The reasoning behind this is that null , in contrast with undefined , was (and still is) often used where objects appear. 
In other words, null is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, 
he followed the same paradigm, and it made sense (arguably) to return "object"/
*/





let mySymbol = Symbol("123"); // symbol
let mySymbo2 = Symbol("123") ; 
console.log(mySymbo2 === mySymbol) ; 


//Non primitive or refrence types :
//==> Arrays ;
//==> objects ; ==> just as key value pair ;
//==> functions ;  ==> return type Functional Object; 

const Arrays = ["Ramesh" , "Adil" , "Subash" ] ;

// object ==> 

let myobject = {
    name : "Akhil" , 
    class : "btech fourth year" 
};
//function ==> (we can store a funcction in a variable in java Script) ;

 const func = function(argument) {
    console.log("Hello" +argument) ; 

}
func("PUSSY") ; 

 
