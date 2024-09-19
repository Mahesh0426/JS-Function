## 1. What is Function?

A function is a reusable block of code used to perform a set of related tasks, such as calculating and returning a value based on arguments provided to the function.
**_Syntax:_**

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

// Calling that function
name();
```

### Types of Function Declarations in JavaScript

In JavaScript, functions can be declared in two primary ways: normal functions and arrow functions. Each has its own syntax and use cases.

##### 1. Named Functions

Named functions are declared using the `function` keyword. They can be named or anonymous.

**_named_**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Mahesh")); // Output: Hello, Mahesh!
```

**_Anonymous Function (Function Expression):_**

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Mahesh")); // Output: Hello, Mahesh!
```

#### 2. Arrow Functions

An arrow function is a shorter and more concise way to write functions in JavaScript. It was introduced in ES6 (ECMAScript 2015)

**_Basic Arrow Function:_**

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Mahesh")); // Output: Hello, Mahesh!
```

### 3. What are Paramater and Arguments?

`Parameters` and `arguments` are fundamental concepts in programming, especially when dealing with functions.

Parameters are like placeholders defined in a function's declaration. They specify what kind of data the function expects when it is called. For example, in the function definition:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

Here, name is a parameter. It doesn't hold any value until the function is called.

Arguments, on the other hand, are the actual values you pass to a function when you invoke it. Using the previous example, if we call the function like this:

```javascript
greet("Mahesh");
```

In this case, "Mahesh" is the argument being passed to the greet function. It fills in the placeholder defined by the parameter.

### 3. what is Call Back Functions?

A callback function is a function that is passed as an argument to another function and is executed after the first function completes

### 4. Does a function always return a value?

Answer:
Yes. If there is a return statement, that value is returned. If there is no return statement, the function implicitly returns undefined.

Here is a function that explicitly returns a number.

```javascript
function f() {
  return 7;
}
const result = f();
console.log(result); // 7
//Here is a function that does not have return statement.

function f() {
  var a = 7;
}
const result = f();
console.log(result); // undefined
```
