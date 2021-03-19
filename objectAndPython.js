// Objects in JavaScript
// Dictionaries in Python

let student = {
    first: 'Ryan',
    last: 'Qazi',
    age:25,
    height:171,
};

console.log(student.first); //output --> Ryan
console.log(student.last);  //output --> Qazi
console.log(student['first']); //output --> Ryan
console.log(student['age']); //output --> 25

student['first'] = 'notRafesh'; // change value
console.log(student.first);  // output --> notRafesh

student.age++;
console.log(student.age);
