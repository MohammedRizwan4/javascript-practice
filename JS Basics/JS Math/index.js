console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)

console.log(Math.round(4.4))
console.log(Math.round(4.6))
console.log(Math.round(4.5))


// next nearest but greatest integer
console.log(Math.ceil(4.9))
console.log(Math.ceil(4.7))
console.log(Math.ceil(4.4))
console.log(Math.ceil(4.2))
console.log(Math.ceil(-4.2))


// next nearest but smallest integer
console.log(Math.floor(4.9))
console.log(Math.floor(4.7))
console.log(Math.floor(4.4))
console.log(Math.floor(4.2))
console.log(Math.floor(-4.2))

// Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.9))
console.log(Math.trunc(4.7))
console.log(Math.trunc(4.4))
console.log(Math.trunc(4.2))
console.log(Math.trunc(-4.2))


// Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4))
console.log(Math.sign(0))
console.log(Math.sign(4))

console.log(Math.pow(8, 2))

console.log(Math.sqrt(64))

console.log(Math.abs(-4.7))

console.log(Math.max(0, 150, 30, 20, -8, -200))

console.log(Math.min(0, 150, 30, 20, -8, -200))

console.log(Math.random())

console.log(Math.log(2323))
console.log(Math.log2(2323))
console.log(Math.log10(2323))

console.log(Boolean(10 > 9))
console.log((10 > 9))
console.log(10 > 9)


// flasy values
let x = 0;
console.log(Boolean(x))
x = -0;
console.log(Boolean(x))
x = "";
console.log(Boolean(x))
{
    let x;
    console.log(Boolean(x))
}
x = null;
console.log(Boolean(x))
x = false;
console.log(Boolean(x))
x = 10 / "Hallo";
console.log(Boolean(x))


let name = null;
let text = "missing";
let result = name ?? text;
result

const car = { type: "Fiat", model: "500", color: "white" };
// Ask for car name:

// instead of error it gives undefined 
console.log(car.name) // error 
console.log(car?.name)

