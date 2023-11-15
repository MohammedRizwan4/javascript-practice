let text = `Hello World!`;
text

{
    let text =
        `The quick
        brown fox
        jumps over
        the lazy dog`;
    text
}

{
    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;
    text
}

{
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    total
}

{
    let header = "Templates Literals";
    let tags = ["template literals", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    console.log(html)
    document.write(html)
}

