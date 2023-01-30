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
  return false;
}

// while
const MAX_TRY = 3;
let i = 0;
while (i < MAX_TRY) {
  i++;
  const userInputNumber = prompt("Enter number");
  if (checkUserValue(userInputNumber) === true) {
    break;
  }
}

// for
for (let i = 0; i < MAX_TRY; i++) {
  const userInputNumber = prompt("Enter number");
  if (checkUserValue(userInputNumber) === true) {
    break;
  }
}
