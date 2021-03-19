// console.log('Hello World !!!!')

let mName = 'Mosh';
console.log(mName);

let firstName = 'Mosh';
let lastName = "Amara";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const rate = 0.3;
// rate = 1; can't declare same variable twice in 
console.log(rate);

let rName = 'Raveena';
let age = 25;
let inApproved = true;
let fIrstName = undefined;
let selectedColor = null;

////////////////////////

let name = 'Raveena';
let aGe = 25;

//////////////// Objects

let mySelf = {
    Name : 'Ravena',
    Age : 25,
};

// Dot notation
mySelf.Name = 'Sachini';

//Bracket Notaion
let selection = 'Name';
mySelf[selection] = 'Udith';

console.log(mySelf.Name);

//////////////////// Array

let sectorColors = ['red','blue'];
sectorColors[3] = 23;
console.log(sectorColors[1]);

console.log(sectorColors.length);

///////////////////////////// Functions

//Performing task
function greet(gName, lName){
    console.log('Hello ' + gName + lName + ' !!!!!');
}

greet('Raveena', ' Amarasiriwardena');
greet('John', ' Smith');

//Calculate a Value

function square(number){
    let area = number * number;
    return area;
}

let number = square(4);
console.log(number);

console.log(square(4));