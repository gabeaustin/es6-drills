// Template Literals and Default Parameters Value
// function favMovie(movie = "The Room", name = "Tommy Wiseau") {
//     console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);
// }

// Arrow Function
let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);

let getFirstName = (fullName) => {
    console.log(`Your first name is ${fullName.split(" ")[0]}.`);
};

let getFirstNameConcise = fullName => console.log(`${fullName.split(" ")[0]}, don't forget the "${fullName.split(" ")[1]}", is a great actor!`);

/* COME BACK TO */
/*
let doMath = (num1 = 10, num2 = 5) => console.log(`The exponent result is ${(num1^num2)}. The product is ${(num1*num2)}.`);
console.log(doMath);
*/


favMovie("Saw", "Gabe");
getFirstName("Gabriel Austin");
getFirstNameConcise("Don Cheadle");


let nightOutArray = ["Ian", "Mexico", "Filet Mignon"];
let nightOut = (name, location, favFood) => console.log(`${name} ${location} ${favFood}`);
nightOut(...nightOutArray);





let nums = [3,5,7];

function addNums(a,b,c) {
    console.log(a+b+c);    
}

addNums(...nums);



