const eesNimi = "Tõnu";
const email = "Tõnn@gmail.com";
const telefoniNumber = "+3725636857";

function registreerumine() {
  if (eesNimi.length < 2) {
    console.log("Eesnimi on liiga lühike");
    return;
  }

  if (email.includes("@") === false) {
    console.log("Email peab sisaldama @ märki");
    return;
  }

  if (telefoniNumber.startsWith("+372") === false) {
    console.log("Telefoninumber peab algama suunakoodiga");
    return;
  }

  console.log("Registreerutud");
}

registreerumine();

const a = "aadu";
const b = "birgit";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
