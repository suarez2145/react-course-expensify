
const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('this is my resolved data');
    // }, 5000)
    
    // reject is for when a promise is not run currently (resolved) and something goes wrong
    reject('something went wrong!')
})

console.log('before')

promise.then((data) => {
    console.log(data)
    // add .catch method with arrow function and a single argument (can be named anything...stick to error) 
    // this handles our 'error' and tells our code what to do after it errors out
}).catch((error) => {
    console.log('error:' , error)
})

console.log('after')