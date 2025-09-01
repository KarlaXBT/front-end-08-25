const cars = ["Saab", "BMW", "Audi", "Volvo", "Ferrari", "Mercedes"];

const result1 = cars.toSorted((a, b) => a.localeCompare(b));
console.log(result1);

const result2 = cars.toSorted((a, b) => b.localeCompare(a));
console.log(result2);

const result3 = cars.toSorted((a, b) => a.length - b.length);
console.log(result3);

const result4 = cars.map((car) => car.toUpperCase());
console.log(result4);

const result5 = cars.map((car) => {
  car = car.toUpperCase();
  car = car[car.length - 1].toLowerCase();
  return car;
});

console.log(result5);

const result6 = cars.map((car) => {
  return car.slice(0, -1).toUpperCase() + car.slice(-1).toLowerCase();
});

console.log(result6);
