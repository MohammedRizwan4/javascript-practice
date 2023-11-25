let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day)

{
    switch (new Date().getDay()) {
        case 6:
            text = "Today is Saturday";
            break;
        case 0:
            text = "Today is Sunday";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    text
}

{
    switch (new Date().getDay()) {
        default:
            text = "Looking forward to the Weekend";
            break;
        case 6:
            text = "Today is Saturday";
            break;
        case 0:
            text = "Today is Sunday";
    }
    text
}

{
    switch (new Date().getDay()) {
        case 4:
        case 5:
            text = "Soon it is Weekend";
            break;
        case 0:
        case 6:
            text = "It is Weekend";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    text
}

// in is used for value 

{
    const person = { fname: "John", lname: "Doe", age: 25 };

    let text = "";
    for (let x in person) {
        text += person[x];
    }
    text
}

{
    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    for (let x in numbers) {
        txt += numbers[x];
    }
    txt
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value;
}

txt

{
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
        text += x;
    }
    text
}

{
    let language = "JavaScript";

    let text = "";
    for (let x of language) {
        text += x;
    }
    text
}