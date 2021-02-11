let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my Favorite Movie is ${movie}.`);

let getFirstName = (fullName) => {
    console.log(`Your first name is ${fullName.split(" ")[0]}.`);
};

let getFirstNameConcise = fullName => console.log(`Actor Don Cheadle's first name is ${fullName.split(" ")[0]}.`);

let doMath = (num1, num2) => ({
    exponentResult: (num1^num2),
    productResult: (num1*num2)
});

let result = doMath(5, 10);
console.log(result);

favMovie("Saw", "Gabe");
getFirstName("Gabriel Austin");
getFirstNameConcise("Don Cheadle");

let nightOutArray = ["Ian", "Mexico", "Filet Mignon"];
let firstName = "Gabriel";
let nightOut = (name, location, favFood) => console.log(`${name} ${location} ${favFood}`);
// let jobOpenings = () => let state = ()

nightOut(...nightOutArray);





let nums = [3,5,7];

function addNums(a,b,c) {
    console.log(a+b+c);    
}

addNums(...nums);



