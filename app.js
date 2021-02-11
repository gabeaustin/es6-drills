// Template Literals and Default Parameters Value
let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);

// Arrow Functions
let getFirstName = (fullName) => {
    console.log(`Your first name is ${fullName.split(" ")[0]}.`);
};

let getFirstNameConcise = fullName => console.log(`Actor Don Cheadle's first name is ${fullName.split(" ")[0]}.`);

let doMath = (num1, num2) => ({
    exponentResult: (num1 ^ num2),
    productResult: (num1 * num2)
});

let result = doMath(5, 10);
console.log(result);

favMovie("Saw", "Gabe");
getFirstName("Gabriel Austin");
getFirstNameConcise("Don Cheadle");


// Spread Syntax
let nightOutArray = ["Ian", "Mexico", "Filet Mignon"];

let whereWeGoing = (...nightOutArray) => {};
// let firstName = "Gabriel";
// let nightOut = (name, location, favFood) => console.log(`${name} ${location} ${favFood}`);
// let jobOpenings = () => let state = ()

// console.log(nightOutArray);

whereWeGoing(...nightOutArray);
console.log(nightOutArray);



