  
// while/for
  
// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби
// зробити двома способами через while і for
// * це повинна бути функція(можливо і не одна)
  
  
  /**
   *
   * @param {number} userInputNumber
   * @returns {boolean|string}
   */

  function checkUserValue(userInputNumber) {
    if (
      userInputNumber >= 15 &&
      userInputNumber <= 35 &&
      userInputNumber % 6 === 0
    ) {
      return true;
    }
  }

const MAX_TRY = 3;
let i = 0;
while (i < MAX_TRY) {
  const userInputNumber = prompt("Enter number");
}
if (
  userInputNumber >= 15 &&
  userInputNumber <= 30 &&
  userInputNumber % 6 === 0
) {
  return true;
}
return false;

for (let i = 0; i < MAX_TRY; i++) {
  const userAnswer = prompt("Enter number");
  if (correctNumber(userAnswer)) {
    return console.log("congratulations, you entered the correct number");
  }
  console.log("try again");
}