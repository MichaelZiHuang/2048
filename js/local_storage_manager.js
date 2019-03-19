/*Fake Storage is created to simulate local storage in a browser
 * when it is not supported by a browser by creating a variable to
 * store the information "_data" and functions that access the game data.
 */
window.fakeStorage = {
  _data: {},   //holds game data as string

  setItem: function (id, val) {
    return this._data[id] = String(val);  //stores game data and gives id
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  }, //returns game data by accessing with id

  removeItem: function (id) {
    return delete this._data[id];  //deletes specific game data
  },

  clear: function () {   //deletes all game data
    return this._data = {};
  }
};


/*Creates id's for game state and best score so the can be stored and accessed
 * Checks if local storage is supported or not
 */
function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}


/*Creates test id and tests is it is stored and can be accessed in the
 * browsers local storage then returns true or false.
 */
LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true; //Supported
  } catch (error) {
    return false; //Not supported
  }
};


// Best score getters/setters. Use id and local storage functions.
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};


// Game state getters/setters and clearing. Use id and local storage funcions
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};   //Uses JSON.parse because gamestate is stored as a string

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};

module.exports = LocalStorageManager;
