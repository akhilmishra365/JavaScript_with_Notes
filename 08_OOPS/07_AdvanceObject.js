//we know object ka drect access hmare pass hai 
const Descripter = Object.getOwnPropertyDescriptor(Math,"PI")
//function used to get object property descriptionm  
console.log(Math.PI)
// kya hm pi ki default value kop change kr skte hain ? mtlb onject ki default proprty change kr skte hain ?
Math.PI = 5 ; 
console.log(Math.PI)
//aur nhi kr skte toh kyun ni kr skte ?
console.log(Descripter)
//above console.log k output me hme mileg ka ki is Pie property ka  writeable property off hai,
//dekho ye core java script me itni jyada hard coded hai ki hm vo writable ko true ni kr skte ultimately hm pie ko chaneg ni kr skte 

//kya hm apne aise object bna skte hai ki unki value change na ho ?
const chai = {
    name: "gingerchai",
    price : 250 ,
    isAvailable : true ,

    orderChai : function (){
        console.log("chai ni bni ")
        
    }
}
console.log(chai)
//LET US SE KYA HMARE KHUD KE BNAYE OBJECT ME DISCRIPTOR PROPERTIES HAIN ? 

//AUR AGR HAIN TOH KAISE HM USE CHANGE KR SKTR HAIN

console.log(Object.getOwnPropertyDescriptor(chai , "name"))
//iska output writable true , enumrable true sb kch true 


// ab isko change krne ke liye hm ye kr skte hain 

Object.defineProperty(chai , "name" , {
    writable:false,
    enumerable : false,
    configurable: false 

})
console.log(Object.getOwnPropertyDescriptor(chai,"name")) ; 

for (let [key , value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
        console.log(`${key} , ${value}`);
    } 
    
}
//dekho hmne enumrable false hai is liye output me name ni aayega
//bcz vo iterateble ni hai ab


//mudde ki baat hai haaan hm apne obejcts ki kch properties ko change kr skte hain aur unhe writable ya cons n=bna skte hain 
//basically hm ye achieve kr liye ki object ki kch prooperties iterbale hi na bne 




