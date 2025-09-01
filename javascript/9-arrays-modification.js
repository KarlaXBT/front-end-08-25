const cars = ["Saab", "BMW", "Audi", "Volvo", "Ferrari", "Mercedes"];

cars.push("Lamborghini");
cars.push("Maseratu");
cars.push("Porsche");

console.log(cars);
console.log(cars.length);

cars.push("VolksWagen", "Škoda", "Porsche");

console.log(cars);

cars.splice(8, 1);
const porscheIndex = cars.indexOf("Porsche");
cars.splice(porscheIndex, 1); // Kogemata kustutab järgmise
console.log(cars);
