// let name1 = prompt('Enter you name ??');

function getName(name){
    
    document.getElementById('name').innerHTML = "Hey !! my name " + name;
    console.log('My name is ' + name)
}

//getName(name1);

let yourAge = 18; // number
let yourName = 'Raveena'; //String
let name = {
    first: 'Jane',
    last : 'Doe'
};  //object 

let fruit = 'banana';
let fruit1 = 'banana, apple, orange, blackberry';

console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); // split by a characters
console.log(fruit.split(',')); //split by a comma
console.log(fruit1.split(',')); // split by comma

// Array
let fruits = ['banana', 'apple', 'orange', 'blackberry'];
fruits = new Array('banana', 'apple', 'orange', 'blackberry');

console.log(fruits[3]); // output -> blackberry ///// access value at index 3rd

fruits[0] = 'pear';
console.log(fruits);
 // output --> Array(4)
            // 0: "pear"
            // 1: "apple"
            // 2: "orange"
            // 3: "blackberry"

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// output -->
            // pear
            // apple
            // orange
            // blackberry

console.log('to String', fruits.toString());
console.log(fruits.join(' * ')); // output --> pear * apple * orange * blackberry
console.log(fruits.join(' - ')); // output --> pear - apple - orange - blackberry

console.log(fruits, fruits.pop(), fruits); // remove last item
// output --> ["pear", "apple", "orange"] "blackberry" 
         //   ["pear", "apple", "orange"]

console.log(fruits.push('blackberries'), fruits);  // appends
console.log(fruits[4]);
fruits[4] = 'new fruit';
console.log(fruits[4]);

fruits.shift(); // remove first element from a array
console.log(fruits);

fruits.unshift('kiwi'); // add frist element to an array
console.log(fruits);    

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);

console.log(allGroceries.slice(1, 4)); // output --> ["apple", "orange", "blackberries"]

console.log(allGroceries.reverse()); // output --> ["broccoli", "tomato", "asparagus", "new fruit", "blackberries", "orange", "apple", "kiwi"]

console.log(allGroceries.sort());  // output --> ["apple", "asparagus", "blackberries", "broccoli", "kiwi", "new fruit", "orange", "tomato"]

let someNumbers = [1,4,4,32,111,2,434,4,2,434,77];
console.log(someNumbers.sort());  // output --> [1, 111, 2, 2, 32, 4, 4, 4, 434, 434, 77]

console.log(someNumbers.sort(function(a,b) {return a-b}));  // output --> [1, 2, 2, 4, 4, 4, 32, 77, 111, 434, 434] - Acending Order
console.log(someNumbers.sort(function(a,b) {return b-a}));  // output --> [434, 434, 111, 77, 32, 4, 4, 4, 2, 2, 1] - Decending Order

let emptyArray = new Array();
for (let num=0; num< 5; num++){
    console.log(emptyArray.push(num));
    // output -- > 1
    //             2
    //             3
    //             4
    //             5
}

console.log(emptyArray); // output --> [0, 1, 2, 3, 4]