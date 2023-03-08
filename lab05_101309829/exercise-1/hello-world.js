// ES5 Syntax
// var greeter = function(name) {
//     console.log("Hello " + name);
// }
// greeter("Humaiyun")
// ES6 Syntax
var greeter = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeter("Humaiyun", "Uddin");
