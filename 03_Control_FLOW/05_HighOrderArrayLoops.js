//THESE LOOPS ARE SPECIALIZED IN ITERATING OF ARRAY ;
let arr = [1,2,3,4,5] ; 
for(const num of arr) 
{
 console.log(num) ; 
}

//["" ,"" ,""]
//[{},{},{}]
const greetings = "Hello World" ;
for(const greet of greetings ) 
{
    console.log(`Each char is ${greet}`) ;
}

//MAP or HASHMAP.  
const map = new Map () ;
map.set("IN" ,"INDIA");
map.set("PAK" , "PAKISTAN") ;
map.set("US" , "UNITED STATES OF AMERICA") ;
map.set("FR" , "FRANCE") ;


console.log(map) ; 

//iterating over map ;


//for iterating over map we use array destructuring method,
for (const [key , value] of map) {
    console.log( key , ":=>" , value); 
}
const obj = {
    "key1" : "value1",
    "key2" : "value2",
    "key3" : "value3"
}
//we cant iterate on object using for of loop.
// for (const key of obj) {
//     console.log(key)
    
// }

//for iterating over object we use for in loop ;
for (const key in obj) {
    console.log(key) // for printing keys 
    console.log(obj[key]) ; // for printing values;
}
const arr1 = [1,2,3,4,5]
for(const key in arr1) {
    console.log(key); // gives us index of keys. 

}


////////////////////////////////////////////////////////////////////////////////////////////


//foreach loop is a special type of loop used in array 
const arrayname = ["javascript" , "java" , "ruby" , "cpp" , "swift"]

arrayname.forEach(function (loopvariable) {
    console.log(loopvariable);
})


console.log("   ") ; 

arrayname.forEach(i  => {
    console.log(i) ;
    
});
//array.foreach (we give a call back function here and a work is done inside the function  llike above we provided a  call back function; 

/*
A callback function is a function that is passed as an argument to another function and is executed at a later point in time.
In other words, it is a function that is "called back" or invoked by another function,
Callback functions are commonly used in JavaScript, especially in scenarios where asynchronous operations are involved. 
They allow you to specify what should happen,after a certain task or event has completed.In the provided code, 
the forEach method is used on the arrayname array. It takes a callback function as an argument.
This callback function is executed for each element in the array. 
The value of each element is passed as an argument to the callback function, allowing you to perform some action on each element.
In the first example in the code, an anonymous function is used as the callback function. It takes a single parameter loopvariable, 
which represents each element in the array. Inside the function, the console.log statement is used to print each element to the console
*/



// we can also pass an prebuilt function instead of creating call back function in forEach loop definition

function printing (item) 
{
    console.log(item);
}
arrayname.forEach(printing); //function pehle bnaya hai is liye just function ka name pass kr diya . 
// NOTE ==> WE JUST PROVIDE FUNCTION REFRENCE NAA KI FUNCTION EXECUTE KRTE HAI ; 


//// WE CAN PASS MANY PARAMAETERS IN FOR EACH 
arrayname.forEach((item , index , completearray) =>
{
    console.log(item , index , completearray);
});


