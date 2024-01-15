// //ES6

// class User {
//     //jaise hi new kiyword se call kiya vaise hi constructer called
//     constructor(username , email , password)
//     {
//         this.username = username
//         this.email  = email
//         this.password = password
    
//     }




//     encryptPassword (){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new User ("chai" , "chai@gmail.com" , 123)
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername()) 


//YE TOH CLASS USE KI HIA HMNE LET US SEE Behind THE SCENE HO KYA RHA HAI 

function User (username , email,password){
    this.username = username
    this.email  = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}
const tea = new User ("tea" , "tea@gmail.com" , 123)
console.log(tea.encryptPassword())
console.log(tea.changeUsername()) 
//dekh skte ho saara kaam hmara vhi basically hota hai prototype se hi 