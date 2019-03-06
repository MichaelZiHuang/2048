const $ = require('jquery');
const GameManager = require('../js/game_manager');
const HTMLActuator = require('../js/html_actuator');
const KeyboardInputManager = require('../js/keyboard_input_manager');
const LocalStorageManager = require('../js/local_storage_manager');

// Initialize body with necessary elements
$(document.body).append(
    $('<div>')
        .addClass('game-container')
        .append(
            $('<button>').addClass('retry-button'),
            $('<button>').addClass('restart-button'),
            $('<button>').addClass('keep-playing-button')
        )
);

const testGame = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

//test('Game initialization', () => {
test('Ensure 2 Tiles during startup', () => {
	expect(testGame.startTiles).toBe(2);
})

test('Fresh Process, Ensure Fresh State', () => {
	expect(testGame.score).toBe(0);
	expect(testGame.over).toBe(false);
	expect(testGame.won).toBe(false);
	expect(testGame.keepPlaying).toBe(false);
	expect(testGame.startTiles).toBe(2);
})

test('Default Grid Size: 4', () => {
	expect(testGame.size).toBe(4);
})

test('Test Terminated Game Function', () => {
	testGame.over = true;
	expect(testGame.isGameTerminated()).toBe(true);
	testGame.over = false;
	testGame.won = false;
	expect(testGame.isGameTerminated()).toBe(false);
})


//});
