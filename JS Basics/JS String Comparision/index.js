let text1 = "A";
let text2 = "B";
let result = text1 < text2;
result;

let textt1 = "20";
let textt2 = "5";
let result1 = textt1 < textt2;
result1;

// Note that strings are compared alphabetically:

let text11 = "What a very ";
text11 += "nice day";
text11;

let a = "John";
let b = "Doe";
let c = a + " " + b;
c;

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
x;
y;
z;

var ans = typeof x;
ans;

ans = typeof z;
ans;

var q = 10;
console.log((q &&= 5));

var q = 0;
console.log((q &&= 5));

var p = 9;
console.log((p ||= 90));

var p = 0;
console.log((p ||= 80));

var t;
console.log((t ??= 90));

var t = null;
console.log((t ??= 90));

var t = "";
console.log((t ??= 20));
