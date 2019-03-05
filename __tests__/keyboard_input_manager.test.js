const $ = require('jquery');
const KeyboardInputManager = require('../js/keyboard_input_manager');

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

// Create instance of keyboard manager object
const testInputManager = new KeyboardInputManager();

// Test event handling
describe('Testing events', () => {
    // Initialize test values
    let test1a, test1b, test2;

    // Test event registering
    test('Event register works', () => {
        testInputManager.on('test1', val => {
            test1a = val;
        });

        testInputManager.on('test1', val => {
            test1b = val;
        });

        testInputManager.on('test2', val => {
            test2 = val;
        });

        expect(testInputManager.events['test1'].length).toBe(2);
        expect(testInputManager.events['test2'].length).toBe(1);
    });

    // Test event emitter
    test('Event emitter works', () => {
        testInputManager.emit('test1', 1);
        expect(test1a).toBe(1);
        expect(test1b).toBe(1);

        testInputManager.emit('test2', 2);
        expect(test2).toBe(2);
    });
});
