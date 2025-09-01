// 1. Muutuja Deklaratsioon ja selle muutmine:
let kasutajaNimi = "Kasutaja";
console.log(kasutajaNimi);

kasutajaNimi = "Uus kasutaja";
console.log(kasutajaNimi);

// 2. Arvuoperatsioonid:
let kogus = 5;
document.getElementById("kogus").textContent = kogus;
kogus++;
kogus++;
kogus++;
document.getElementById("kogus").textContent = kogus;

// 3. Sõne Ühendamine ja Võrdlus:
let teade = "Tere";
teade += " Maailm";
console.log(teade);
if (teade === "Tere Maailm") {
  document.getElementById("tervitus").textContent = teade;
} else {
  console.log("Tervitusega probleem");
}

// 4. Tingimuslause:
let vanus = 65;
if (vanus >= 65) {
  console.log("Oled pensionil");
} else {
  console.log("Oled tööealine");
}

vanus--;
if (vanus >= 65) {
  console.log("Oled pensionil");
} else {
  console.log("Oled tööealine");
}

// 5. Tõesusväärtused:
let sisseLogitud = true;

if (sisseLogitud) {
  console.log("Kasutaja on sisse logitud");
} else {
  console.log("Kasutaja pole sisse logitud");
}

// 6. Sõne ja Arvu Kombineerimine:
let tooteKogus = 10;
let tooteNimi = "Hari";
console.log(tooteNimi + ": " + tooteKogus);

// 7. Sõne Meetodid:
let meil = "kaarel.leib@protonmail.com";
console.log(meil);
if (!meil.includes("@")) {
  console.log("Ilmnes viga - meilis pole '@' sümbolit");
}

// 8. Sõne Uurimine:
let nimi = "Kaarel";
console.log(nimi);

// if (nimi.includes("o", 3)) {
//   console.log("Nime neljas täht on 'o'");
// } else {
//   console.log("Nime neljas täht pole 'o'");
// }

if (nimi[3] === "o") {
  console.log("Nime neljas täht on 'o'");
} else {
  console.log("Nime neljas täht pole 'o'");
}

// 9. Algab Kindla Tähemärgiga:
let arvuti = "Apple";
if (arvuti[0] === "A" || arvuti[0] === "a") {
  console.log("Esimene täht on 'A/a' ");
} else {
  console.log("Esimene täht ei ole 'A/a' ");
}

// 10. Pikkuse Kontroll
let parool = "1234qwer";
console.log(parool);
if (parool.length < 8) {
  console.log("Parool on liiga lühike!");
} else {
  console.log("Parool on piisavalt pikk!");
}
