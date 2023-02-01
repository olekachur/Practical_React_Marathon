// TASK 1
function getPromise(delay, message) {
    return new Promise((resolve) => {
        new setTimeout(() => resolve(message), delay);
    });
}

// getPromise(2000, "hello").then(function (data) {
//     console.log(data);
// });


// TASK 2
function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === "number" && typeof y === "number") {
            resolve(x * y);
        } else {
            reject("Error!");
        }
    });
};

// add(2, 2).then(res => console.log(res));
// add(2, "a").then(res => console.log(res));
// add("b", "a").then(res => console.log(res));


// TASK 3
// const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    const user = await getUser();
    const userProfile = await getUserProfile(user.id);
    const age = userProfile.age;

    return age;
}

// getAge().then(a => console.log(a));


// TASK 4
function* take(n, iterable) {
    const newArr = iterable.slice(0, n);
    for (i of newArr) {
        yield i;
    }
}

// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
//     console.log(x);
// }


// TASK 5
const accountPatients = (n) => {
    let counter = n;

    const admit = () => {
        --counter;
        if (counter < 0) {
            ++counter
            console.log(`Can not admit a patient, no beds available`);
        } else {
            console.log(`A patient was admitted, ${counter} beds are available`);
        }
    };
    
    const discharge = () => {
        ++counter;
        if (counter > n) {
            console.log(`There are no patients to discharge`);
        } else {
            console.log(`A patient was discharged, ${counter} beds are available`);
        }
    };

    return [admit, discharge];
};

// const [admit, discharge] = accountPatients(3);
// admit();
// admit();
// admit();
// admit();
// discharge();
// discharge();
// discharge();
// discharge();


// TASK 6
function checkAdult(age) {
    try {
        if (typeof age === "undefined") {
            throw new Error("Please, enter your age");
        } else if (age < 0) {
            throw new Error("Please, enter positive number");
        } else if (typeof age !== "number") {
            throw new Error("Please, enter number");
        } else if (!Number.isInteger(age)) {
            throw new Error("Please, enter Integer number");
        } else if (age < 18) {
            throw new Error("Access denied - you are too young!");
        } else {
            console.log("Access allowed");
        }

    } catch (e) {
        console.log(e.name, e.message);

    } finally {
        console.log("Age verification complete");
    }
};

checkAdult();
checkAdult(33.3);
