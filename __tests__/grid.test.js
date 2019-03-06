const Grid = require('../js/grid.js');
const Tile = require('../js/tile.js');

const GRID_SIZE = 4;

// Valid positions
const testPosition1 = { x: 1, y: 1 };

// Invalid positions (negative position, out of bounds position)
const testPosition2 = { x: -1, y: 1 };
const testPosition3 = { x: 5, y: 2 };

const testTile1 = new Tile(testPosition1);
const testTile2 = new Tile(testPosition2);
const testTile3 = new Tile(testPosition3);

// Create new grid of size 4
const testGrid = new Grid(GRID_SIZE);

describe('Testing grid initialization', () => {
    test('Test grid initialization', () => {
        expect(testGrid).toBeTruthy();
    });

    test('Ensure new grid is blank', () => {
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                expect(testGrid.cells[i][j]).toBeNull();
            }
        }
    });
});

describe('Testing adding and removing tiles', () => {
    test('Test adding tiles', () => {
        // Add valid tile
        testGrid.insertTile(testTile1);
        expect(testGrid.availableCells().length).toBe(15);

        // Add same tile again, ensure it isn't added to grid
        testGrid.insertTile(testTile1);
        expect(testGrid.availableCells().length).toBe(15);
    });

    test('Test removing tiles', () => {
        // Remove valid tile
        testGrid.removeTile(testTile1);
        expect(testGrid.availableCells().length).toBe(16);
    });
});
