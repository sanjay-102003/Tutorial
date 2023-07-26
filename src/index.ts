console.log("Hello World!!");
console.log("Hello");
console.log("Hello");

interface person {
  name: string;
  age: string;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let person1: person = {
  name: "sanj",
  age: "hss",
};

let person2: Person = new Person("Sanja");

console.log(person1, person2);
