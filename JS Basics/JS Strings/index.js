let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes

carName1;
carName2;

let length = carName1.length;
length;

let text = 'We are the so-called "Vikings" from the north.';
text;

{
    let text = "The character \\ is called backslash.";
    text;
}

let newstr =
    " Hello world \
how are you all \
";
newstr;

{
    let x = "John";
    let y = new String("John");

    console.log(x == y);
    console.log(x === y);
}

{
    let x = new String("John");
    let y = new String("John");

    console.log(x == y);
    console.log(x === y);
}

// methods
{
    let str = "Hello_world";
    let part = str.slice(1, 6);
    part;
    part = str.slice(6);
    part;
    part = str.slice(-10);
    part;
    part = str.slice(-11, -6);
    part;
}

{
    let str = "Hello_world";
    str;
    let part = str.substring(0, 12);
    part;
    console.log(part.substring(-10, 2)); // negatives will be zero
}

{
    let str = "hello_world";
    console.log(str.substr(4, 3)); // start from 4 and give 3 characters
    console.log(str.substr(4));
    console.log(str.substr(-4));
}

{
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
    newText;
    console.log(text.replace("Microsoft", "Amazon"));
    console.log(text.replace("MicroSoft", "Amazon")); // case sensitive
    console.log(text.replace(/MICroSoft/i, "Flipcart"));
    text = "Please visit Microsoft, please visit Microsoft";
    console.log(text.replace(/Microsoft/g, "Amazon"));
    console.log(text.replace(/MicrosOft/gi, "Amazon"));

    console.log(text.replaceAll(/Microsoft/g, "kurla")); // here g is compulsory
}

{
    let text = "Please visit Microsoft!";
    let text1 = " HEloo world";
    let text2 = " Good morning";
    console.log(text.toUpperCase());
    console.log(text.toLowerCase());
    console.log(text.concat(text1, text2));
    console.log(text.concat(" ", " ", " ", " ", " ", " ", text1));
}

{
    let text = "            HEloo world               ";
    console.log(text.length);
    console.log((text = text.trim()));
    console.log(text.length);
}

{
    let text = "            HEloo world               ";
    console.log(text.length);
    console.log((text = text.trimStart()));
    console.log(text.length);
}

{
    let text = "            HEloo world               ";
    console.log(text.length);
    console.log((text = text.trimEnd()));
    console.log(text.length);
}

{
    let text = "hewllo worls";
    console.log(text.padStart(20, "*"));
    console.log(text.padEnd(20, "*"));
}

{
    let a = 3;
    a = a.toString();
    console.log(a.padStart(6, "*"));
}

{
    let text = "abc";
    console.log(text.charAt(0))
    console.log(text.charCodeAt(0))   // ascii code
    console.log([text[0], text[1], text[2]])
    console.log([...text])
    console.log(...text)
    console.log({ ...text })
    text[0] = 2;
    console.log(text[0])  // no difff
    console.log(text)
}

{
    let text = "Hello , world"
    console.log(text.split())
    console.log(text.split(""))
    console.log(text.split(" "))
    console.log(text.split(","))
    console.log(text.split("|"))
}


// String search

{
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");
    index
}

{
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    index
}

{
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate", 15);  // starting position 
    // here no regular expression
    index
}

{
    let text = "Please locate where 'locate' occurs!";
    console.log(text.search("locate"))
    console.log(text.search(/locate/))  // here no starting position
}

{
    let text = "The rain in SPAIN stays mainly in the plain";
    console.log(text.match("ain"))
}

{
    let text = "The rain in SPAIN stays mainly in the plain";
    console.log(text.match(/ain/))
}

{
    let text = "The rain in SPAIN stays mainly in the plain";
    console.log(text.match(/ain/g))
}

{
    let text = "The rain in SPAIN stays mainly in the plain";
    console.log(text.match(/ain/gi))
}

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll("Cats");
    console.log(Array.from(iterator))
}

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll(/Cats/g);
    console.log(Array.from(iterator))
}

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll(/Cats/gi);
    console.log(Array.from(iterator)[0])  // problem with index
}

{
    let text = "Hello world, welcome to the universe.";
    console.log(text.includes("world"))
    console.log(text.includes("world", 12)) // starting position
}

{
    let text = "Hello world, welcome to the universe.";
    console.log(text.startsWith("Hello"))
    console.log(text.startsWith("world", 6))
}

{
    let text = "Hello world, welcome to the universe.";
    console.log(text.endsWith("universe"))
    console.log(text.endsWith("the", 27))  // first 27 ends with "the"?
}




