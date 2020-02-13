export const answer = 669171001;

const targetColumnAndRowCount = 1001;

function buildSpiralGrid(columnAndRowCount) {
    if (columnAndRowCount < 5) {
        throw new Error('number of columns and rows in grid must be at least five');
    }
    if (columnAndRowCount % 2 !== 1) {
        throw new Error('number of columns and rows in grid must be odd');
    }

    const grid = [];
    for (let i = 0; i < columnAndRowCount; i += 1) grid.push([]);

    let currentPos = {
        col: columnAndRowCount / 2 - .5,
        dir: 'up',
        row: columnAndRowCount / 2 - .5,
    };
    let nextVal = 1;

    while (currentPos.col < columnAndRowCount && currentPos.row < columnAndRowCount) {
        grid[currentPos.row][currentPos.col] = nextVal;
        nextVal += 1;

        const desiredDir = currentPos.dir === 'right' ? 'down' :
            currentPos.dir === 'down' ? 'left' :
            currentPos.dir === 'left' ? 'up' :
            'right';
        const desiredPos = calculateMove(currentPos, desiredDir);

        // desired position already has a value, continue in current direction
        if (grid[desiredPos.row][desiredPos.col]) {
            const newPosSameDir = calculateMove(currentPos, currentPos.dir);
            currentPos.col = newPosSameDir.col;
            currentPos.row = newPosSameDir.row;
        // desired position is open, move in new direction
        } else {
            currentPos.col = desiredPos.col;
            currentPos.dir = desiredDir;
            currentPos.row = desiredPos.row;
        }
    }

    return grid;
}

function calculateGridDiagonalsSum(grid) {
    let sum = 0;
    for (let row = 0; row < grid.length; row += 1) {
        sum += grid[row][row] + grid[row][grid.length - row - 1];
    }

    // middle entry will have been double counted, so subtract it's value, which is always 1
    sum -= 1;

    return sum;
}

function calculateMove(currentPos, dir) {
    return {
        col: currentPos.col + (dir === 'right' ? 1 : dir === 'left' ? -1 : 0),
        row: currentPos.row + (dir === 'down' ? 1 : dir === 'up' ? -1 : 0),
    };
}

export function solve() {
    const grid = buildSpiralGrid(targetColumnAndRowCount);
    return calculateGridDiagonalsSum(grid);
}
