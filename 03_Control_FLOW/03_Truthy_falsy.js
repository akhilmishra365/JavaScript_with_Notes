//CONCEPT OF TRUTHY VALUES AND FALSY VALUES

/*
 There are some values that are by default Considered as truth values  Known as "TRUTHY VALUES";
 There are some values that are by defaut considered as false values known as FALSY VALUES" ; 


 TRUTHY VALUES EXAMPLE ==> 
 "0" , "false" , " ", [] , {} , function () {}

 FALSY VALUES EXAMPLES ==>
 false , 0 ,-0 , BigInt 0n , "" , null , underdefined , NaN

 */

 let userdefined = "" ;
 if(userdefined)
 {
    console.log("false values") ; 
 }
 else {
    console.log("truth  value")
 }


// check if array is empty or not ?

let arr = []
if(arr.length === 0)
{
  console.log("array is empty");

}
else{
  console.log("not empty") ; 
}


//check for if object is empty or not ?


const emptyobj = {}

if(Object.keys(emptyobj).length === 0 )
{

  //Object.keys(object_name) this method returns an "ARRAY" of all the keys of an object .  

  console.log("object is empty") ; 
}

//NULLISH COALESCING OPERATOR (??) : null undefined .

// this is used in database,
// some times hmlog database se kch fetch kr re hai ,
// aur maanlo ki usse response ni aara toh us case me hmare code structure me issue aa skta hai ,
// toh is case me hum "NULLISH COALESCING OPERATOR" ka use krte hai for safety purposes.



let username = null;
let defaultUsername = "Guest";

let selectedUsername = username ?? defaultUsername;

console.log(selectedUsername); // Output: "Guest"

//Upr agr guest nhi diya hota toh null aata . like ya toh koi value aa ri database se vo do vrna hm null ko consider krenge. 

let val1 = null??10??20 ;
console.log(val1) ;  // is case me jo bhi pehli null value assign hogi vhi return hogi hme; 
 

//Ternary operator and NULLISH COALESCING OPERATOR are two very different things.
//Condition ? True : False.   