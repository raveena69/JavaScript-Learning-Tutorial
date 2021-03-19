
console.log('Hello');

// alert('Hi Raveena');

document.getElementById('hello').innerHTML = 'Hello World';

// let age = prompt('Hey there what is your name ? ');

// document.getElementById('name').innerHTML = age;

var num = 10;
//console.log(num / 11)
while (num != 43) {
    num = 11 + num;
    console.log(num);

}

function returnName() {

    // let name = prompt('What is your name : ');

    var result = 'Hello' + ' ' + name;

    console.log(result);
    document.getElementById('name').innerHTML = result;
}

returnName();

function printName(rName) {

    let myName = 'Hi' + " " + rName;
    console.log(myName);

    //document.getElementById('Ename').innerHTML = myName;
}

// let Ename = prompt('What is your name ?');
printName(Ename);

var count = 4;
var rnum = 66;

do {
    rnum += 1;
    count++;
    console.log(rnum);
} while (count < 10)

let yourAge = 24;
let yourName = 'Raveena';
let listName = {
    firstName: 'Raveen',
    lastName: 'Sachini',
};

let truth = false; //boolean
let groceries = ['apple', 'orange', 'banana']; // array
let random; // undefined
let nothing = null; //value null

// String in javascript (Common methods)
let fruit = 'banana';
let moreFriuts = 'banana\napple'; //new line

console.log(moreFriuts);

console.log(fruit.length);
console.log(fruit.indexOf('nan')); //output - 2
console.log(fruit.indexOf('qn')); //output - (-1)
console.log(fruit.slice(2, 6)); // output - nana
console.log(fruit.slice(3, 5)); // output - an
console.log(fruit.replace('ban', '123')); // output - 123ana
console.log(fruit.toUpperCase(fruit)); // output - BANANA
console.log(fruit.toLowerCase(fruit)); // output - banana

function getValue(callback){
    let value = 0;
    setTimeout(function(){
        value = 10;
        callback(value);
    }, 1000);
}

getValue(function (evalue){
    console.log(evalue);
});

let promise = new Promise(function (resolve, reject){
    return resolve()
    return reject();
});


//Promise
function gETValue(){
    let number = 0;
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            number = 10;
            resolve(number);
        },1000);
    });
    
}

gETValue().then(function (number){
    console.log(number);
})