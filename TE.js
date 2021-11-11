// class Person {
//   constructor(name, age, height, dob) {
//     this.name = name,
//       this.age = age,
//       this.height = height,
//       this.dob = dob
//   }
// }

// let papa = new Person("Paul", "50", "6.3", "12-12-2012");
// let mama = new Person("Paulina", "50", "6.3",);
// console.log(papa);
// console.log(mama.dob);



class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

// document.getElementById("demo").innerHTML = "My car is " + myCar.age(year) + " years old.";