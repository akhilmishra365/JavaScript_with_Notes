//object literal 
const user = {
    username : 'akhil',
    login_count : '8',
    SignedIn : true,

    getUserDETails : function(){
        console.log("got user details from database");
        // console.log(username) //this will throww error username not defined bcz isko pta hi ni ki username kya hai bcz 
        // jb cal stack bna toh sb alg alg ho gya toh agr hme ise btana hai ki bahr se username uthane hai ya hmare apne useraname ko btana hai ya current username ko
        // then will use this keyword
        console.log(this.username)



        //now let us seeki what will this give 
        console.log(this) //it will give all the current context value of function


    }
}
console.log(user.username) //or another metod to access
console.log(user["username"])
console.log(user.getUserDETails());
//ab this jb global context me run krenge toh ku aayega upr toh functional context me use kiya tah naa
console.log(this) //output => in case of node it will give {} but in broweser it will givewindow object properties


// ab dekho hme user two bnanan hai toh hme ab pura ka pura code likhna pdega  dobara se is liye hr baar repeat krna pdega 
// iske liye hmare pass ek constructer function hain
// const promise1 = new Promise () ;
//toh ye new keyword na actually me ek constructer function hai ye allow krta hai hame ek hi function se multiple instance bnana,
//lekin kyi jagah hme nye ki hi jarurat hai example promise


function Userss(username , login_count, isLoggedind)
{
    this.username =  username,
    this.isLoggedind = isLoggedind,
   this.login_count = login_count
   
   return this 
}
const UserOne =  Userss('hitesh' , 12, true)
const userTwo = Userss("AKHIL" ,11, false) 


console.log(UserOne) ; //gives error output as akhil but hmne toh hitesh daala tha na ?
//toh is case me hua kya usertwo ne user one ko overide kr diya ab isi liye new keyword ksa use kr lenege ji 
//neeche hmne new ka use kiya

function Users2(username , login_count, isLoggedind)
{
    this.username =  username,
    this.isLoggedind = isLoggedind,
   this.login_count = login_count


   //WE CAN ALSO USE METHODS  
   this.greeting = function(){
    console.log(`welcome ${this.username}`)
   }
   
   return this  //ye likhe ya na likhen but implicitely included hai 
}
const UserOne1 = new Users2('hitesh' , 12, true)
const userTwo2 =  new Users2("AKHIL" ,11, false) 


// console.log(UserOne1) ; 
console.log(UserOne1.greeting())
// console.log(userTwo2 ) ; 
//notes ==> ejb bhi new keyword use hota hai toh empty object create hota hai jisko instance bolte hain 
// Step 2 => CONSTRUCTER FUNCTION CALL HOTA HAI NEW KEYWORD KE KARAN , YE KYA KRTA HAI HMARE SAARE ARGUMENTS JITTE HOTE HAI UNHE PACK KR DETA HAI
// STEP 3 ==> ME THIS KEYWORD KE ANDR SAARE ARGUMENTS INJECT HO JATE HAI 
// STEP 4 ==> ME HME MIL JAATE HAI  FUNCTION KE ANDR
function Person(name) {
    this.name = name;
}

const person = new Person('John');

console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true
console.log(person instanceof Array);  // Output: false



// yr upr wale examples mehi encapsulation ho ra user 1 ke andr sb kch Hai 
// yr upr hi abstraction ho ra user1one.greeting ko ni pta ki internbally vo kaam kaise kr ra etc  
//javascript has a prtotipal behaviour like jb tk milega ni uske liye ye upr aur upr search krta jaara hai jb tk null na miljaye 
