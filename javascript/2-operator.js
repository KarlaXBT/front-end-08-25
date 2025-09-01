let result = 1 + 2;
console.log("Liitmine: " + result);

result = result - 1;
console.log("Lahutamine: " + result);

result = result * 10;
console.log("Korrutamine: " + result);

result = result / 4;
console.log("Jagamine: " + result);

result = result % 3;
console.log("Jääk: " + result);

result++;
console.log("Inkrement: " + result);

result++;
console.log("Inkrement: " + result);

result--;
console.log("Dekrement: " + result);

result += 2;
console.log("Väärtuse suurendamine 2 võrra: " + result);

// samaväärsed:
// result++;
// result += 1;
// result = result +1;

result *= 10;
console.log(result);

result /= 8;
console.log(result);

result -= 2;
console.log(result);

const loggedIn = false;
console.log(loggedIn);

if (loggedIn === false) {
  console.log("Sa pole veel sisse loginud!");
}

const chartSum = 401;

if (chartSum > 50) {
  console.log("Said tasuta tarne pakiautomaati");
}

if (chartSum > 100) {
  console.log("Said tasuta kingituse");
}

const tarneLinn = "Tallinn";

if (chartSum > 500 || (tarneLinn === "Tallinn" && chartSum > 400)) {
  console.log("Said tasuta fööni kaasa");
}

const makstud = false;
if (makstud) {
  //(makstud === true)
  console.log("Tellimus on edukalt makstud");
}

if (!makstud) {
  // (makstud === false)
  console.log("Tellimus on maksmata");
}

if (tarneLinn !== "Tallinn") {
  console.log("Kui soovid kullerteenust, pead maksma");
}

// === range võrdlus
// == leebe võrdlus (Andmetüüp võib olla erinev aga ei soovitata kasutada)
// = anname väärtust
// < väiksem
// <= väiksem võrdne
// !== ei võrdu siis on OK

// Harjutus:
// Tee 3 muutujat, mis on täisarvud
// Kui üks nendest kolmest on negatiivne, siis printi "Vale väärtus"
// Kui kõik numbrid on võrdsed, printi "Kõik numbrid on võrdsed"
// Kui kõik numbrid on erinevad, printi "Kõik numbrid on erinevad"
// Muul juhul printi "Pole võrdsed ega erinevad"

const number1 = 4;
const number2 = 4;
const number3 = 4;

if (number1 < 0 || number2 < 0 || number3 < 0) {
  console.log("Vale väärtus");
}

if (number1 === number2 && number2 === number3) {
  console.log("Kõik numbrid on võrdsed");
} else if (number1 !== number2 && number2 !== number3) {
  console.log("Kõik numbrid on erinevad");
} else {
  console.log("Pole võrdsed ega erinevad");
}
