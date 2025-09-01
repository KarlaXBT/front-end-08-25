console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for (let index = 1; index <= 5; index++) {
  console.log(index);
}

for (let index = 100; index > 80; index--) {
  console.log(index);
}

for (let index = 1; index <= 5; index += 2) {
  console.log(index);
}

// Array
const cars = ["Saab", "BMW", "Audi", "Volvo"];
console.log(cars);

console.log(cars[0]);
console.log(cars[0].length);

console.log(cars[1]);
console.log(cars[1].length);

for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
  console.log(cars[index].length);
}
