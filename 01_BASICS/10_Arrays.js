//Declaration of Array


// 1)using literal notation
let arr1 = [1 ,2 ,3,4,5]; 


// 2)using array constructer; 
const myarray = new Array ("John Doe" ,24 , true);

//ARRAY METHOD ==>

myarray.push(6); //places element at end;
console.log(myarray)
myarray.pop();
console.log(myarray) // removes element atend; 



//unshift 
myarray.unshift(9) ; //puts element at front and shifts other one aage
//unshift is considered as bad bcz agr 10000 elements hote to sbko ek aage place shift krna pdta hai ; 
console.log(myarray)
myarray.shift() //removes from front  nad shift 1 place left
console.log(myarray)

console.log(myarray.includes(17)) ; 
//true / false based on presxnt or not 
console.log(myarray.indexOf(89)) ; 
//gives -1 if not present


/*The join() method of Array instances creates and 
returns a new string by concatenating all of the elements in this array, 
separated by commas or a specified separator string*/

console.log(myarray.join(":"));

// splice and slice 

const Ar1 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,13 ) ; 

// SLICE ==> 
console.log(`original array before slice ${Ar1}`) ; 
console.log(Ar1.slice(1,3)); 
console.log(`original array after slice ${Ar1}`) ; 
//slice gives us a copy of the sliced original array no manupilation in original array and also last range is not included;
//--------//------------//------------//------------//-----------//----------------------//--------------------//---------------//------------
//SPLICE ==> 
console.log(`original array before splice ${Ar1}`) ; 
const arrS = Ar1.splice(1,3) ; 
console.log(arrS) ; 
console.log(`original array after splice ${Ar1}`) ; 
//SPLICE ==>  performs operation in original array and all manupuilation done is in orifinal array;



//JOINING TWO ARRAYS =====> 
// Push will not work as it will take as whole array as a single Element;
let arrsa = new Array (14,15,16) ;
// arr1.push(arrsa)  ; 
// console.log(arr1) ; 

// new_concanted_arry = arr1.concat(arrsa); 
// console.log(new_concanted_arry) ; 
//concat creates a new array; 
//draw back of concat that we can have only two arrays conacted so use spread;
// ||||||S|||||||||||||||||||||

//so instead we can use ==> concat or spread operation
spredded_array=  [...arr1, ...arrS , ...arrsa] ; 
console.log(spredded_array) ; 

// MAAN LO EK AJEEB SI ARRAY HAI USKO 1 D ME CONVERT KRN HAI TOH HM FLAT OPERATION KA USE KR SKTE HAI ;

const yui = new Array ([1,2,3 ,[4,5,6] ,[8,9,0,1]]) ; //kaanch ke glass me spread...
console.log(yui.flat(Infinity)) ; 
console.log(typeof(yui)) ; 

///////////////////////////////////////////////////
console.log(Array.isArray("HITESH")) ; 
console.log(Array.from("HITESH"));
console.log(Array.from({name : "akhil"})) ; //INTRESTING CASE for interview  as it gives empty array if it cant convert into array directly; 

//FROM ELEMWENTS TO ARRAY  we use 
let score1 = 100;
let score2 =  200;
let score3 = 300 ; 
console.log(Array.of(score1, score2 , score3)) ; 
