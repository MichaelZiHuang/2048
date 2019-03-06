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

const testGame = new GameManager(
    4,
    KeyboardInputManager,
    HTMLActuator,
    LocalStorageManager
);

test('game initialization', () => {});
