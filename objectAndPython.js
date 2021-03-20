// Objects in JavaScript
// Dictionaries in Python

let student = {
    first: 'Ryan',
    last: 'Qazi',
    age:25,
    height:171,
    studentInfo: function(){
        return this.first + '\n' + this.last + "\n" + this.age;
    }
};

console.log(student.first); //output --> Ryan
console.log(student.last);  //output --> Qazi
console.log(student['first']); //output --> Ryan
console.log(student['age']); //output --> 25

// student['first'] = 'notRafesh'; // change value
// console.log(student.first);  // output --> notRafesh

student.age++;
console.log(student.age);

console.log(student.studentInfo()); // output --> Ryan
                                    //            Qazi
//because of this --> student['first'] = 'notRafesh';  and console.log(student.first);  
// console.log(student.studentInfo());  // you should only run when the previous line comment, if not this line doesn't give the output

// Conditionals, Control flows (if else) //////
// 18-35 my target demographic   //////

//let age1 = prompt('What is your age?');
let age1 = 33; // Remember to comment this line when you run the previous line

if ((age1 >= 18) && (age1<= 35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audiance';
    console.log(status);
}

// Swithch statements
// differentiate between weekday vs. weekend
// 0 Sunday
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday --> weekday
// day 3 --> Wednesday --> weekday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekday
// day 6 -->  Saturday --> weekend

switch(6) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'Weekday';
}

console.log(text);

console.log( 10>5 ? "This is true" : 'This is false.');  // output --> This is true