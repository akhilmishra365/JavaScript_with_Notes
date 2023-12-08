//dates are the pain point in javascript ;

//here we will learn how to store dates how we can create dates how we can issue new dates.


// Create a new date object
const date = new Date();

// Get the current date and time
console.log(date);

// Get the year (YYYY)
console.log(date.getFullYear());

// Get the month (0-11)
console.log(date.getMonth());

// Get the day of the month (1-31)
console.log(date.getDate());

// Get the day of the week (0-6)
console.log(date.getDay());

// Get the hours (0-23)
console.log(date.getHours());

// Get the minutes (0-59)
console.log(date.getMinutes());

// Get the seconds (0-59)
console.log(date.getSeconds());

// Get the milliseconds (0-999)
console.log(date.getMilliseconds());

// Get the timestamp (milliseconds since January 1, 1970)
console.log(date.getTime());

// Format the date as a string
console.log(date.toDateString());

// Format the date as a string (UTC)
console.log(date.toUTCString());

// Format the date as a string (ISO)
console.log(date.toISOString());

// Format the date as a string (locale-specific)
console.log(date.toLocaleString());

// Format the date as a string (locale-specific, date only)
console.log(date.toLocaleDateString());

// Format the date as a string (locale-specific, time only)
console.log(date.toLocaleTimeString());


//CREATING A CUSTOM DATE;'

//dd mm  yy
// let create_date = new Date("09-01-2002");
// console.log(create_date.toDateString()); 


let create_date = new Date(2023,0,19,5,6,9);
console.log(create_date.toLocaleString()) ; 





