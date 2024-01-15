// Global scope
let globalVariable = "I am in global scope";

function globalFunction() {
  console.log(globalVariable); // Accessible within the function
}

console.log(globalVariable); // Accessible outside the function
globalFunction();


