const calci = require('./calci');
const areac = require('./areac');

// Calculation of numbers
console.log("Addition is:",calci.add(2,5));
console.log("Subtraction is:",calci.sub(10,5));
console.log("Multiplication is:",calci.mul(3,5));
console.log("Division is:",calci.div(10,2));

// Area of a circle
console.log("Area of circle is:",areac.circle(5));