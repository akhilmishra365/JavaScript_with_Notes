class USER{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`) ; 
    }


} 
class Teacher extends USER{
    constructor(username , email , password)
    {
        super(username)
        this.email = email ,
        this.password = password
    }
    addCourse(){
       console.log(`A new Course was added by ${this.username}`) 
    }

}
const chai = new Teacher("chai" , "chai@teacher.com" , "123")
chai.addCourse()
const tea = new USER("tea" , "tea@teacher.com" , "123")
// console.log(tea.addCourse()) //FALSE 
console.log(chai.addCourse()) //FALSE 
//if we want to check ki kya tea instance hai teacher ka ya user ka 
console.log(chai instanceof USER) //true
console.log(chai instanceof Teacher) //true
console.log(chai instanceof USER) 

 