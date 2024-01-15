//mdn docs promises ==>
//A Promise is an OBJECT representing the eventual completion or failure of an asynchronous operation
//mtlb kaam hua toh hme pta chl chAyega ni hua toh aaj ni kl hoga but knhi na kbhi toh hoga bhle immediatena ho 


//promises has three state , pending ,fullfilled,rejected
//js me jb kisi object ka instance bnana hota hai toh hm new key eord ka use krte hai , jaise other language me  classes ks inatsnce bnate hai usi trah javascript me objects ka ninstance classes thoda km use hoti hai isme
//new keyword se instance milta hai 
const Promise1 = new Promise((resolve,reject)=>{
    //WE CAN DO ALL ASYNC CALLS EX==>
    //DB CALLS,CRYPTOGRHAPY,NETWORK
    setTimeout(function(){
        console.log('async Task is completed ') ; 
        resolve() //yre jo resolve hai jb isko lga do toh ye pehle vo set time ourt wala kaam krega khega acha ab mai resolve ho gya hai uske baad ye promise consumed wala part kaam krega
    //ye jo reolve hai na ye actually neeche wale .then ko connect krta hai 
    },1000) 
})
//ye above hmara ek promise create hai  it inputtakes callback as an input;
//ab dekho ye upr hmne bnaya ek promise but iske andr resolve eur reject rehta hai toh bhai promise bhi bn gya toh is resolve aur reject ne kiya kya ?

//dekho bro abhi upr promise bna toh liya but ab is promise ko CONSUME BHI KRNA HAI NA?


Promise1.then(function(){
    console.log("promise consumed")
})
//ye jo.then hai ye ek callback function hai ,then me vo kkya hai ki jo bhi kaam upr hua promise create me usko return krta hai
//yejo .then hai iska seedha relation hai hmara resolkve ke sath kaise hai kya hai aage jaake pdheneg

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log("promise2 consumed")
})
///ye jo upr kaam kiya hai vo hai longcut method shortcut method




//another example ==>
//dekho hr baar toh console.log hoga ni so ab maan lo ki hmarae pass network se koi data aya abn us data ko pass krnahai 

const promise3 = new Promise(function(resolve ,reject){
    setTimeout(function(){
//ab suppose is function ne bhot sara kaam kra khi gya kisi network se khub sara data laya lekin actually mujhe krna kya hai ki evenmtually jb mai ye promise ko consume krunga toh uske upr mai .then lgane wala hai  usi me hm sara kaam krwayenge kyunkui usi me saari values return hongi na
    
        //toh ab upr vale promise se value kaise passa krun neeche wale then me uske liye bhi hmara resolve kaam ayega
        // resolve ke andr hm objects ,array  , function  etc bhi pass kr sktre hain 
        resolve({username : "chai" ,email:"chai@example.com"})
        // ab resolve me toh hmne data daal diya but ab ye data .then me kaise pass hoga vo dekhte hai neeche .them me 

    },1000)

})

promise3.then(function(user){
    console.log(user); //output ==> resolve ke andr jo bhi parameter hai vo hmare pass aa jayenge==>{username : "chai" ,email:"chai@example.com"}
})

const promise4 = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error =  true ; 
        //ab hm error based checking pe krke bolenge ki hmare request resolve hogi ya reject 
        if(!error)
        {
            resolve({username : "hitesh" , password : "123"})
        }
        else{
            reject('ERROR : SOMETHING WENT WRONG ')
        }

    })

})
//promise4.then().catch() //.then ==> agr error resolve ho gya tb ye ayega vrna .catch() function kaam krega ye kr skte hai 
//but ek step aage chlte hain cheezon ko leke ==> 
promise4.then((user)=>{
    //ab hm pdh re kaise callback hell ko avoid kiya jata hai aur kaise sirf ek then ek catch nhi hote multiple hote hain hm jitne chahe lgate hain
    //ab maanlo hmko sir username chahiye pura object aya tha 
    return  user.username // ab ye username kha return hoga ?   iske liye hm .then ki chaining kr skte hain that iss iske khtmhite ek aur lga skte hain
 //belowis.then chaining
}).then((myusername)=>{
    console.log(myusername)

}).catch(function(error)
{
    console.log(error)
//ab dekho bhut jagah aise scenarios ayenge jb hm use krenge finally ka dekho promise resolve hua to badhiya eeject hogya toh btao lekin jo bhi hua hai btao toh bro ye hi ginaally it is like default yre hr baar execute hoga
}).finally(()=>console.log("The Promise is either resolved or rejected"));


const Promise5 = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false;
        if(!error ){
            resolve({username :"akhil" , password : "1l23"})
        }    
        else{
            reject('error : JS WENT WRONG')
        }
        
    }, 1000);
    
})
//dekho hm promises ko .then ke alawa async await use krta hai 
// dekhiye async krtakya hai ki agr man lo apke kaam hone ka thodi der wait krta hai,
// aur nhi hua toh vhi error deta  aur jb tk kaam ni hota tb tk vo aage ni bdhta hai isme hm issue ke naam pe thoda error gracefuulyy ni handle krte but na iski ki bhi importance hai bhut kyunki ,
//maanlo hm data base se kaam kr re ab jb tk database connect ni hua hm aage ni bdhenge wala scene hota hai toh hm use kr skte hain async await 

// async function ConsumePromiseFIVE (){
//     const response = await Promise5
//     console.log(response) ; 
// }

// ConsumePromiseFIVE()
//ab ye jo upr wala code hai vo error ko gracefully handle ni kr skta iske liye mujhe trycatch block ka use krna hoga
async function ConsumePromiseFIVE (){

    try {
        const response = await Promise5
        console.log(response) ; 
    } catch (error) {
        console.log(error)
        
    }
}
ConsumePromiseFIVE()
//ab ki baar upr hamra gracefully error handle hua hai 
// NOTE ==> DEKHO YE ASYNC AWAIT BHI USE KR SKTE HAIN APUN AUR APUN LOG .THEN .CATCH VHI USE KR SKTE HAI JO ACHA LGE 


//now handle api request using async 
async function getALLUsers(){
   try {
   const response =  await fetch('https://api.github.com/users/akhilmishra365') ;
   const data = await  response.json() ; // dekho response jo hai vo json me convert hone me time lega is liye hme ise bhi response.json me await use krna pdega 
   console.log(data) ; 
    
   } catch (error) {
    console.log('error') ; 
   }

}
getALLUsers()

///now agr isi function ko hm .then .catch  mekaise kren 
fetch('https://api.github.com/users/akhilmishra365')
.then((response)=>{
    return response.json()
})//ab jo response ayega usko handle kon krega ek aur then 
.then((data)=>{
    console.log(data)
})//error handle
.catch((error) => console.log(error))
//ab now next lesson me heiarchy pdhnege ki konsa response tej hai konsa pehle ayega eyc etc
//dekho fetch sbse pehle exxecute hoga above examples me rather than settimout bcz jb diagram dekhoge toh pta chlega ki fetch ke liye alg se high priority queue bnegi jo sbse fast hoti hai 

///ab hme promise smjh aagya sexy tareeke se FETCH pdhenge INTERNAL DETAILS  ;
 /*The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response,
is an HTTP error status.*/

// hme fetch me url ke saath saath bhot sari chize bhej skte hainn url ke aage comma lga ke mdn pe jaao bhosdike kb tk sirf code file read kroge
//(isi ko microtask queue high priprity queue etc bolte hain )





