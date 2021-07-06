
// Object destructuring 

// const person = {
//     name: "Andrew",
//     age: 26,
//     location: {
//         city: "Philedelphia",
//         temp:47
//     }

// };


// console.log();


// Array destructuring 

// defining our item array 
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// the process of destructuring... we redefined string 'Coffee (hot)' below as just coffee
// we left an empty space to skip the string '$2.00'
// then we redefined the string '$2.50' as price 
const [coffee, ,price] = item;

// here we used our new redefined items from our original string 
console.log(` A medium ${coffee} costs ${price}`)


// destructuring an object passed into a function 


// here we are passing in our object keys a,b and naming the 100 value a c key 
// then we can add them and return them.
// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }, 100));