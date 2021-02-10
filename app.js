// Template Literals and Default Parameters Value
// function favMovie(movie = "The Room", name = "Tommy Wiseau") {
//     console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);
// }

// Arrow Function
// let fullName = "Gabriel Austin";
let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);

let getFirstName = (fullName) => {
    console.log(`Your first name is ${fullName.split(" ")[0]}.`);
};

let getFirstNameConcise = fullName => console.log(`${fullName.split(" ")[0]}, don't forget the "${fullName.split(" ")[1]}", is a great actor!`);






favMovie("Saw", "Gabe");
getFirstName("Gabriel Austin");
getFirstNameConcise("Don Cheadle");




