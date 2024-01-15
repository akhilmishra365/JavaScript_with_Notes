**DOES JAVASCRIPT HAS CLASSES ==> ?**

Traditionally, JavaScript is considered a prototype-based language, not a class-based one. This means that objects inherit properties and behavior from other objects rather than from classes. However, since ECMAScript 2015 (ES6), JavaScript introduced a class syntax that makes it easier to write code that resembles class-based languages like Java or Python.

Here's a breakdown:

Technically:

JavaScript doesn't have true classes in the same way as Java or Python.
Classes in JavaScript are syntactic sugar on top of the existing prototype-based inheritance model.
This means that under the hood, JavaScript classes still use prototypes for inheritance.
Practically:

The class syntax provides a familiar and convenient way to write object-oriented code in JavaScript.
It makes code easier to read, understand, and maintain.
You can use all the familiar OOP concepts like constructors, methods, getters, setters, inheritance, and polymorphism.
In summary:

JavaScript has classes, but they are not the same as classes in other languages like Java or Python.
They are a convenient way to write object-oriented code in JavaScript, but they are still based on the underlying prototype-based inheritance model.
Here's an analogy to help understand the difference:

Imagine classes as cookie cutters. In a class-based language, the cookie cutter defines the exact shape of the cookie. In JavaScript, the cookie cutter is more like a guideline. You can still create cookies that look like the guideline, but there's more flexibility in how you do it."


**PROTOTYPE IN JAVASCRIPT**

Imagine objects in JavaScript like houses on a street. Each house has a basic layout (blueprint) with things like walls, doors, and windows. This blueprint is the prototype.

Now, each house on the street (an object) can be different. One house might have a red door, another might have a big front yard. These specific features are like the things added to the blueprint for each house.

Here's the cool part: if a house needs something not in its own blueprint, it can borrow it from the street's overall blueprint (the prototype). So, if a house doesn't have a fence, it can still use the fence instructions from the prototype even though it wasn't built into the house itself.

This borrowing is how objects inherit properties and methods from their prototypes. It saves space and effort because you don't need to repeat the same things for every house (object).

Here are some key points to remember in layman's terms:

Each object has a hidden blueprint (prototype) with basic features.
Objects can use features from their own blueprint or borrow them from the street's blueprint (prototype).
This borrowing saves space and makes code cleaner.




Prototype in JavaScript is a fundamental concept that lies at the core of its object-oriented features. It's a bit different from traditional class-based inheritance, so understanding it properly can unlock powerful ways to structure and share functionality between objects.

Here's a breakdown of Prototypes in JS:

1. Every object has a prototype:

Every object in JavaScript, whether created with constructors, literals, or other methods, has a hidden property called __proto__ (aka "prototype"). This property points to another object that acts as a template for the current object.

2. Prototype chain inheritance:

The prototype object itself can have its own prototype, and so on, forming a chain of inheritance. This chain continues until it reaches an object with a null prototype at the top.

## OOPS ==> IT IS A PROGRAMIBG PARADIGM(STYLE)
## OBJECT ==> 
- COLLECTION OF PROPERTIES AND METHODS

# WHY USE OOP ?

## PARTS OF OOP
OBJECT LITERAL  ==> SIMPLY MEANS ANGREJI WWALA LITERALLY KI HAAN SIRF OBJECT HI HAI 

-Constructer fucnntion 
-prototypes 
-classes
-Instances (new ,this)

## 4 pillars 
## Abstraction ==> details hta lena best example fetch abhi jo pdha tha internal working tel lene jaaye buthme kaam ho gya 
'''
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

let john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John

-The Person constructor function acts as an abstraction for real-world people.
-It hides the complexities of storing and managing name and age properties.
-It provides a simple interface (greet method) to interact with person objects. 
'''
## Encapsulation ==>wrapping of data into a single unit i.e data wrapup 
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
console.log(count); // Error: count is not accessible outside the closure
Use code with caution. Learn more
The count variable is encapsulated within the closure, making it inaccessible from outside.
The increment and decrement methods provide a controlled way to modify the count.


## polymorphism ==> have many forms vhi mummy vala apna ghisa pita example dedo ;

function swim(bird) {
  bird.swim(); // Assuming bird has a swim method
}

const duck = {
  swim() {
    console.log("Quack, quack! I'm swimming!");
  }
};

const goose = {
  swim() {
    console.log("Honk, honk! I'm swimming too!");
  }
};

const rubberDuck = {
  squeak() {
    console.log("Squeak, squeak! I float!");
  } // Doesn't have a swim method
};

swim(duck);   // Quack, quack! I'm swimming!
swim(goose);  // Honk, honk! I'm swimming too!
swim(rubberDuck); // Error: rubberDuck doesn't have a swim method
The swim function doesn't care about object types, only that they have a swim method.

# Inheritence  baad me prototype ke saath 