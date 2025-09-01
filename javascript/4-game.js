const userGameOver = false;
const userScore = 2000;
const userLevelCompleted = 5;
const userBonus = 500;

calculateScore(userGameOver, userScore, userLevelCompleted, userBonus);
calculateScore(true, 600, 4, 1000);
calculateScore(true, 1000, 3, 700);
calculateScore(false, 1, 2, 3);

function calculateScore(gameOver, score, levelCompleted, bonus) {
  if (gameOver) {
    let finalScore = score + levelCompleted * bonus;
    console.log(finalScore);
  } else {
    console.log("Mäng pole veel läbi, skoori ei tea");
  }
}
