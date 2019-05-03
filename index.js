let firstName = "Sunmi";
let lastName = 'Chang';
console.log(typeof firstName);
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);
console.log(`                ${firstName} ${lastName}`.length);
console.log(`                ${firstName} ${lastName}                 `.trim().length);
console.log(`${firstName} ${lastName}`.toUpperCase());
console.log(`${firstName} ${lastName}`.toLowerCase());
console.log(`${firstName} ${lastName}`.split(' '));
console.log(`${firstName} ${lastName}`.split(''));
// let fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

let example = 7.77;

console.log(typeof example);
console.log(parseInt(example));
console.log(parseFloat(example));
console.log(example.toFixed());
console.log(example.toFixed(5));
console.log(example.toFixed(1));



let examples = '7.77';
console.log(typeof examples);
console.log(parseInt(examples));
console.log(parseFloat(examples));



let example1 = parseInt("Hello 33 World 22");
let example2 = parseFloat("44 Dylan 33");
let example3 = 55.5555.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);




//////////////////////////////////////////////////////////////////

let example5 = true;
console.log(Boolean(example5));

let example6 = [5,7,6];
// example6.push(8);
// console.log(example6);

// example6.push([8,9,10]);
// console.log(example6);

example6.push(8,9,10);
console.log(example6);

example6.pop();
console.log(example6);

example6[0] = 1;
console.log(example6);

example6.forEach(function(e){
    console.log(e);
});

example6.forEach((element) => {
    console.log(element);
});

////////////////////////////////////////////////////////////////////

let exam1 = ['Dylan', 5, true];
let exam2 = exam1;
// let exam2 = [...exam1];
// let exam2 = exam1.map((element) => {
//     return element;
// });
exam2.push(11);

console.log(exam1);
console.log(exam2);

// Objects ////////////////////////////////////////////////////////////////////

let person1 = {
    firstName:'Sunmi',
    lastName:'Chang',
    address: {
        city: 'Austin',
        state:'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito','Achieles']
};

// console.log(person1.firstName);
console.log(person1.age);
person1.age = 31;
console.log(person1.address.city);
console.log(person1.age);
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(person1.hasOwnProperty('firstName'));
console.log(person1.hasOwnProperty('firstName2'));

//////////////////////////////////////////////////////////////////////////////

let person2 = {
    firstName: 'Sunmi'
}

let person3 = Object.assign({}, person2);

// let person3 = person2;

person3.lastName = 'Chang';

console.log(person2);
console.log(person3);

// math Operators ///////////////////////////////////////////////////////

console.log( 5%5);
console.log( 5%2);

console.log(typeof 10);
console.log(typeof '10');

console.log(10 == '10');
console.log(10 === '10');

let exam3 = 13;
// exam3 %= 3;
exam3 ++ // exam3 = exam3 + 1
console.log(exam3);
exam3 -- 
console.log(exam3);
exam3 += 5;
console.log(exam3);
exam3 -= 5;
console.log(exam3);
exam3 /= 5;
console.log(exam3);

// If, Else If, Else, And & Or /////////////////////////////////////////////

console.log(10 === 10 && 5 < 4); //and
console.log(10 === 10 || 5 < 4); //or
console.log((5 >= 5 || 4 < 4) && 3 + 2 === 5);

let exam4 = 5;

if (exam4 === 6 || false === true){
    console.log('Runs');
} else if( false ) {
    console.log('else if');
} else {
    console.log('else');
}

//Switch //////////////////////////////////////////////////////////////////

let studentAnswer = 'A';

switch(studentAnswer){
    case 'A':
    console.log('A is wrong.');
    break;
    case 'B':
    console.log('B is wrong.');
    break;
    case 'C':
    console.log('C is correct.');
    break;
    default:
    console.log('Not a real answer.');
}


studentAnswer = 'B';

switch(studentAnswer){
    case 'A':
    console.log('A is wrong.');
    break;
    case 'B':
    console.log('B is wrong.');
    break;
    case 'C':
    console.log('C is correct.');
    break;
    default:
    console.log('Not a real answer.');
}


studentAnswer = 'C';

switch(studentAnswer){
    case 'A':
    console.log('A is wrong.');
    break;
    case 'B':
    console.log('B is wrong.');
    break;
    case 'C':
    console.log('C is correct.');
    break;
    default:
    console.log('Not a real answer.');
}


studentAnswer = 'D';

switch(studentAnswer){
    case 'A':
    console.log('A is wrong.');
    break;
    case 'B':
    console.log('B is wrong.');
    break;
    case 'C':
    console.log('C is correct.');
    break;
    default:
    console.log('Not a real answer.');
}

// For Loop ///////////////////////////////////////////////////

let total = 0;

// for (let i = 0; i <5; i++){
//     total += i;
// }
// console.log(total);

///////////////////

let numArray = [10,20,30,40,50,60,70,80];

for (let i = 0; i <numArray.length; i++){
    total += numArray[i];
}
console.log(total);

// While Loop ////////////////////////////////////////////////////

let count = 0;

while (true) {
    count++;

    if(count >= 20) {
        break;
    }
}

console.log(count);

// Function ////////////////////////////////////////////////////

function add(num1, num2){
    return num1 + num2;
}

console.log(add(10, 6));
console.log(add(25, 7));
console.log(add(20, 2));