// Function is a block of code that performs a specific task, can be invoked(call) whenever needed
function myFunction() {
  console.log("welcome to coders");
  console.log("we are here to master JS");
}

myFunction();

function yourFunction(write) {
  // paramaters
  console.log(write);
}
yourFunction("i like code JS"); //arguments

// function calculate 2 numbers
function Sum(n1, n2) {
  console.log(n1 + n2);
}

Sum(1, 2);

// return method in function
function Add(x, y) {
  // a= X +y; this is another way
  console.log("before return");
  return x + y;
}
let val = Add(3, 4);
// let val1 = Add(6, 4);
console.log(val);

//ARROW FUNCTION METHIOD - (=>)
// syntax - keyword(let) variable(any name)  = (paramater1, par2) =>{}

// function Multi(a, b) {
//   return a * b;
// }
let arrowmul = (a, b) => {
  return a * b;
};

console.log(arrowmul(4, 5));

// Lets practicd
//create a function using 'function' keywords that takes a string as an argument and returns the number of vowels in the string .

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

//propmt
// let fullName = prompt(" enter you name to check how many vowels in your name");
// let vowelsCount = countVowels(fullName);
// console.log("your name has: ", vowelsCount, " vowels.");

console.log(countVowels("raeimesh"));

// in arrowa function
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVow("aaaaa"));
