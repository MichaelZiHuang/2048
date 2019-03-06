const LocalStorageManager = require('../js/local_storage_manager');

var localStorageMock = (function() {
    var store = {};
    return {
        getItem: function(key) {
            return store[key];
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        },
        removeItem: function(key) {
            delete store[key];
        }
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const testLSM = new LocalStorageManager();
//this.storage = window.fakeStorage;
const score = 200;
const negScore = -200;
const overScore = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
//this.bestScoreKey     = "bestScore";
//this.gameStateKey     = "gameState";

describe('Testing local_storage_manager.js', () => {
    test('Ensure LSM is supported', () => {
        expect(testLSM.localStorageSupported()).toBe(true);
    });

    test('Ensure bestScore is stored and can be returned', () => {
        testLSM.setBestScore(score);
        expect(testLSM.getBestScore()).toBe(score.toString());
    });

    test('Ensure a negative score can be stored and returned', () => {
        testLSM.setBestScore(negScore);
        expect(testLSM.getBestScore()).toBe(negScore.toString());
    });

    test('Ensure a very large score can be stored and returned', () => {
        testLSM.setBestScore(overScore);
        expect(testLSM.getBestScore()).toBe(overScore.toString());
    });

    test('Ensure Game State is stored and can be returned', () => {
        testLSM.setGameState('GameState');
        expect(testLSM.getGameState()).toBe('GameState');
    });

    test('Ensure Game State clear sets game state to Null in storage', () => {
        testLSM.setGameState('GameState');
        testLSM.clearGameState();
        expect(testLSM.getGameState()).toBeNull();
    });
});
