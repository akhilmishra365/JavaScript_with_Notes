//In javaScript there arwe two types of memory available to Us.


//1) STACK ( STORES => PRIMITIVE) : WHEREEVER STACK MEMORY IS USED WE  COPY OF THOSE variables. NOT ORIGINAL .

// Stack memory example
let a = 10; // a is a primitive data type (number)
let b = a; // b is assigned the value of a, which is copied to a new location in memory
a = 20; // a is reassigned to a new value, but b still holds the original value of 10

console.log(a); // Output: 20
console.log(b); // Output: 10


//2) Heap (Stores => Non Primitive) : wherever heap is used we get Refernce of original value i.e change done is reflected in original value.



// Heap memory example
let obj1 = { name: 'John', age: 30 }; // obj1 is a non-primitive data type (object)
let obj2 = obj1; // obj2 is assigned a reference to the same object as obj1
obj1.age = 32; // the age property of obj1 is changed, which also changes obj2

console.log(obj1.age); // Output: 32
console.log(obj2.age); // Output: 32
