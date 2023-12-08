//function Declaration 


// syntax ==> 

function functionName (parameter1 , parameter2 ) {
    //body of function 
    console.log(`function called with ${parameter1} and ${parameter2}`)
}
// calling of function==> 
// only functionNameis refrence but functionName() (with pARANTHESIS IS EXECUTION)
console.log(functionName("argument1" , "argument2"))

//jb function definition me value pass krte hai toh usko parameters kehte hai ,
//jb function callinf me value pass krte toh usko arguments kehte hai .

// RETURNING A VALUE THROUGH FUNCTION  

//for example create a function to add two numbers ==>

function addTwo(number1 , number2) {

    return number1+number2 

}
let returnedValue = addTwo(5,6) ; 
console.log(returnedValue) ; 

//WE CAN ADD A DEFAULT FALUE TO FUNCTION PARAMETER DEFINITION SO THAT IF NO VALUE IS GIVENT IT RETURNS A DEFAULT VALUE 
function TEST(fname = "Rahul "  , lname ) {
    console.log(`Name is ${fname} + ${lname}`)
}
TEST()

//we have a use case for example we re making a shopping cart function shopping carat me user hmata adda kiye hi jata hai hme ni pta kitte number of arguments ayenge
//  function me usk liye ?
//REST OPERATOR IS USED  (rest aund spread are same but depending upon their usage it is said spread or rest)
function CalculateCartPrice(num1)
{
    return num1 ; 

}
console.log(CalculateCartPrice(5 ,10)) 
// here the above output is 5 but what if we want to give multiple arguments in a same variable in javascript ? 
// we use REST operator 
function CalculateCartPrice(...num1)
{
    return num1 ; 

}
console.log(CalculateCartPrice(5 ,10 ,77 ,243,24,3,3,425,215,452))  ;  //this spread will give array of arguments ;
//INTRESTING CASE ==>

function CalculateCartPrice(Val1 , Val2 ,...num1)
{
    return num1;

}
console.log(CalculateCartPrice(100 , 200 , 500 ,1000)) // now num1 will return nums as [500 ,1000 ] kyunki 1 me pehla argument chla gya 2 me dusra rest jitta bcha vo num me
// in java thisis done by var args (function name (int ...args))
////////////////////////////////////////////PASSSSSING ARRAY  ,  OBJECTS IN A FUNCTION JAVASCRIPT /////////////////////////////////////

const user = {
    username :"akkhil ",
    password : "laude ka password"
} 
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and password is ${anyobject.password}`) ;
}
handleObject(user)

//or we can  pass direct object in function call 

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and password is ${anyobject.password}`) ;
}
handleObject({
    username : "hitesh",
    password : "lund pass" 
}) ;

// similarlllly we can do with araray also ;


// JAVA SCRIPT VARIABLES ARE VERY POWERFUL THEY CAN HOLD A FUNCTION ALSO 

const addtwo = function(num1,num2)
{
    return num1+num2; 
}
console.log(addtwo(4,8))

// here function ke aage uska name ni dala hai jisvariable me hold kr rwe uska name hi function hname hai;