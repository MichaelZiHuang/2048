const Grid = require('../js/grid.js');
const Tile = require('../js/tile.js');

const GRID_SIZE = 4;

describe('Testing grid initialization', () => {
    // Create new grid of size 4
    // Restoring state will be tested later
    const testGrid = new Grid(GRID_SIZE);

    test('Test grid initialization', () => {
        expect(testGrid).toBeTruthy();
    });

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            expect(testGrid.cells[i][j]).toBeNull();
        }
    }
});

describe('', () => {
    const testGrid = new Grid(GRID_SIZE);
});
