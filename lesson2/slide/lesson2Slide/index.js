// const greet = (name, timeOfDay) => {
//     console.log(`Good ${timeOfDay},${name}`);
// }

// greet('Alice', 'morning');
// greet('Bod', 'evening');

/////////////////////////////////

// let square = num => {
//     return num * num;
// }
// console.log(square(5));
// console.log(square(8));

/////////////////////////////////

// let sayHello = () => {
//     console.log('Hello there!')
// }
// sayHello();

/////////////////////////////////

// let person = {
//     name: 'John',
//     age: 30,
//     greet: function () {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
// person.greet();

/////////////////////////////////

// function example() {
//     let x = 10; // block-scoped variable

//     if (true) {
//         let y = 20;
//         console.log(x);
//         console.log(y);
//     }

//     console.log(x);
//     // console.log(y) // Err: y  is not define
// }
// example();

//////////////////////////////////////////////////
// function sum(...num) {
//     let total = 0;

//     for (let el of num) {
//         total += el;
//     }

//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(10, 20));
// console.log(sum(3, 6, 9, 12, 15, 18));

//////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // Destructuring
// const [a, b, ...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(rest);

// const person = {
//     name: 'John Doe',
//     age: '30',
//     city: 'New York'
// }

// const { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);

//////////////////////////////////////////////////
// const greet = (name = 'Guest') => {
//     console.log(`Hello, ${name}`);
// }
// greet('Hieu');

//////////////////////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum = Math.random();
//         if (randomNum < 0.5) {
//             resolve(randomNum);
//         } else {
//             reject('Random number is greater than 0.5');
//         }
//     }, 2000)
// })

// myPromise
//     .then(result => {
//         console.log('Success:', result)
//     })
//     .catch(error => {
//         console.log('Error:', error)
//     });


//Promise
//////////////////////////////////////////////////
// let promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise 1 resolved');
//     }, 2000)
// })

// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise 2 resolved');
//     }, 2000)
// })

// Promise.all([promise1, promise2]).then((values) => {
//     console.log(values)
// })

//Async/Await
//////////////////////////////////////////////////
// let myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise resolved')
//     }, 2000)
// })

// async function asyncFunction() {
//     let value = await myPromise;
//     console.log(value);
// }
// asyncFunction();


// Classes
//////////////////////////////////////////////////
// init class Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea());











