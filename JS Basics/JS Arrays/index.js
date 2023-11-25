const cars = ["Saab", "Volvo", "BMW"];
cars

{
    const cars = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    cars
}

{
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";
    cars
}

{
    const cars = new Array("Saab", "Volvo", "BMW");
    cars
}

{
    const cars = ["Saab", "Volvo", "BMW"];
    cars
    cars[0] = "Opel";
    cars
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.toString());
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.length;
    length
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[0];
    fruit
    let fruit1 = fruits[fruits.length - 1];
    fruit1
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    text
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }
    text
}

{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
    fruits
}

{
    const person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    person
    console.log(person["firstName"])
    console.log(person.length)
    console.log(person[0])
}

{
    let points = new Array(40, 100, 1);
    points
    points = new Array(40, 100);
    points
    // Create an array with one element ???
    points = new Array(40);
    points
}


{
    const fruits = ["Banana", "Orange", "Apple"];
    let type = typeof fruits;
    type
    console.log(Array.isArray(fruits))
    console.log(fruits instanceof Array)
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.join(" * "))
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.pop())
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.push("Kiwi"))  // will return length
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.shift())
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon"))
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];  // wholes are there
    fruits
}

{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    myChildren
}

{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    myChildren
}

{
    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");
    myChildren
}

{
    const myArr = [[1, 2], [3, 4], [5, 6, [9, 0]]];
    const newArr = myArr.flat();
    newArr
    console.log(newArr.flat())
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi")  // from 2 index , dont delete any element means 0
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 2, "Lemon", "Kiwi");
    fruits
}

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
    citrus
}

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(3);
    citrus
}

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
    citrus
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    fruits
}

{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort();
    points
    points.sort(function (a, b) { return a - b });
    points
    points.sort(function (a, b) { return b - a });
    points
}

{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function () { return 0.5 - Math.random() });
    points
}


{
    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
    }
    console.log(myArrayMax([2, 4, 6, 7, 2, 5, 67, 7]))
}

{
    const cars = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 }
    ];
    cars.sort(function (a, b) { return a.year - b.year });
    cars
    cars.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    cars
}

{
    const myArr = [
        { name: "X00", price: 100 },
        { name: "X01", price: 100 },
        { name: "X02", price: 100 },
        { name: "X03", price: 100 },
        { name: "X04", price: 110 },
        { name: "X05", price: 110 },
        { name: "X06", price: 110 },
        { name: "X07", price: 110 }
    ];

    console.log(myArr.sort())
}

{
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
        txt += value + "<br>";
    }
    txt
}

{
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction);

    function myFunction(value, index, array) {
        return value * 2;
    }
    numbers2
}

{
    const myArr = [1, 2, 3, 4, 5, 6];
    const newArr = myArr.flatMap((x) => x * 2);
    newArr
}

{
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    over18
}

{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);

    function myFunction(total, value, index, array) {
        return total + value;
    }
    sum
}

{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction, 100);  // initial value

    function myFunction(total, value) {
        return total + value;
    }
    sum
}

{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduceRight(myFunction);

    function myFunction(total, value, index, array) {
        return total + value;
    }
    sum
}

{
    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    allOver18
}

{
    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    someOver18
}

{
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.indexOf("Apple") + 1;
    position
}

{
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.lastIndexOf("Apple") + 1;
    position
}

{
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    first
}

{
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    first
}

console.log(Array.from("ABCDEFG"))

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();
    let text = "";
    for (let x of keys) {
        text += x + "<br>";
    }

    text

}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();

    let text = "(";
    for (let x of f) {
        console.log(x)
        text += x + ")(";
    }
    text
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.includes("Mango"))
}

{
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];

    const year = [...q1, ...q2, ...q3, ...q4];
    year
}





