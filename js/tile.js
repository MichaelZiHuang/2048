function Tile(position, value) {
  this.x                = position.x; // Tracks the position on the grid
  this.y                = position.y;
  this.value            = value || 2; // Tracks the value, it should default to 2 or the merged value

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y }; // Save position in the grid
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x; // Update during move or merge
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: { // Create html "seriailized" argument.
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

module.exports = Tile;// Export for testing
