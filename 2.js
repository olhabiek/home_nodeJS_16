function printPersonInfo(_a) {
    var name = _a.name, age = _a.age, city = _a.city;
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", City: ").concat(city));
}
printPersonInfo({ name: "Alice", age: 25, city: "Berlin" });
