// TASK 1
negate = function (x) { return -x; };
halve = function (x) { return x / 2; };
square = function (x) { return x * x; };
double = function (x) { return 2 * x; };

const combineFunctions = (...fns) => x =>
    fns.reduce((acc, cur) => {
        return cur(acc);
    }, x);
const combinedFunc = combineFunctions(negate, halve, square, double);


// TASK 2*
let students = [{
    name: 'Anna',
    languages: ['English', 'Ukrainian'],
    age: 21
}, {
    name: 'Bob',
    languages: ['Polish', 'Spanish'],
    age: 26
}, {
    name: 'Alice',
    languages: ['Italian', 'Russian'],
    age: 18
}]

// const getLanguages = (students, func => students = true) => {
//     return arr.reduce((acc, cur) {
        
//     });
// };

console.log(getLanguages(students));
console.log(getLanguages(students, student => student.age < 26));
console.log(getLanguages(students, student => student.name === 'Alice'));


// TASK 3*
