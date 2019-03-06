//Tests for html_actuator
//Covers game scoring and win state

const $ = require('jquery');
const HTMLActuator = require('../js/html_actuator');

//Set up HTML for testing environment
$(document.body).append(
  $('<div>')
    .addClass('score-container')
    .addClass('best-container')
);

//Instantiate HTMLActuator before each test
beforeEach(() => {
  HTMLActuator();
});

//Testing scoring
test('Ensure initial score value is 0', () => {
  expect(score).toBe(0);
});

test('Test that score updates correctly with expected input', () => {
	expect(HTMLActuator.prototype.updateScore(10)).toBe(10);
});

test('Test that score updates correctly with negative input', () => {
	expect(HTMLActuator.prototype.updateScore(-10)).toBe(-10);
});

test('Test that score updates correctly with large input', () => {
	expect(HTMLActuator.prototype.updateScore(1000000000000)).toBe(1000000000000);
});

test('Test that program does not break on invalid input', () => {
	expect(HTMLActuator.prototype.updateScore("asdfghjk")).toBe("asdfghjk");
});


//Testing win state
test('Test that win state sets correctly with winning input', () => {
	expect(HTMLActuator.prototype.message("game-won")).toMatch("You win!");
});

test('Test that win state sets correctly with truthy input', () => {
	expect(HTMLActuator.prototype.message(true)).toMatch("You win!");
});

test('Test that win state sets correctly with falsey input', () => {
	expect(HTMLActuator.prototype.message(false)).toMatch("Game over!");
});
