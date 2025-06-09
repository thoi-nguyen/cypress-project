declare namespace Cypress {
  interface Chainable {
    generateRandomNumber(min: number, max: number): number;
  }
}

Cypress.Commands.add("generateRandomNumber", (min: number, max: number) => {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return getRandomInt(min, max);
});
