// Ülesanne 1

function printNum() {
  for (let i = 10; i <= 60; i++) {
    if (i <= 20 || i >= 40) {
      console.log(i);
    }
  }
}

printNum();

// function printNum() {
//   for (let i = 10; i <= 60; i++) {
//     if (i > 20 && i < 40) {
//       continue; // skip numbers between 21 and 39
//     }
//     console.log(i);
//   }
// }

// printNum();

// Ülesanne 2

//Prindi kõik arvud, mis jaguvad 3-ga vahemikus 10 kuni 50

function isDivisibleByThree() {
  for (let i = 10; i <= 50; i++) {
    if (i % 3 === 0) {
      console.log(i + " is divisible by 3");
    }
  }
}

isDivisibleByThree();

// Ülesanne 3

//Prindi kõik arvud 1-100
//Kõik arvud, mis jaguvad 3-ga prindi nr asemel "Fizz"
//Kõik arvud, mis jaguvad 5-ga prindi nr asemel "Buzz"
//Kõik arvud, mis jaguvad nii 3-ga kui 5-ga, prindi nr asemel "FizzBuzz"
//(muul juhul number)

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();

// Ülesanne 4

// Tee funktsioon sumDigits, millel on üks numbrist parameeter (sisend)
// Funktsioon liidab arvus olevad numbrid (ristsumma)
// nt 125 = 8 (1+2+5)
// ja returni see väärtus (antud näite puhul 8) (võib ka console.log panna)
// Kui sisend on negatiivne või ühekordne number (0-9), siis returni -1

function sumDigits(num) {
  let string = num.toString();
  let total = 0;
  if (num < 10) {
    return -1;
  }
  for (let i = 0; i < string.length; i++) {
    total += Number(string[i]);
  }
  return total;
}

console.log(sumDigits(-923));

// Ülesanne 5

// If-else või if+return
// Kui muutuja on A, siis prindi tekst "Oli A"
// Kui muutuja on B, siis prindi"Oli B"
// Kui muutuja on C, D või E, siis prindi "Oli C, D või E"
// Muul juhul prindi"Ei leitud"

let muutuja = "A";

function misTäht(muutuja) {
  if (muutuja === "A") {
    console.log("Muutuja oli " + muutuja);
  } else if (muutuja === "B") {
    console.log("Muutuja oli " + muutuja);
  } else if (["C", "D", "E"].includes(muutuja)) {
    console.log("Muutuja oli C, D või E");
  } else {
    console.log("Ei leitud");
  }
}

misTäht(muutuja);

// Ülesanne 6

//Liida kõik elemendid kokku
//Tee eraldi muutuja, kuhu elementide väärtused ükshaaval juurde liita (nt. sum)
//Jagame selle summa elementide arvuga
//returnime keskmise väärtuse

let numbers = [5, 12, 14, 5, 9, 123, 3];

function sumAverage(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] / numbers.length;
  }
  return total;
}

console.log(sumAverage(numbers));

// Ülesanne 7

//Loo objekt panga kliendile
//Objektil on: konto nr, kontojääk, kliendi nimi, kliendi email, kliendi tel nr
//Kõik peale kontojäägi võivad olla string kujul (ehk jutumärkide sees)

let klient = {
  kontoNr: "EE23424325234",
  kontoJääk: 5112,
  kliendiNimi: "Toivo Mägi",
  kliendiEmail: "toivo.magi@gmail.com",
  telefon: "+37256623934",
};

console.table(klient);

// Ülesanne 8

//Teeme 2 funktsiooni: deposit (suurendab kontojääki), withdraw (vähendab kontojääki)
//withdraw puhul tuleb kontrollida, et kontol oleks piisavalt raha
//mõlemal funkts. sisendiks raha kogus (number)

function deposit(sum) {
  klient.kontoJääk += sum;
  // return klient.kontoJääk;
}

deposit(499);

console.table(klient);

function withdraw(sum) {
  if (klient.kontoJääk < sum) {
    console.log("Kontol pole piisavalt vahendeid");
    return;
  }

  klient.kontoJääk -= sum;
  return klient.kontoJääk;
}

withdraw(555);
console.table(klient);

// Ülesanne 9

//Tee kaks person objekti, mõlemal on nimi ja vanus (objektid peaksid olema erinevate nimedega)
//Lisa need objektid arraysse
//prindi for tsükliga mõlema personi nimi ja vanus läbi array

let person1 = {
  nimi: "Kaarel",
  vanus: 35,
};

let person2 = {
  nimi: "Triin",
  vanus: 39,
};

let inimesed = [];

inimesed.push(person1, person2);

console.table(inimesed);

for (let i = 0; i < inimesed.length; i++) {
  console.log(inimesed[i].nimi + ", " + inimesed[i].vanus);
}
