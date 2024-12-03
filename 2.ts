interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo({ name, age, city }: Person) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

printPersonInfo({ name: "Alice", age: 25, city: "Berlin" });
