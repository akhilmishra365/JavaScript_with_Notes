//Immediately Invoked Function Expressions(IIFE)
//PREVENTS GLOBAL SCOPE POLLUTION
//INVOKES IMMEDIATELY 


//FOR EXAMPLE => 
//named iife function  
(function chai ()
{
    console.log(`Database Connected`) 
}) () ; //here semicolon compulsary vrna it doesnt know how to end 


// we can also use arrow function in iife
//also called name unnamed iife
((NAME)=>{
    console.log(`DATABASE CONNECTED TO ${NAME}`)
}) ("hitesh") ; //TREAT IT AS FUNCTION JAISE FUNCTION CALL KRTE HAI FUNCTION NAME KE AAGE FOR EXAMPLE chai(num) ; 

