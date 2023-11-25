const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person["firstName"])
console.log(person.firstName)

{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            console.log(this)
            return this.firstName + " " + this.lastName;
        }
    };

    console.log(person.fullName())
    console.log(person.fullName)
}