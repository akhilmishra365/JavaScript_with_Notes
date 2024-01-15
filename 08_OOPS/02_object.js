function multiply (num){
    return num*5
}
multiplyBy5.power = 2 ;

console.log(multiply(5))
console.log(multiply.power); //abe ye dot notation se kaise access hua ye toh function hai ? iska mtlb javascript me function bhi ek object hi hota hai 
console.log(multiply.prototype) //empty paranthesis output 

//ye jo empty parantesis hai kya ? dekho actually me jo hmare kch context set hote hai prototype ke  to yer jo empty {} aya hai  vo us method ka this hai

//object ka prototype null hai ;

function createUser(username,score){
    this.username  =  username , 
    this.score = score
}
//dekho maanlo hmare pass array hme by defaulrt kch functionality milti hai jaise index of ,slice ,splice etc vgerah toh ,
//kya hm apni bhi functionality inject kra skte hai apne function ke andr kyunki function is an object also


createUser.prototype.increment = function(){
    this.score++;
    //yha pe this ho gya ki jisne bhi call kiya hai uske score ko bdhao
}

const chai = createUser("chai" ,25)
const tea = createUser("tea" , 250 )
 //toh ab problem yha ye aagyi ki hmne score ko prototype me inject toh kr diya lekin jb naya refrence bna toh ye kaise pta chlega ki score mai kiska bdhaun toh ye internaaly confuse ho jayega
//  i.e crteate user ko kaise pta chlwga ki jb increment krun toh kisko bdhana hai chai ko ya tea ko ? kyunki uske pass contexat hi ni hhai  is liye this lga liya

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

chai.printme()
//ab hm print kr re but ab ek aur problem aayi hai ,
// error console .log pe aye ga cannot read properties of print
// dekho lekin properties hmne inject to ki lekin btaya ni hai usko ki hmare pass nyi properties aayin hai iske liye new keyword ka prayog
const chai1 = new createUser("chai" ,25)
const tea1 = new createUser("tea" , 250 )

// ab krenge toh run krega bro 











/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to
 properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object,
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned.

*/
