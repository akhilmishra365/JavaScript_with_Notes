
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
    break ; //it is not neccessary to have break in default case; 
}

console.log(dayName); // Output: Wednesday

/* NOTE ==>
INTERVIEW QUESTION IN JAVA SCRIPT ?
why it is necessary to have break in every case except default in javascript ?
Ans =>  bcz it is a old style language and if a case condition matches even then it checks for other cases so ,
break is used so as to avoid this 
*/


