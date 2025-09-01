const auto = {
  nimi: "Audi",
  hind: 50000,
  aasta: 2020,
  avariiline: false,
};

const auto1 = {
  nimi: "BMW",
  hind: 50500,
  aasta: 2021,
  avariiline: false,
};

const auto2 = {
  nimi: "Volvo",
  hind: 25000,
  aasta: 2022,
  avariiline: true,
};

console.log("BMW hind: " + auto.hind);
console.log("Volvo aasta: " + auto2.aasta);

const autod = [];

autod.push(auto);
autod.push(auto1);
autod.push(auto2);
console.log(autod);

const result = autod.filter((auto) => auto.avariiline === false);
console.log(result);

const result2 = autod.filter((auto) => auto.hind <= 50000);
console.log(result2);

const result3 = autod.toSorted((a, b) => b.nimi.localeCompare(a.nimi));
console.log(result3);
