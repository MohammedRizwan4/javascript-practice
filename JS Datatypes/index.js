// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log("" == false);

{
    let x = 16 + "Volvo";
    x;
}

{
    let x = "16" + "Volvo";
    x;
}

{
    let x = 16 + 4 + "Volvo";
    x;
}

{
    let x = "Volvo" + 16 + 4;
    x;
}

{
    let x; // Now x is undefined
    console.log(typeof x);
    x = 5; // Now x is a Number
    console.log(typeof x);
    x = "John"; // Now x is a String
    console.log(typeof x);
}

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = "Volvo XC60";

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

/// All JavaScript numbers are stored as decimal numbers (floating point).

// With decimals:
let x1 = 34.0;
x1;
// Without decimals:
let x2 = 34;
x2;

{
    let y = 123e5; // 12300000
    y;
    let z = 123e-5; // 0.00123
    z;
}

{
    let x = 3243254675632432;
    let bitsNeeded = Math.floor(Math.log2(Math.abs(x))) + 1;

    console.log(`Number of bits ${x}: ${bitsNeeded}`);
}

{
    let x = BigInt("123456789012345678901234567890");
    x;
    let y = 83248293482398472349238423482384723948n;
    y;
}

{
    let x = 5;
    let y = 5;
    let z = 6;
    console.log(x == y); // Returns true
    console.log(x == z); // Returns false
}

{
    console.log(typeof ""); // Returns "string"
    console.log(typeof "John"); // Returns "string"
    console.log(typeof "John Doe"); // Returns "string"
    console.log(typeof 0); // Returns "number"
    console.log(typeof 314); // Returns "number"
    console.log(typeof 3.14); // Returns "number"
    console.log(typeof 3); // Returns "number"
    console.log(typeof (3 + 4)); // Returns "number"
}


