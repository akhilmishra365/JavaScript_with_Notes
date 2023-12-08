const username = "bahr ka name1 "
const user = {
    username : "akhil",
    price : 999,

    welcomemsg : function(){
        console.log(`${username}, welcome to website`);
        
    }
}
user.welcomemsg(); // abhi output ayega "bahr ka name , welcome to website bcz this use ni hua hai aur current me username ka global wala hi context chl ra hai "
// jb hme current context me baat chahiye mtlb abhi username kya hai like abhi in curly braces me kya hai tb this ka use krenge


const username2 = "bahr ka name2"
const user2 = {
    username2 : "akhil",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.username2}, welcome to website`);
        //this refering the current context means  ab jo is object ke andr context haiuske baat ho ri ;
         
    }
}
user2.welcomemsg();

////////////////////////////////////////////////////Another______EXAMPLE/////////////////////////////////////////////////////// 

const user3 = {
    username3 : "akhil",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.username3}, welcome to website`);
        //this refering the current context means  ab jo is object ke andr context haiuske baat ho ri ;
         
    }
}
user3.welcomemsg(); 
user3.username3 = "sam" ;  //context changed to sam context mtlb variable kis baare me baat ho rhe hai ;
user3.welcomemsg() ; 


///////////////////////example 3


const username4 = {
    username4: "akhil",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.username4username4}, welcome to website`);
        //this refering the current context means  ab jo is object ke andr context haiuske baat ho ri ;
         console.log(this ,"context inside object") ; 
    }
}
username4.welcomemsg(); 
console.log () ;
console.log(this) ; // bahr context  empty object hai ;


// Interview question  ==> jb hm isi ko console pe run krenge tb current context window hoga
//so , When running in browser what is the context of this at that time ==> answer => window bcz on browser global object hai hmara window object ; tbhi hm uske saare events capture kr paate hai;


//////////////////////////////////////////// Arrow function is a new way of writing Java script functions introduced IN ES6 of Java Script////////////////////////////

const arrow = function(){
    console.log(this) ; 
}
arrow() ; 

function chai ()
{
    let name = "akhil";
    console.log(this.name) ; 
}
chai ()  //output ==> undefined this means we can see that this is not applicable like this in a function it is only used in object


// can we use this in function 

function chai3 ()
{
    let name = "akhil";
    console.log(this) ; 
}
chai3 ()  //answer =>  {} 

// arrow function is a short way of writing function
// in arrow function syntax => function keyword is removed and arrow is used  

const chai2 = () => {
    name = "akhil" ,
    price = "nnnnn"
    console.log(price);
}
chai2()

//the above is our arrow function
// can we use this inside arrow function 
const chai4 = () => {
    name = "akhil" ,
    price = "nnnnn"
    console.log(this);
}

chai4()
//this prooves we cant use this inside arrrow function ;

//more charcha arrow function 



// we can  hold arrow as well as normal function inside a variable

const add = (number1  , number2) =>  {
    
    return number1+number2 ;
    
    
}


console.log(add(10 ,15)) ; 




// ARROW FUNCTION with IMPLICIT RETURN  (in this we need not to write return keyword)
const addtwo = (num1,num2) => num1+num2 ;
console.log(addtwo(6,7)) ; 
//short me agr curly braces use kroge toh return use krna pdega else no need

// if you want to    return an object in js you have to wrap it inside brackets
const obj = () => {usersas : "hitesh "} ; 
console.log(obj()) //output => undefined ; 

//we have to wrap it inside paranthesis to get correct output

const obj1= () => ({usersas : "hitesh "}) ; 
console.log(obj1()) //output => undefined ;

