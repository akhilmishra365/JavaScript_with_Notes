///////////////////////////////////////COMAPRING TWO DATES IN JAVA SCRIPT  ///////////////////////// ;
//JAVASCRIPT GIVES DATE IN MILISECONDS FROM JAN 01 TO 1970 SO WE COMPARE IT IN MKILISECONDSS

let my_time_stamp =  Date.now() ;
console.log(my_time_stamp);  //=> output => milisecond value from jan01 1970; 


//convert a date in to milisicond so that we can compare it ;
const my_create_date = new Date("2023-09-10") ; 

console.log(my_create_date.getTime()) ; 
 
// now we can compare this easily 
console.log(my_create_date>my_time_stamp) ; 

//interview_imp  question  :  convert it into seconds simply divide by 1000

console.log(Math.round(my_create_date/1000)) ; 
//miliseconds to date


console.log(my_create_date.toDateString()) ; 
