// objects can be created in javascript 
// 1)object literals   --> doesnt creates singleton 
// 2)constructer --> creates singleton 


//Object literal 

//syntax  it stores in key value pair;

// const jsusr = { 
//     key : value ,
//     key2 : value2,
// } ; 
// in backened key are stored as string; 

const jsuser = {
    name : "akhil" ,
    branch : "aiml" , 
    isLoggedin : false
};

//How to access object keys we have two methods 
// 1)dot Notiation 

console.log(jsuser.name) ; 

// 2)square notation  but in this method you have to give key as an string argument ;

console.log(jsuser["name"]) ; 

// we have another primitive data type known as symbol 
// interview task ==>  use symbol data type as a key in an object ; 

let mysymbol = Symbol("key1") // declaring a symbol varialble ; 
 

// const jsuser2 = {
//     name : "akhil" ,
//     branch : "aiml" , 
//     isLoggedin : false,
//     mysymbol : "key2"   //this is wrong as key still of string type but we have to use it as symbol 

// };


const jsuser2 = {
    name : "akhil" ,
    branch : "aiml" , 
    isLoggedin : false,
    [mysymbol] : "keys"

};
console.log(jsuser2[mysymbol]) ; //note that we have not used double quotes here in [] notation ;


// changing a Keyvalue in objects 

//syntax == > 

jsuser.name = "acp" ; 
console.log(jsuser.name) ; 

//we want that no one can change our object here we use freeze method; 

// Object.freeze(jsuser);

// now if we try to change object will not give an error but the changes wont be reflected  bcz we have fereezed the key 
// jsuser.name = "AKHIL" ; 
// console.log(jsuser.name) ; 
// console.log(jsuser) ; 


//now lets pass a function in  javascript as an objects key value pair ==> 
//function in java script are treated as TYPE 1 citizen ie same as vaariable ;
// letd add a function lin our object ==> 



jsuser.greeting = function(){
    console.log("hello js");
}
//console.log(jsuser.greeting) //  gives A FUNCTION CALL BACK NOT FUNCTION VALUE ;

//console.log(jsuser.greeting()) ;o//returns function value

// now we want to have a functionality so that it gives hello , usewr in output ==>

jsuser.greetingtwo = function(){
    console.log(`hello ${this.name}`) ;  
    /*This keyword is used to refrence the current object for example there can be multiple,
    objects having name key so here this says "ki is current object(jsuser) ke andr jo name key hai use refrence kr re ";
    this pe hm current object me jo propepty hai usko pta krne ke liye aur access krne ke liye use krtai hai  */ 
 
}
console.log(jsuser.greetingtwo()) ;

// Note ==> we can use both .notation and [] notation both 



