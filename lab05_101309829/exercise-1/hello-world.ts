// ES5 Syntax
// var greeter = function(name) {
//     console.log("Hello " + name);
// }

// greeter("Humaiyun")

// ES6 Syntax
let greeter = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`)
}

greeter("Humaiyun", "Uddin");