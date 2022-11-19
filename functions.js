//задание 1
function removeUser () {};
    removeUser();

function removeUser () {}
    createPost()

function removeUser () {}
    addItem()


function removeUser () {}
    readFile()


function removeUser () {}
    getElementser()

function removeUser () {}
    createParentElement()


function removeUser () {}
    startGame()


function removeUser () {}
    sendMessage();




//задание 2
function myAge (age) {}

function clothes (firm) {}

function game (hero) {}

function telephone (firm) {}

function game (title) {}

function theDate (year) {}

function skill (skill) {}

function weather (weather) {}

function programmingLanguage (title) {}

function time (time) {}




//задание 3
function name (a) {
    return a
}


function age (b) {
    return b
}


function game (c) {
    return c
}
 

function language (e) {
    return d
}


function weather (d) {
    return e
}


function time (f) {
    return f
}


function date (g) {
    return g
}


function number (h) {
    return h
}


function surname (i) {
    return i
}


function hero (j) {
    return j
}




//задание 4
function name (a) {
    return a * 2
}
console.log(name(1));


function surname (b) {
    return b * 2
}
console.log(surname(1));


function date (c) {
    return c * 2
}
console.log(date(1));


function time (d) {
    return d * 2
}
console.log(time(1));


function number (e) {
    return e * 2
}
console.log(number(1));


//задание 5
let name = [1, 2, 3];

function number (arr) {
    return arr[0]
}
console.log(number(name));



//задание 6
let name = [1, 2, 3];

function number (arr) {
    return arr[2]
}
console.log(number(name));



//задание 7
function printMyFullName(firstname, secondname) { 
    const fullname = firstname + secondname; 
     
    return fullname; 
  } 
   
  console.log(printMyFullName('spider', 'man')); 
   
   
  function getSumOfFirstAndLastElement(arr) { 
    if(arr.length < 2) { 
      return 'минимум два элемента нужно жи есть'; 
    } else { 
      const lastIndex = arr.length - 1; 
       
      return arr[0] + arr[lastIndex]; 
    } 
  } 
   
  console.log(getSumOfFirstAndLastElement([])); 
   
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));

//задание 8
let text = "css"; 
 
function testVariableScope() { 
  let text = "html"; 
   
  return text; 
} //потому что переменная let её можно менять и будет выводиться последнее значение
