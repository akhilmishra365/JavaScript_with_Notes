let myname = "hitesh"
// ab mujhe pta hai is hitesh ke andr mujhe kch by default properties milti hain for example : length , etc
console.log(myname.length) //6


let myname2 = "akhil   "
// ab mujhe pta hai is hitesh ke andr mujhe kch by default properties milti hain for example : length , etc
console.log(myname.length)//7 bcz spaces 

//ab hm chah re ki hmarepass ek truelength krke ek property bnai hai ho jo hme true length de  note => trim ni use kr skte 
//leekin usse pehle kch kaam ki baatein




let myHeros = ["thor" ,"spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "spling",
    getspiderpower : function(){
        console.log(`spidy power ${this,this.spiderman}`)
    }
}


//ab mai aisa kch kr skta hun kya ki ? heroPower.hitesh kr skun 
Object.prototype.hitesh  =  function(){
    console.log("hitesh is pressent in all objects")
}

//bc bhot cool kaam kiya hmne idhr hmne ek property hitesh naam ki bnayi ab pure code ke hr object me even array bro it is an object sbme hmne hitesh pahucha diya
//that is hmne top lvl hiearchy pkdi usme hitesh daal diya

myHeros.hitesh()
// dekhlo upr example se ki hitesh hr jagah pahuch gya even my heroes array me bhi 

// lekin agr sirf array ko diya toh vo sbko ni jayega bcz arary is at lower hiearchy diagram dekho screen shot wala ki sb log object se pass hote hai but only array doge toh sb pass toh hong pr unhemmilega ni


Array.prototype.heyHitesh = function ()
{
    console.log("histesh saying hiii")
}

// ______________________________________INHERITENCE___________________________________________

const user = {
    name : "chai",
    work : "nalla"
}
const TEACHER = { 
    makevideo : true
}
const TeachingSupport = 
{
    isAvailable : false
}
const TAsupport = {
    makeAssignment : 'JS assignment' , 
    fulltime : true,
    __proto__  :  TeachingSupport //yhi hmara prototypal inheritenmce hai bss aur kch ni  ki kaise hme kisi aur ki properties ko access kr skte hain
}
//aisa ni ki sirf andr hi de skte hain 
TEACHER.__proto__ = user  


//dekho je ye upr approach hai na ye thodi si purani ho gyi hia toh hme nyi approach use  krni hai 
//modern syntax

Object.setPrototypeOf(TeachingSupport , TEACHER) //so vhi kaam kiya hmne ki teaching support ki property teacher ke andr inject krdo kaam vhi ho ra behind the scene waala
//mtlb ab teacher can acces all the properties of teaching support 



//ab hm chah re ki hmarepass ek truelength krke ek property bnai hai ho jo hme true length de  note => trim ni use kr skte  directly

let anotherUser = "chaiAURcode    "
String.prototype.trueLength = function()
{
    console.log(this)
    console.log(this.name);
    console.log(`true length is ${this.trim().length}`)
}

console.log(anotherUser.trueLength()) //target achieved 

//call read from mdn 
