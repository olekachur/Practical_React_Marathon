// TASK 1
function getModifiedArray(array) {
  newArr = array.slice(1, -1);
  newArr.unshift('Start');
  newArr.push('End')

  return newArr;
}
// console.log(getModifiedArray([12, 6, 22, 0, -8]));
// console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"]));
// console.log(getModifiedArray([false, 10, 'mail', true, 20, 30]));
// console.log(getModifiedArray([100, 200]));

const arr1 = [false, 10, 'mail', true, 20, 30];
getModifiedArray(arr1)
// console.log(arr1);

const arr2 = [100, 200];
getModifiedArray(arr2)
// console.log(arr2);


// TASK 2
const filterNums = (arr, num = 0, param = 'greater') => {
  switch (true) {
    case param === 'greater':
      newArr = arr.filter((item) => {
        return item > num
      })
      break;

    case param === 'less':
      newArr = arr.filter((item) => {
        return item < num
      })
      break;
  }

  return newArr;
};
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 11, 'greater'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 5, 'less'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], -30, 'less'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5]));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 9));


// TASK 3
const maxInterv = (...arg) => {
  let max = 0;
  let temp;
  for (let i = 0; i < arg.length - 1; i++) {
    temp = Math.abs(arg[i] - arg[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
};
// console.log(maxInterv(3, 5, 2, 7)) //5
// console.log(maxInterv(3, 5, 2, 7, 11, 0, -2))//11
// console.log(maxInterv(3, 5)) //2
// console.log(maxInterv(3)) //0


// TASK 4
let sumOfLen = (str = "", ...rest) => {
  let res = str.concat(...rest);

  return res.length;
}
// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2
// console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16
// console.log(sumOfLen()); //0


// TASK 5
function combineArray(arr1, arr2) {
  let conc = arr1.concat(arr2);
  return conc.filter(Number.isInteger);
}
// console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
// console.log(combineArray(['1', '2', '3', '4'], ['first', 'second', 'third']));


// TASK 6
function longestLogin(loginList) {
  return loginList.reduce((a, b) => {
    return a.length > b.length ? a : b;
  })
}

longestLogin(["user1", "user2", "333", "user4", "aa"]);
// console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]));


// TASK 7
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function processArray(arr, factorial) {
  newArr = [];
  return newArr = arr.map((elem) => {
    return factorial(elem);
  });
}
// console.log(processArray([1, 2, 3, 4, 5], factorial));


// TASK 8*
function func(a, b) {
  const result = Array.isArray(a);
  let sum;

  if (result) {
    return sum = a.map((i) => { a[i] * b; });
  } else {
    return a * b;
  }
}

function overloadedFunc(a = [1, 2, 3], b = 2, f) {
  return f(a, b);
}

console.log(overloadedFunc());
console.log(overloadedFunc([2, 4, 6, 8]));
console.log(overloadedFunc([2, 4, 6], 3));
console.log(overloadedFunc(10));
console.log(overloadedFunc(8, 3));
