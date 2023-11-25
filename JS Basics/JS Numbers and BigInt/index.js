let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
x
y

{
    let x = 123e5;    // 12300000
    let y = 123e-5;   // 0.00123
    x
    y
}

{
    let x = 999999999999999;   // x will be 999999999999999
    let y = 9999999999999999;  // y will be 10000000000000000
    console.log(y.toString().length)
    x
    y
}

{
    let x = 0.2 + 0.1;
    x
}

{
    let x = (0.2 * 10 + 0.1 * 10) / 10;
    x
}

{
    let x = 10;
    let y = 20;
    let z = x + y;
    z
    {
        let x = "10";
        let y = "20";
        let z = x + y;
        z
    }
}

{
    let x = 10;
    let y = "20";
    let z = x + y;
    z
}

{
    let x = "10";
    let y = 20;
    let z = x + y;
    z
}

{
    let x = 10;
    let y = 20;
    let z = "The result is: " + x + y;  //  here is the cache - concat
    z
    z = "The result is: " + (x + y);  //  here is the cache - add
    z
}

{
    let x = 10;
    let y = 20;
    let z = "30";
    let result = x + y + z;
    result
}

{
    let x = "100";
    let y = "10";
    let z = x / y;
    z
}

{
    let x = "100";
    let y = "10";
    let z = x * y;
    z
}

{
    let x = "100";
    let y = "10";
    let z = x - y;
    z
}

{
    let x = "100";
    let y = "10";
    let z = x + y;  // this will not work
    z
}

{
    let x = 100 / "Apple";
    x
}

{
    let x = 100 / "10";
    x
}

{
    let x = 100 / "Apple";
    console.log(isNaN(x))
}

{
    let x = NaN;
    let y = 5;
    let z = x + y;
    z
}

{
    let x = NaN;
    let y = "5";
    let z = x + y;
    z
}

console.log(typeof NaN)

{
    let myNumber = 2;
    // Execute until Infinity
    count = 0;
    while (myNumber != Infinity) {
        count++;
        myNumber = myNumber * myNumber;
    }
    count
    myNumber
}

{
    let x = 2 / 0;
    let y = -2 / 0;
    console.log([x, y])
    console.log(typeof Infinity)
}

{
    let x = 0xFF;
    x
    console.log(typeof x)
}

let myNumber = 32;
console.log(myNumber.toString(36))
console.log(myNumber.toString(32))
console.log(myNumber.toString(16))
console.log(myNumber.toString(12))
console.log(myNumber.toString(10))
console.log(myNumber.toString(8))
console.log(myNumber.toString(2))


{
    let x = new Number(789);
    console.log(typeof x)
}

{
    let x = new Number(500);
    let y = new Number(500);
    console.log(x === y)
}


{
    let x = 5n;
    let y = x / 2n;
    y
    // y = x / 2;
}

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

{
    console.log(Number.isInteger(10))
    console.log(Number.isInteger(10.5))
    console.log(Number.isSafeInteger(10))
    console.log(Number.isSafeInteger(5678901234567890))
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.isSafeInteger(12345678901234567890))
}

{
    let x = 123;
    console.log(x.toString())
    console.log((123).toString())
    console.log((100 + 23).toString())
}

{
    let x = 9.656;
    console.log(x.toExponential(2))
    console.log(x.toExponential(4))
    console.log(x.toExponential(6))
}

{
    let x = 9.656;
    console.log(x.toFixed(0))
    console.log(x.toFixed(2))
    console.log(x.toFixed(4))
    console.log(x.toFixed(6))
}

// number properties omitted




