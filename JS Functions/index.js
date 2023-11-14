// Function is called, the return value will end up in x
let x = myFunction(4, 3);
x

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
value

{
    function toCelsius(fahrenheit) {
        fahrenheit
        return (5 / 9) * (fahrenheit - 32);
    }

    let value = toCelsius();
    value
}

{
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }

    let value = toCelsius;
    console.log(value)
}

{
    console.log(typeof carName)
    function myFunction(){
        let carName = "Volvo"
    }
}

