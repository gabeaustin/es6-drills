// Template Literals and Default Parameters Value
let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);

// Arrow Functions
let getFirstName = (fullName) => {
    console.log(`Your first name is ${fullName.split(" ")[0]}.`);
};

let getFirstNameConcise = fullName => console.log(`Actor Don Cheadle's first name is ${fullName.split(" ")[0]}.`);

let doMath = (num1, num2) => ({
    exponentResult: (num1 ** num2),
    productResult: (num1 * num2)
});

let result = doMath(5, 10);
console.log(result);

favMovie("Saw", "Gabe");
getFirstName("Gabriel Austin");
getFirstNameConcise("Don Cheadle");


// Spread Syntax
let nightOutPool = (name, location, favFood) => console.log(`${name} - ${location} - ${favFood}`);

let tripInfo = ["Brad", "Miami", "pizza"];
nightOutPool(...tripInfo);

let developerName = "Gabe Austin";

// Number 6
let tripAdvisor = (companyName) => {
    let spreadTripAdvisor = [...companyName];
    for (i = 0; i < companyName.length; i++) {
        console.log(spreadTripAdvisor[i]);
    }
}
tripAdvisor(developerName);



