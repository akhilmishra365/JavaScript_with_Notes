

const tinderUser  = {
    name: "akhil",
    country :"india" ,
    isLoggedin : false 

}

// for example hme kisi object ki property ko access krna hai toh hm baar baar 
console.log(tinderUser.name ) //ye dot notation use kre kre tooh usko hi htane ke liye ye use hota hai 


// syntax == > 

const {isLoggedin} = tinderUser ; 
// abe hme isLoggedin ko access krne ke liyekoi .notation use ni krna we can do it directly 
console.log(isLoggedin) ; 
// ab maan lo hme lg ra ki  bhut bda  keyname hai toh hm use ek khud ka name bhi de skte hai 

const {country : cunt} = tinderUser ; 
console.log(cunt);
// ye bhut useful hota hai specially in props in react 

//it is used in json; 