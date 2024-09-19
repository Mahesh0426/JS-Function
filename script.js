let output = document.getElementById("output");
let output2 = document.getElementById("output2");

//FUNCTION
//  function functionNAme(paramater1,paramater2){
//     block of code
//     specific tasks
//  }

// function greeting() {
//   document.getElementById("output").innerHTML =
//     document.getElementById("output").innerHTML + "<h1>hello  </h1>";
// }

// greeting();
// greeting();

// function greeting(name = "mahesh") {
//   document.getElementById("output").innerHTML =
//     document.getElementById("output").innerHTML + `<h1>hello ${name}! </h1>`;
// }

// greeting();
// greeting();

// object in function
const person = {
  firstName: "Mahesh",
  lastName: "Kunwar",
  age: 22,
};
const { firstName, lastName, age, country = "Nepal" } = person;

function greet({ firstName, lastName, age, country = "Nepal" }) {
  console.log(
    `Hello, ${firstName} ${lastName}! your age is ${age} and you are from ${country}`
  );
}

greet(person);
