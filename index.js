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
