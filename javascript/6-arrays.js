const cars = ["Saab", "BMW", "Audi", "Volvo", "Ferrari", "Mercedes"];

cars.forEach((car) => console.log(car));

cars.forEach((car) => {
  console.log(car);
  console.log(car.length);
});

const result1 = cars.filter((car) => car.length > 4);
console.log(result1);

const result2 = cars.filter((car) => car.endsWith("i"));
console.log(result2);

const result3 = cars.filter((car) => car.includes("er"));
console.log(result3);
