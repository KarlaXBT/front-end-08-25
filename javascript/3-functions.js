const number1 = -1;
const number2 = 2;

posNegZero(number1);
posNegZero(number2);
posNegZero(0);
posNegZero(7);
posNegZero(-3);

function posNegZero(number) {
  if (number < 0) {
    console.log("Number on negatiivne");
  } else if (number > 0) {
    console.log("Number on positiivne");
  } else {
    console.log("Number on 0");
  }
}
