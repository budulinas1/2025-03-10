/*
let number = 5;
console.log(number);
console.log(++number)
console.log(++number)

let number1 = 4;
console.log(--number1);
console.log(--number1);
console.log(--number1);

let string = "5";
string = 5;

console.log(string);
console.log(typeof string);

let number2 = 10;
let number3 = 20-number2;
console.log(number3) 

////


let weight = prompt("What is your weight?");
let height = prompt("what is your height?");

let weight1 = prompt("What is second person's weight?");
let height1 = prompt("what is second person's height?");

BMI = (weight) / (height * height);
BMI1 = (weight1) / (height1 * height1);
console.log("Is your bmi smaller" + BMI <= BMI1);


let money = 15;
let price = 15;

if (money >= price) {
    console.log("You have enough money")
} else {
    console.log("You do not have enough money")
}

let statusas = "student"
let pinigai = 100
let lusna = true;

if (statusas === "student" && lusna === true && pinigai >= 100){
    console.log("turtingas studentas") 
 } else if  (statusas === "student" && lusna === true && pinigai < 100) {
    console.log("ne turtingas studentas")
} else if (statusas === "student" && lusna === false && pinigai >= 100) {
    console.log("turtingas benamis studentas")
} else if (statusas === "student" && lusna === false && pinigai < 100 ) {
    console.log("ne turtingas benamis studentas")
}

*/
/*
isRich = false;
isRich ? console.log("turtingas") : console.log("ubagas")
*/
/*
vidurkis = 6
lankomumas = true;

if (lankomumas = true && vidurkis >= 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau priklauso")
} else if (lankomumas = true && vidurkis < 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
}  else if (lankomumas = false && vidurkis >= 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
} else if (lankomumas = false && vidurkis < 8)
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
*/
/*
let X = prompt("X");
Y  = prompt("Y");
Z  = prompt("Z");

let largest = Math.max(Math.max(X, Y),Z)
console.log("the largest number of them all is:" , largest)

*/
//switch case

/*
let skaicius = 7
switch(skaicius){
    case 1: 
    console.log("pirmadienis")
    break;
    case 2:
    console.log("antradienis")
    break;
    case 3: 
    console.log("treciadienis")
    break;
    case 4:
    console.log("ketvirtadienis")
    break;
    case 5:
    console.log("penktadienis")
    break;
    case 6:
    console.log("sestadienis")
    break;
    case 7: 
    console.log("sekmadienis")
    break;
    default: console.log("neteisingai nurodytas skaicius")
}


let menesis = 1
switch(menesis){
case 1:
    console.log("January")
break;
case 2:
    console.log("February")





}

*/

/*
function myFunction() {
    console.log("hello world")
    return;
}

myFunction();
*/

/*
function myFunction(parameter1) {
    console.log("hello", parameter1)
    return;
}

let vardas = myFunction("nedas")

vardas = myFunction("aktorius")
*/

/*
let vardas = "nedas"
let amzius = 18


const square = function () {
   amzius++
   console.log(vardas, amzius)
   
   //return amzius;
  };

square()

square()
*/
/*
a = 8
b = 2
c = 3



function myfunction(a, b, c){
  console.log("skaiciai:", a, b ,c)
  let math = Math.min(a, b, c)
  console.log("maziausias:", math)



  return;


}
myfunction(a, b, c)


*/
/*
function average(a, b, c, d) {

let sum = a + b + c + d;
let average = sum / 4;
console.log("vidurkis:", average); return average


}

let result = average(10, 10, 9, 1)


function stipendija(average){
   
    if (average >= 5) {
   
        console.log("stipendija bus")
      }
    
    else {
    console.log("stipendijos ne bus")
    
    }
}

stipendija(result)
*/
/*
let name = "jonas";

function vardas() {
  console.log(name);
  return name;
}

let login = 1;
let getname = vardas()

vardas();

function greeting(name) {
  console.log("Greetings, " + name, "prisijungta kartu:", login);
  login++;
}

greeting(vardas());
greeting(getname);
*/
/*
function metinisAtlyginimas(vardas, menesioAtlyginimas) {
    return menesioAtlyginimas * 12;
}


const vardas = "Jonas";
const menesioAtlyginimas = 800;

const metinis = metinisAtlyginimas(vardas, menesioAtlyginimas);
console.log(`${vardas}, jūsų metinis atlyginimas yra: ${metinis} eurų.`);
*/
/*
function metai(year) {
    if (year % 2 === 0) {
        console.log(`${year} yra lyginiai metai.`);
    } else {
        console.log(`${year} nera lyginiai metai.`);
    }
}

metai(2024)

*/

/*
function kelionesKaina(nuvaziuotiKilometrai, degaluKaina, kuroVartojimas = 8) {

    const litraiReikalingi = (nuvaziuotiKilometrai / 100) * kuroVartojimas;
  
    const kaina = litraiReikalingi * degaluKaina;
    
    return kaina;
}


const nuvaziuotiKilometrai = 150; 
const degaluKaina = 1.5; 
const kaina = kelionesKaina(nuvaziuotiKilometrai, degaluKaina);
console.log(`Kelionės kaina: ${kaina.toFixed(2)} EUR`);


*/
//

/* 1.

function calculator (a, b) {
    
    a = Number(a);
    b = Number(b);
    output = console.log(a + b);
    alert(a + b);
    
    }

 let a = prompt();
let b = prompt();

calculator(a, b)


*/
/* 2.

function square(number) {
    return number ** 2;
  }
  
  console.log(square(2));
 
*/ //

/* 5.
function isEven(n) {
   let result = n % 2 === 0 ? console.log("even") : console.log("odd");
    return result;

}

isEven(5)
*/
/* 4.

let a = prompt("pirmas")

let b = prompt("antras")

let rezultatas = a.concat(" ", b);

console.log(rezultatas)

*/

/* 3.
let num = prompt("number");

if (num > 0) {
    console.log(`${num} positive`);
} else {
    console.log(`${num} negative`);
}
    */
/*

var x = 13
function 

*/

//concat

/*
const arr1 = ["hello"];
const arr2 = ["bye"];
const arrconcat = arr1.concat(arr2);
console.log(arrconcat)
*/

//every

/*
const n = [11, 20];

function age(n) {
    if (n > 18) {
        console.log("yes");
        } else {
        console.log("no");
        }
}

n.every(age);
*/

//fill

/*
const arr1 = ["uno", "dos"];
arr1.fill("tres", 1);
console.log(arr1)
*/

//filter

/* 1

function uno(dos, tres) {
   
    dos.unshift(tres);
    
    return dos;
  }
  

  let dos = [ 2, 3, 4, 5];
  let tres = 1;
  
  console.log(uno(dos, tres))

*/

/*
function sum(a) {
   
    a.unshift(a);
    
    return a;
  }
  

  let a = ["hello", "bye"];
  
  console.log(sum(a))

*/
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  const keys = Object.keys(person);

console.log(keys)

*/

/* 1
let a = {

automobilis: "taip",
marke: "toyota"

}

a.spalva = "raudona"

console.log(a)
*/

/*2
let automobilis = {
    marke: 'Toyota',
    modelis: 'Corolla',
    metai: 9080,
    spalva: 'raudona'
};


let modelis = automobilis.modelis;
delete automobilis.modelis;
console.log(automobilis);
*/
/*3
const uno = {
 hello: 'yes'
}
console.log(Object.hasOwn(uno, 'hello'));
*/
/*

let a = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4
}

let total = 0;

for (let value in a) {
  total += a[value];
}

console.log(total)

*/

/*
for(let skaicius=0; skaicius<=10; skaicius++){
    console.log(skaicius)
}


console.log("////////////////////////")


for(let skaicius=10; skaicius > 0; skaicius--){
    console.log(skaicius)
}
*/

/* print every second number
for(let skaicius = 0; skaicius <= 10; skaicius += 2) {
    console.log(skaicius);
}
*/

/*
let obj = {
    name: "Jonas",
    age: 19,
    occupying: "nothing",
    
};

for(let key in obj){
    console.log(key)
}

console.log(Object.values(obj))

const arr=["jonas","petras", "antanas"];
for(let val of arr){
    console.log(val)
}


for (let key in arr){
    console.log(key)
}
    */

/*
let skaicius=0
while(skaicius <= 12){
console.log(skaicius)
skaicius++
}

*/

/*
var skaicius = 0;

while(skaicius < 10){
    skaicius = skaicius + 1;
    console.log(skaicius);
}

*/
/*
var skaicius = 11;

while(skaicius > 0){
    skaicius = skaicius - 1;
    console.log(skaicius);
}
    */

/*
let skc = 10
while (skc >= 1) {
    console.log(skc)
    skc--
}
console.log("------------------------")
let skaicius = 1
while (skaicius <= 10) {
    if (skaicius % 2 !== 0) console.log(skaicius)
        skaicius++
}
*/
/*


let numb = 1
do {
    console.log(numb)
numb++
} while(numb < 2)

*/

/*
function calculateAverage() {
    let sum = 0;
    let count = 0;
    let number;

    do {
        number = parseFloat(prompt("Enter a number (negative to stop):"));
        if (number >= 0) {
            sum += number;
            count++;
        }
    } while (number >= 0);

    console.log(count > 0 ? "Average: " + (sum / count) : "No valid numbers entered.");
}

// Execute the function
calculateAverage();



function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random()
}console.log(--number1);
console.log(--number1);

let string = "5";
string = 5;

console.log(string);
console.log(typeof string);

let number2 = 10;
let number3 = 20-number2;
console.log(number3) 

////


let weight = prompt("What is your weight?");
let height = prompt("what is your height?");

let weight1 = prompt("What is second person's weight?");
let height1 = prompt("what is second person's height?");

BMI = (weight) / (height * height);
BMI1 = (weight1) / (height1 * height1);
console.log("Is your bmi smaller" + BMI <= BMI1);


let money = 15;
let price = 15;

if (money >= price) {
    console.log("You have enough money")
} else {
    console.log("You do not have enough money")
}

let statusas = "student"
let pinigai = 100
let lusna = true;

if (statusas === "student" && lusna === true && pinigai >= 100){
    console.log("turtingas studentas") 
 } else if  (statusas === "student" && lusna === true && pinigai < 100) {
    console.log("ne turtingas studentas")
} else if (statusas === "student" && lusna === false && pinigai >= 100) {
    console.log("turtingas benamis studentas")
} else if (statusas === "student" && lusna === false && pinigai < 100 ) {
    console.log("ne turtingas benamis studentas")
}

*/
/*
isRich = false;
isRich ? console.log("turtingas") : console.log("ubagas")
*/
/*
vidurkis = 6
lankomumas = true;

if (lankomumas = true && vidurkis >= 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau priklauso")
} else if (lankomumas = true && vidurkis < 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
}  else if (lankomumas = false && vidurkis >= 8){
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
} else if (lankomumas = false && vidurkis < 8)
    console.log("tavo vidurkis yra" , vidurkis , "ir lankomumas" , lankomumas , "stipendija tau nepriklauso")
*/
/*
let X = prompt("X");
Y  = prompt("Y");
Z  = prompt("Z");

let largest = Math.max(Math.max(X, Y),Z)
console.log("the largest number of them all is:" , largest)

*/
//switch case

/*
let skaicius = 7
switch(skaicius){
    case 1: 
    console.log("pirmadienis")
    break;
    case 2:
    console.log("antradienis")
    break;
    case 3: 
    console.log("treciadienis")
    break;
    case 4:
    console.log("ketvirtadienis")
    break;
    case 5:
    console.log("penktadienis")
    break;
    case 6:
    console.log("sestadienis")
    break;
    case 7: 
    console.log("sekmadienis")
    break;
    default: console.log("neteisingai nurodytas skaicius")
}


let menesis = 1
switch(menesis){
case 1:
    console.log("January")
break;
case 2:
    console.log("February")





}

*/

/*
function myFunction() {
    console.log("hello world")
    return;
}

myFunction();
*/

/*
function myFunction(parameter1) {
    console.log("hello", parameter1)
    return;
}

let vardas = myFunction("nedas")

vardas = myFunction("aktorius")
*/

/*
let vardas = "nedas"
let amzius = 18


const square = function () {
   amzius++
   console.log(vardas, amzius)
   
   //return amzius;
  };

square()

square()
*/
/*
a = 8
b = 2
c = 3



function myfunction(a, b, c){
  console.log("skaiciai:", a, b ,c)
  let math = Math.min(a, b, c)
  console.log("maziausias:", math)



  return;


}
myfunction(a, b, c)


*/
/*
function average(a, b, c, d) {

let sum = a + b + c + d;
let average = sum / 4;
console.log("vidurkis:", average); return average


}

let result = average(10, 10, 9, 1)


function stipendija(average){
   
    if (average >= 5) {
   
        console.log("stipendija bus")
      }
    
    else {
    console.log("stipendijos ne bus")
    
    }
}

stipendija(result)
*/
/*
let name = "jonas";

function vardas() {
  console.log(name);
  return name;
}

let login = 1;
let getname = vardas()

vardas();

function greeting(name) {
  console.log("Greetings, " + name, "prisijungta kartu:", login);
  login++;
}

greeting(vardas());
greeting(getname);
*/
/*
function metinisAtlyginimas(vardas, menesioAtlyginimas) {
    return menesioAtlyginimas * 12;
}


const vardas = "Jonas";
const menesioAtlyginimas = 800;

const metinis = metinisAtlyginimas(vardas, menesioAtlyginimas);
console.log(`${vardas}, jūsų metinis atlyginimas yra: ${metinis} eurų.`);
*/
/*
function metai(year) {
    if (year % 2 === 0) {
        console.log(`${year} yra lyginiai metai.`);
    } else {
        console.log(`${year} nera lyginiai metai.`);
    }
}

metai(2024)

*/

/*
function kelionesKaina(nuvaziuotiKilometrai, degaluKaina, kuroVartojimas = 8) {

    const litraiReikalingi = (nuvaziuotiKilometrai / 100) * kuroVartojimas;
  
    const kaina = litraiReikalingi * degaluKaina;
    
    return kaina;
}


const nuvaziuotiKilometrai = 150; 
const degaluKaina = 1.5; 
const kaina = kelionesKaina(nuvaziuotiKilometrai, degaluKaina);
console.log(`Kelionės kaina: ${kaina.toFixed(2)} EUR`);


*/
//

/* 1.

function calculator (a, b) {
    
    a = Number(a);
    b = Number(b);
    output = console.log(a + b);
    alert(a + b);
    
    }

 let a = prompt();
let b = prompt();

calculator(a, b)


*/
/* 2.

function square(number) {
    return number ** 2;
  }
  
  console.log(square(2));
 
*/ //

/* 5.
function isEven(n) {
   let result = n % 2 === 0 ? console.log("even") : console.log("odd");
    return result;

}

isEven(5)
*/
/* 4.

let a = prompt("pirmas")

let b = prompt("antras")

let rezultatas = a.concat(" ", b);

console.log(rezultatas)

*/

/* 3.
let num = prompt("number");

if (num > 0) {
    console.log(`${num} positive`);
} else {
    console.log(`${num} negative`);
}
    */
/*

var x = 13
function 

*/

//concat

/*
const arr1 = ["hello"];
const arr2 = ["bye"];
const arrconcat = arr1.concat(arr2);
console.log(arrconcat)
*/

//every

/*
const n = [11, 20];

function age(n) {
    if (n > 18) {
        console.log("yes");
        } else {
        console.log("no");
        }
}

n.every(age);
*/

//fill

/*
const arr1 = ["uno", "dos"];
arr1.fill("tres", 1);
console.log(arr1)
*/

//filter

/* 1

function uno(dos, tres) {
   
    dos.unshift(tres);
    
    return dos;
  }
  

  let dos = [ 2, 3, 4, 5];
  let tres = 1;
  
  console.log(uno(dos, tres))

*/

/*
function sum(a) {
   
    a.unshift(a);
    
    return a;
  }
  

  let a = ["hello", "bye"];
  
  console.log(sum(a))

*/
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  const keys = Object.keys(person);

console.log(keys)

*/

/* 1
let a = {

automobilis: "taip",
marke: "toyota"

}

a.spalva = "raudona"

console.log(a)
*/

/*2
let automobilis = {
    marke: 'Toyota',
    modelis: 'Corolla',
    metai: 9080,
    spalva: 'raudona'
};


let modelis = automobilis.modelis;
delete automobilis.modelis;
console.log(automobilis);
*/
/*3
const uno = {
 hello: 'yes'
}
console.log(Object.hasOwn(uno, 'hello'));
*/
/*

let a = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4
}

let total = 0;

for (let value in a) {
  total += a[value];
}

console.log(total)

*/

/*
for(let skaicius=0; skaicius<=10; skaicius++){
    console.log(skaicius)
}


console.log("////////////////////////")


for(let skaicius=10; skaicius > 0; skaicius--){
    console.log(skaicius)
}
*/

/* print every second number
for(let skaicius = 0; skaicius <= 10; skaicius += 2) {
    console.log(skaicius);
}
*/

/*
let obj = {
    name: "Jonas",
    age: 19,
    occupying: "nothing",
    
};

for(let key in obj){
    console.log(key)
}

console.log(Object.values(obj))

const arr=["jonas","petras", "antanas"];
for(let val of arr){
    console.log(val)
}


for (let key in arr){
    console.log(key)
}
    */

/*
let skaicius=0
while(skaicius <= 12){
console.log(skaicius)
skaicius++
}

*/

/*
var skaicius = 0;

while(skaicius < 10){
    skaicius = skaicius + 1;
    console.log(skaicius);
}

*/
/*
var skaicius = 11;

while(skaicius > 0){
    skaicius = skaicius - 1;
    console.log(skaicius);
}
    */

/*
let skc = 10
while (skc >= 1) {
    console.log(skc)
    skc--
}
console.log("------------------------")
let skaicius = 1
while (skaicius <= 10) {
    if (skaicius % 2 !== 0) console.log(skaicius)
        skaicius++
}
*/
/*


let numb = 1
do {
    console.log(numb)
numb++
} while(numb < 2)

*/
/*

function calc() {
    let sum = 0;
    let count = 0;
    let number;

    do {
        number = prompt("skaicius");
        if (number >= 0) {
            sum += number;
            count++;
        }
    } while (number >= 0);

    console.log((sum / count));
}

calc();
*/

/*
function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random()
}
    */

/* 1
let obj = {
    name: "jonas",
    age: 18,
    city: "kaunas"
};

for (let key in obj) {
    console.log(key);
}
*/

/* 2
function lenght(words) {
    return words.map(word => word.length);
}

let word1 = ["ne", "labas", "taip"];
let lenght1 = lenght(word1);
console.log(lenght1); 
*/

/*

const Button = document.getElementById("Button")

Button.addEventListener("click", () => {
/*
    if(Button.style.backgroundColor == "orange"){
        Button.style.backgroundColor = "white";
     } else Button.style.backgroundColor = "orange";
*/
/*

Button.style.backgroundColor == "orange" ? Button.style.backgroundColor = "white" : Button.style.backgroundColor = "orange"

    })
*/
/*
let number = 5

if (number = 1) {
    console.log("the number is odd")
  } else if (number = 2) {
    console.log("the number is even")
  }
  else if (number = 3) {
    console.log("the number is odd")
  }
  else if (number = 4) {
    console.log("the number is even")
  }
  else if (number = 5) {
    console.log("the number is odd")
  }
  else if (number = 6) {
    console.log("the number is even")
  }
  else if (number = 7) {
    console.log("the number is odd")
  }
  else if (number = 8) {
    console.log("the number is even")
  }
  */





/*


  const input = document.getElementById("firstname");
  const formButton = document.getElementById("formButton");
  const unorderedList = document.getElementById("unorderedList");
  
  formButton.addEventListener("click", (event) => {
      event.preventDefault();
      let inputValue = input.value;
  
      if (inputValue.length > 1) {
          const listItem = document.createElement("li");
          listItem.innerText = inputValue;
  
          unorderedList.appendChild(listItem);
          input.value = "";
      }
  });

  */
/*
for (let i=0; i<5; i++){
    console.log(i)
    if(i===2){break}
}
    */

/*
const divElement = document.createElement('div');
divElement.textContent = 'hello';
document.body.appendChild(divElement);


divElement.setAttribute('class', 'myClass');
divElement.setAttribute('id', 'myId');


const imageTag = document.createElement('img');
imageTag.setAttribute('src', 'data:image/jpeg;base64,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');
imageTag.setAttribute('alt', 'An image');
imageTag.setAttribute('class', 'myClass');
imageTag.setAttribute('id', 'myId');
document.body.appendChild(imageTag);


const divWithP = document.createElement('div');
for (let i = 1; i <= 5; i++) {
  const pTag = document.createElement('p');
  pTag.textContent = `person ${i}`;
  divWithP.appendChild(pTag);
}
document.body.appendChild(divWithP);


const pTags = divWithP.getElementsByTagName('p');


for (let i = 0; i < pTags.length; i++) {
  if (i % 2 === 0) {
    pTags[i].style.color = 'red';
    pTags[i].style.backgroundColor = 'black';
  } else {
    pTags[i].style.backgroundColor = 'green';
    pTags[i].style.color = 'white';
  }
}
*/
//2

/*
function initializePage() {
    
    const textContainer = document.createElement('div');
    document.body.appendChild(textContainer);

  
    for (let i = 1; i <= 5; i++) {
        const p = document.createElement('p');
        p.id = `text${i}`;
        p.className = 'text-element';
        p.textContent = `Tekstas ${i}`;
        textContainer.appendChild(p);
    }

   
    const divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

 
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.className = 'my-div';
        divContainer.appendChild(div);
    }

    document.getElementById('text1').style.color = 'red';
    document.getElementById('text2').style.fontWeight = 'bold';
    document.getElementById('text4').style.textDecoration = 'underline';
    document.getElementById('text5').style.fontStyle = 'italic';


    const elements = document.getElementsByClassName('text-element');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = '1px solid black';
    }


    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = 'yellow';
    }

    const divs = document.getElementsByClassName('my-div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.width = '100px';
        divs[i].style.height = '100px';
        divs[i].style.margin = '5px';
        divs[i].style.backgroundColor = 'lightblue';
    }
}


initializePage();
*/
/*

const container = document.createElement('div');
document.body.appendChild(container);


const rowLabel = document.createElement('label');
rowLabel.textContent = 'Eilutes:';
container.appendChild(rowLabel);

const rowInput = document.createElement('input');
rowInput.type = 'number';
rowInput.id = 'rows';
container.appendChild(rowInput);


const columnLabel = document.createElement('label');
columnLabel.textContent = 'Stulpeliai:';
container.appendChild(columnLabel);

const columnInput = document.createElement('input');
columnInput.type = 'number';
columnInput.id = 'columns';
container.appendChild(columnInput);


const createButton = document.createElement('button');
createButton.textContent = 'create';
container.appendChild(createButton);


const tableContainer = document.createElement('div');
container.appendChild(tableContainer);


createButton.addEventListener('click', function() {
    const rows = parseInt(rowInput.value);
    const columns = parseInt(columnInput.value);

 
    tableContainer.innerHTML = '';

   
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.textContent = `Eilutes:${i + 1} Stulpeliai:${j + 1}`; 
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
});


const style = document.createElement('style');
style.textContent = `
    table {
        border-collapse: collapse;
        margin-top: 20px;
    }
    table, th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
    }
`;
document.head.appendChild(style);

*/

