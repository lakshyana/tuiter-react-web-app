
//Practice
document.write("<h2>How are you?</h2>")

// List
const grades = [90, 80, 70, 65]

//Backticks allow to use expressions or embedded variables inside
// $ symbol for variable called grades
document.write("<h2>Hardcoded list</h2>")
document.write(`<label>${grades.length}</label>`)
document.write("<ul>")
document.write(`<li>${grades[0]}</li>`)
document.write(`<li>${grades[1]}</li>`)
document.write(`<li>${grades[2]}</li>`)
document.write("</ul>")

//Using for loops to iterative and write list items
document.write("<h3>Using for loops to iterative and write list items</h3>")
document.write("<ul>")
let average = 0;
let total   = 0;

//For loop
for(let i=0; i<grades.length; i++) {
    document.write(`<li>${grades[i]}</li>`)
    total += grades[i];
}
document.write("</ul>")
average = total / grades.length;
document.write(`Average: ${average}`)


//Document get element by ID to change the content style attributes
const hi = document.getElementById("subtitle");
hi.style.color = 'red';

//Change the content text programmatically
// hi.innerHTML = "Welcome to Web Dev";
// hi.style.display = none;

//Table Row
const tableRow = (grade) => //    evaluates to
    ( `
        <tr>
            <td>Grade: </td><td>${grade}</td>
        </tr>
    `)

// // Equivalent way to write the same function but less clean
// function tableRow(grade) {
//     return ( `
//         <tr>
//             <td>Grade: </td><td>${grade}</td>
//         </tr>
//     `)
// }

//Compact way to have a function using map
//Under parenthesis is a parameter
tableRows = grades => grades.map((grade) => tableRow(grade)).join('')

//Equivalent function
//Using function to render table data
// function tableRows(grades) {
//     let rows = grades.map(grade => tableRow(grade)).join('')
//     // let rows = grades.map(function (grade) {
//     //     return tableRow(grade)
//     // }).join('')
//     //    return each grade as an array
//     //join the array to a single string
//     return rows;
// }

//Printing table
document.write("<h3>Displaying tables using functions</h3>")
document.write(`<table border="1">${tableRows(grades)}
                    </table>`)


// Global variable: Bad practice
console.log('Hello World!');
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
                  + functionScoped
                  - blockScoped;
//Print in groups
// console.log(global1 + "\n", functionScoped+ "\n", blockScoped+ "\n", constant1)

console.log(`${global1}\n${functionScoped}\n${blockScoped}\n${constant1}`)

//Variable types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(`${numberVariable}\n${floatingPointNumber}\n${stringVariable}\n${booleanVariable}`)
console.log(`${isNumber}\n${isString}\n${isBoolean}`)

//Boolean var
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1;
let notTrue   = '1' === 1;

console.log(`${true1}\n${false1}\n${false2}\n${true2}\n${true3}\n${true4}\n${true5}\n${false3}`)
console.log(`${sortaTrue}${notTrue}`)


//Conditions
console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

//Conditional operators
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting) // Welcome!


//Functions
// function <functionName> (<parameterList>) { <functionBody> }

console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);


console.log('New ES6 functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);


// Implied returns
const multiply = (a, b) => a * b;
console.log("implied return");
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);


// optional parenthesis and params
console.log("Parenthesis and parameters")
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

//Arrays
console.log("Arrays")
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);


// Array index and length
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log("Array index and length")
console.log(length1)
console.log(index1)


// Adding and Removing Data to/from Arrays
// adding new items
console.log("Add and remove data to arrays")
numberArray1.push(6);
stringArray1.push('string3');



// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// For loops
console.log("For loops")
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// Map functions
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log("Map Function")
console.log()

// // Find function
// const four = numberArray1.find(a => a === 4);
// const string3 = stringArray1.find(a => a === 'string3');
//
// //  Find index
// const fourIndex = numberArray1
//     .findIndex(a => a === 4);
// const string3Index = stringArray1
//     .findIndex(a => a === 'string3');
//
// //Filter
// const numbersGreaterThan2 = numberArray1
//     .filter(a => a > 2);
// const evenNumbers = numberArray1
//     .filter(a => a % 2 === 0);
// const oddNumbers = numberArray1
//     .filter(a => a % 2 !== 0);
//
// //Template
// const five = 2 + 3;
// const result1 = "2 + 3 = " + five;
// console.log(result1);
//
// const result2 = `2 + 3 = ${2 + 3}`;
// console.log(result2);
//
// const username = "alice";
// const greeting1 = `Welcome home ${username}`;
// console.log(greeting1);
//
// loggedIn = false;
// const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
// console.log(greeting2)
//
//
//
// //Hello world from jquery
// const init = () => {
//     console.log('Hello world from jQuery');
//     /* do the rest of the lab work here */
// }
// $(init);
//
//
//
// const grades = [2, 3, 4, 90,89,78,67,56,45, 34, 23]
// document.write('grades = ')
// document.write(grades)
// document.write('<br/>')
//
// const gradesSquare = grades.map(grade => grade * grade)
//
// document.write('gradesSquare = ')
// document.write(gradesSquare)
//
// const passingGrades = grades.filter(
//     function (grade, index) {
//         return grade > 65
//     }
// )
//
// document.write('<br/>')
// document.write('passingGrades = ')
// document.write(passingGrades)
// document.write('<br/>')
//
// const whereIs67 = grades
//     .findIndex(grade => grade === 67)
// document.write(`whereIs67 = ${whereIs67}<br/>`)
//
// const tasks = [
//     {task: 'Buy milk'},
//     {task: 'Pick up kids'},
//     {task: 'Walk dog'},
// ];
// document.write(`tasks: ${tasks}<br/>`)
// document.write(`<ul>${
//             tasks.map(todoObj =>
//                 `<li>${todoObj.task}</li>`)
//                 .join('')
//         }
//         <li>Buy milk</li>
//         <li>Pick up kids</li>
//         <li>Walk dog</li>
//     </ul>
// `)