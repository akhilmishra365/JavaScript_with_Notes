const mycoding = [{
    languageName : "Javascript",
    Fileextension : "js"
},

{
    languageName : "java",
    Fileextension : ".java"
},

{
    languageName : "Python",
    Fileextension : ".py"
}, 

{
    languageName : "swift",
    Fileextension : ".swift"
}


]


//we are provided with all the array of objects like in data base here wae iterate over this,


mycoding.forEach((item) => {
    console.log(`Language name is  ${item.languageName} and its file extension is ${item.Fileextension}` ) 
})


//returning array values using for each and filter map reduce;


const mynumbers =[1,2,3,4,5,6,7,8,9,10]
const num = [] ;
mynumbers.forEach( (item) => {
    if(item > 4)
    {
        num.push(item) ;
    }
}  );

console.log(num) ; 
//forEch method doesnt have a return type bcz it doesnt returns any value



///we can do above operation using filter method 
// filter method this method takes an call back function and return an array  based on specic condition ; []
//SYNTAX =>


/* const ans = arrayname.filter (a call back function) */
 
const answer = mynumbers.filter(     (num) => (num>4) )
console.log(answer)

//in above we are not using a curley braces thats why we need not to use a return statement;

const answer3 = mynumbers.filter( (num) => {
    return num<4 ; 
})
console.log(answer3)
// see in above example we used curly braces or scope so we need to do explicit return ; 


///MAP // JAVASCRIPT //


const newnum = [ 1 ,2,3,4,5,6,7,8,9,10];
let answer2 = newnum.map((nums) => (nums+10));
console.log(answer2);


let answer4 = newnum.filter((item) => (item+16))
console.log(answer4)

//above it return original array and without performing any operations upon it ;

//difference between map and filter =>
// filter hmara array ki ek subset return krta hai and we cant perform operation on array elements using filter filter me true values(mtlb values true on a specific consition h i return hong)  ;
// Map hamara new array return krta hai and we can perform operation on map function ;


///method chaining in javadcript

//method chaining me hm do teen method ko ek saath apply krte hain ;
// aur chain bnti hai methods ki ;


const numberaray = [1,2,3,4,5,6,7,8,9,10];
const sol = numberaray
            .map((item)=>item*10)
            .map((item) => item+1)
            .filter((item) => item>50)
console.log(sol);

// the above is called method chaining in javascript
//first map ka response second map me aya second map ka response hmara aya filter function me aur bs vha se sol me chla gya



///REDUCE FUNCTION  ;

//it is also a great function in java script ;


//syntax ==>

// const answer = arrayname.reduce(   (accumulator , currentvalue)  => (accumulator+currentvalue) , initialvalue)

/*hota kya hai isme sbse pehle initial value jo bhi hai vo hmari accumulator me jati hai 
current value hmara array ki current value ko hold krta hai ; 
ye kuch aisa hai ki =>
int accumulator = 0 ;
accumulater = accumulator+current value type;
sbse pehle intial value accumulator me jayegi fir accumulator me accumulator + current value store hoti jayegi bssss; */
let intial_value =  3 ; 
const final_answer =  numberaray.reduce( (accumulator , current_value) => (accumulator+current_value), intial_value)
console.log(final_answer); 

// reduce bhi ek call backfunction deta hai ; 

