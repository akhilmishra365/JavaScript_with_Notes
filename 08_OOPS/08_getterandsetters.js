// class USER{
//     constructor(email , password)
//     {
//         this.email =  email ; 
//         this.password = password;
//     }
// }
// const hitesh = new USER("h@hitesh.ai" , "123")
// console.log(hitesh.password);

//kyi baar hme fine grain control chahiye hota hai ki maanlo koi aise passowrd mange toh hm return kre ki "password ni btaunga etc vgera" ;
//bhut baar aise hota hai ki hmne class bnayi hai uski properties ka aceess sbko ni dena chahte aur dena hai toh aise ni aise kai se=cenarios hai 
//usi ke liye hmare pass getters and setters hain 


//suppose agr hm kisi ko password ka access dena hi ni chahte ?
//suppose hmse koi pass maang ra toh usko changed pass dena hai is liye get lga diya
// class userr{
//     constructor(email , password)
//     {
//         this.email =  email ; 
//         this.password = password;
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }
    
// }
// const hitesh2 = new userr("akhil@gmail" , "123")
// console.log(hitesh.password);
//agr ye console .log run krenge toh error ayega kyunki hm ab us password tk pahuch hi ni payenge kyunki hmne us pr getter define kr diya hai,
//toh iske solution me hme setter aur getter dono set krna padega kyunki boina setter ke usko hm set hi ni kr payneg 

// class userr{
//     constructor(email , password)
//     {
//         this.email =  email ; 
//         this.password = password;
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }
//     set password(value)
//     {
//         this.password = value ; 
//         lekin bc hmen uper bhi this.passkiya hai yha bhi kr re ye error dega 
//         maximum call stack error kyunki bc hm vakue set kr re thik hai but hmara constructer baar baar call hota jaa ra 
//         hm bhi set krre constructer bhi set kr ra toh bhai sb confusion khichdi bn gya
//         KYUINKI DONO RACE LGATE HAI KI MAI KRUNG AMAI KRUNGA
// is liye gtter setter me hm change kr dete hain _lga ke names i.e is unhe private kr dete hain (maante hai ki _lgaki private kiya gya hia but actualluy=y me ni hota vo toh hmne kr diya getter setter ka use kr ke )
//     }
    
// }
// const hitesh2 = new userr("akhil@gmail" , "123")
// console.log(hitesh.password);

//TOH SLUTION BHAI 
class userr2{
    constructor(email , password)
    {
        this.email =  email ; 
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()
        //lekin koi bahri user ko vallue chahiye toh use change kr de re uppercase me 
    }
    set password(value)
    {
        //TOH IS CASE ME HM EKDUM NYA HI VARIABLE LEKE KRDENGE]
        this._password  =  value
        //set toh database me actual value hi kiya hai 
    }
    
}
const hitesh3 = new userr2("akhil@gmail" , "abc")
console.log(hitesh3.password);

// note getter seteer bna re toh method ka name same hona chaiye property ke 

//TOH SLUTION BHAI 
class userr3{
    constructor(email , password)
    {
        this.email =  email ; 
        this.password = password;
    }
    get email()
    {
        //getter has always return 
        return this._email.toUpperCase()
    }
    set email (value){
        this._email =   value; 
    }

    get password(){
        return this._password.toUpperCase()
        //lekin koi bahri user ko vallue chahiye toh use change kr de re uppercase me 
    }
    set password(value)
    {
        //TOH IS CASE ME HM EKDUM NYA HI VARIABLE LEKE KRDENGE]
        this._password  =  value
        //set toh database me actual value hi kiya hai 
    }
    
}
const hitesh4 = new userr3("akhil@gmail" , "ABC")
console.log(hitesh4.email);
