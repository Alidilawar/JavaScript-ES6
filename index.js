
//1. way to print in javascript
// console.log('Hello World');
// alert('me');
// document.write('Document write here');

//2. Js console API Application program interface
// console.log('Hello World', 4 + 4, 'Another log');
// console.warn('This is a warning');
// console.error('This is an error');

//3. Js Variables
//What are variables? - 'Container to store data values'
var num1 = 50;
var num2 = 50;
// console.log(num1 + num2);

//4. Datatypes in javascript
//Numbers
var num1 = 455;
var num2 = 55;

//string
var str1 = 'Hello';
var str2 = "world";

//Objects
var marks = {
    harry: 25,
    rehan: 75,
    fahad: 85
}
// console.log(marks);

//Boolean
var a = true;
var b = false;
// console.log(a, b); 

// var und = undefined
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level there are two types of data types in javaScript 
 1- Primitives data types: undefined, null, number, string, symbols 
 2- Reference data types: Arrays and objects
 */

var arr = [1, 2, "ahsan", 3, 4];
//  console.log(arr);
//  console.log(arr[2]);

//Operators in JavaScript
//Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

//Assignment Operators
var c = b;
// c += 2;
c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

//Comperison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);
// console.log(x != y);

//Logical Operators
//Logical and  eg: True=1 * false=0
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or eg: true=1 + false=0
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not means false ko true , true ko false
// console.log(!false);
// console.log(!true);

//Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
//DRY = Do not repeat Yourself
c1 = avg(4, 6);
c2 = avg(43, 65);
console.log(c1, c2);

//Conditions in java script
var age = 41;
//Single if statement
// if (age > 18) {
//     console.log('You can drink rasna water');
// }

//if-else statement
// if (age > 18) {
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You can not drink rasna water');
// }

// age = 25;
//if-else ladder
// if (age > 32) {
//     console.log("You are not a kid");
// }
// else if(age > 26){
//     console.log('x');
// }
// else if(age > 22){
//     console.log('Y');
// }
// else if(age > 18){
//     console.log('z');
// }

//  else {
//     console.log('you a kid');
// }
// console.log("End of ladder");

//Loops in javaScript
var arr = [1, 2, 3, 4, 5, 6];
// array iterate using for loop

// console.log(arr);
// for (var i=0; i<arr.length; i++)
//  {
//      if (i == 2) {
//          break;
//         continue;
//      }
//     console.log(arr[i]);
// } 

//array iterate using foreach loop

// arr.forEach(function(element) {
//     console.log(element);
// });

// const ac = 0;
// ac++;
// acc = acc+1;

let j = 0;
// while (j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//      j++;
// }
//  while (j<arr.length);

//Array methods
let myArr = ['Fan', "camera", 34, null, true];
// console.log(myArr.length); 
// myArr.pop();
// myArr.push('harry');
// myArr.shift();
// myArr.slice();
// const newLen = myArr.unshift("harry");
// console.log(newLen);
// myArr.sort();
// myArr.toString();
// console.log(myArr);

//String in JS
let myLovelyString = "harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(1,4));
// d = myLovelyString.replace("harry", "Rohan")
// d = d.replace("good", "bad")
// console.log(d, myLovelyString);

//Dates in JS
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


/*
// Bubble sort Implementation using Javascript 

//Unsorted array
var arr = [215, 25, 4, 65, 100, 300, 500, 1];

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            //Check for condition
            if (arr[j] > arr[j + 1]) {
                //Now then Swapping if condition is true
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
bubbleSort(arr);
*/


//DOM in JS - Document Object Model
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> Removes an element

//Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function(){
//     console.log("The document was loaded");
// }

// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     // document.querySelectorAll('container')[1].innerHTML= "<b> We have clicked</b>"
//     console.log("clicked on container");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })


// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b> We have clicked </b>';
//     console.log("Mouse down when clicked on Container");
// })

//Arrow functions
// function sum(a, b) {
//     return a+b;
// }
sum = (a, b) => {
    return a + b;
}

// Set_time_out and set  _interval
logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//Local Storage in JS
// localStorage.setItem('name', 'harry')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//JSON in JS
// obj = {name: "harry", length: 1, a: {this: 'that'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

//Template literals - Backticks
a = 34;
// console.log('this is my ${a}');


//ES6 Classes and Inheritance | JavaScript
// class SimpleDate{
//     constructor(givenyear, givenmonth, givenday){
//         this.year = givenyear;
//         this.month = givenmonth;
//         this.day = givenday;
//     }

//     addMonth(nMonth){

//     }
//     getMonth(){
//         return this.month;
//     }
// }

// const sd = new SimpleDate(2021, 'November', 'Friday');

// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     greet(){
//         return `${this.name} says hello.`;
//     }
// }

// const car1 = new Car('Civic', 2021);

// //New Class From the parent
// class Bike extends Car{
//     constructor(name,year,speed){
//          //constructor with super
//          super(name,year);
//          //Adding new property
//          this.speed = speed;
//     }
// }
// const Bike1 = new Bike(' Trek',2019,180);
// console.log(Bike1);

// class Employee {
//     constructor(Name, Experience, Division) {
//         this.name = Name;
//         this.experience = Experience;
//         this.division = Division;
//     }

//     slogan() {
//         return `I am ${this.name} and this company is the best`;
//     }
//     joiningYear() {
//         return 2021 - this.experience;
//     }

//     static add(a, b) {
//         return a + b;
//     }
// }

// class Programmer extends Employee {
//     constructor(Name, Experience, Division, Language, github) {
//         super(Name, Experience, Division);
//         this.language = Language;
//         this.github = github;
//     }

//     favoriteLanguage() {
//         if (this.language == 'python') {
//             return 'python';
//         }
//         else {
//             return `${this.language}`;
//         }
//     }

//     static multiply(a, b) {
//         return a * b;
//     }
// }

// // const harry = new Employee('Harry', 31, 'Division');
// // console.log(harry.joiningYear());
// // console.log(Employee.add(34, 5));
// rohan = new Programmer('harry', 3, 'Lays', 'Ruby', 'Rohan3256');
// console.log(rohan);
// console.log(rohan.favoriteLanguage());
// console.log(Programmer.multiply(5, 5));

//Regular Expression iin JavaScript

console.log('This is Regex tut 1');
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g;  // g means global
// reg = /harry/i;  // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); //---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
// let result2 = reg.test(s);
// console.log(result2); //--> This will only print true if the "reg" is there in the 

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s); // This is Wrong
let result3 = s.match(reg); // This is Right
// console.log(result3);

// 4. search() - Returns index of first match else -1
//let result4 = reg.search(s) // Thhis is wrong
let result4 = s.search(reg); //This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'Ahsan');
// console.log(result5);

console.log('This is reges tut 2');
// let regex = /harrsdfgy/;
// // Lets look into some metacharacter symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/;  // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h\*rry/; 


// let str = "h*rry means codewith";

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if (regex.test(str)) {
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// } else {
//     console.log(`The string ${str} does not matches the expression ${regex.source}`);
// }

console.log('This is reges tut 3');
// Regular Expressions:
// Basic functions 
// Metacharacter Symbols

// const regex = /^h/i;
// Character Sets - We use []
// let regex = /h[a-z]rry/; // can be any character from a to z
// regex = /h[aty]rry/; // can be an a, t or y
// regex = /h[^aty]rry/; //cannot be any of a, t or y
// regex = /h[^aty]rr[yYu]/; //cannot be any of a, t or y + can be a u or y
// regex = /h[a-zA-A]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// // Quantifiers - We use {}
// regex = /har{2}y/; //r can occur exactly 2 times
// regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// // Groupings  - We use paranthesis for groupings ()
// regex = /(har){2}([0-9]r){3}/

// // const str = "hirry9 bhai";
// let str = "harry"
// str = "harhar1r4r5r bhai"

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if (regex.test(str)) {
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// } else {
//     console.log(`The string ${str} does not matches the expression ${regex.source}`);
// }

console.log('This is reges tut 4');
//Character classes

let regex = /\war/;     //word character - _ or alphabet or numbers
regex = /\w+d1r/;       // \w+ means one or more word characters
regex = /\Wbhai/;       // Non word character
regex = /\W+bhai/;      // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/;   // \d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/;  // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/;  // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/;  // word boundary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
let str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";

let result = regex.exec(str);
console.log("the result from exec is ", result);
if (regex.exec(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}