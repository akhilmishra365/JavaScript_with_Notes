//singleton i.e objects  declaration using  constructer 
// lets say we are creating a tinder application ==> 
const tinderUser = new Object() ;
tinderUser.name = "akhil";
tinderUser.country = "india" ;
tinderUser.isLoggedin = false; 

// console.log(tinderUser) ; 

//now here pass object key value another obejct i.e object ke andr object as an object pass kr re object NESTING ==> 
const regularuset = {
    email : "akhilmishra1676@gmail.com" , 
    fullname : {
        username : {
            firstname : "akhil",
            lastname : "Mishra" , 
            ishero : false

        
    }
}
}
//how to access those nested proprties  using dot notation ; 
console.log(regularuset.fullname)
console.log(regularuset.fullname.username.firstname)
console.log(regularuset.fullname.username.lastname) ; 

//Sometimes we use sYNTAX LIKE ==> 
console.log(regularuset.fullname?.username.lastname) ; 
//THIS SIMPLY IS USED TO AVOID CONDITION KI MAANLO AGR FULLNAME PROPERTYN NA HUI TOH ? use krte hai just used for protection 

/*
How to merge two objects ==> 


1)we can use Object.assign()
2)we can use spread operator ; 
*/
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {
    5:"e",
    6:"f"
}
// 1)Object.assign()

const obj4 = Object.assign({} , obj1 , obj2 , obj3) // {} destination  uske aage sare source agr {} 
// nhi lgayaenge toh kaam klrega nbut saare ke sare first parameter me hi ghus jaynege 

console.log(obj4);

// 2)SPREAD OPERATOR

const object5 =  {...obj1 , ...obj2 ,...obj3 , ...obj4 } ; 
console.log(object5) ; 

//how to access method and work woth when working woth database as then we will get data as arrayofobjects

const users = [
    {
        email:"h@gmail.com"
    } , 
    {
        isLogged : false 
    },
    {
        name : "AAkhil"
    } 
]

//suppose we want to access email  
console.log(users[1].email);// user[1] ke baad dot natoation ku=yunkiu ab ye object hai is liye;

// Suppose we want to get all the keys of an object and then to iterate over it;

//HERE WE ARE TAKING OUR TINDER ARRAY ==>  

// these are vwery important bcz they can alloe=ws us to iteraet over our arrya objects and can get a grip
// over our keyvalue pair it is mostly used in fetching data from database our while working with JSON API's
//capital O Object is a keyword thats why capital O
console.log(Object.keys(tinderUser))  ; //returns an array of keys of tinderuser objects
console.log(Object.values(tinderUser)) ;  //returns an array of values of tinder user objects 


console.log("")
console.log(Object.entries(tinderUser)) ; //returns array of all entries check output for more clarity


//TO CHECK IF A PARTICULAR PROPERTY EXIST IN AN OBJECT


console.log(tinderUser.hasOwnProperty("isLoggedin")); //gives boolean output true if exist False if doesnt exist
console.log(tinderUser.hasOwnProperty("isLogged")); //gives boolean output true if exist False if doesnt exist