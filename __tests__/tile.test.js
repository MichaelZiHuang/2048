const Tile = require('../js/tile');

const testPosition1 = { x: 1, y: 1 };
const testPosition2 = { x: 2, y: 1 };
const testPosition3 = { x: 2, y: 2 };

const testTile = new Tile(testPosition1);

test('Ensure initial tile value is 2', () => {
    expect(testTile.value).toBe(2);
});

test('Ensure position is saved', () => {
    testTile.savePosition();
    expect(testTile.previousPosition.x).toBe(testPosition1.x);
    expect(testTile.previousPosition.y).toBe(testPosition1.y);
});

test('Ensure tile is updated', () => {
    testTile.updatePosition(testPosition2);
    expect(testTile.x).toBe(testPosition2.x);
    expect(testTile.y).toBe(testPosition2.y);
});

test('Ensure tile is serialized correctly', () => {
    const serialized = testTile.serialize();
    expect(testTile.x).toBe(serialized.position.x);
    expect(testTile.y).toBe(serialized.position.y);
    expect(testTile.value).toBe(serialized.value);
});
