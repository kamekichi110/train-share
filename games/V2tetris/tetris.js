const gameBoard = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const rows = 20;
const cols = 10;
const cellSize = 30;
const blockColors = ['#00FFFF', '#FFA500', '#800080', '#FFFF00', '#008000', '#FF0000', '#0000FF'];
const blocks = [
    [
        [1, 1, 1, 1], // I字型
    ],
    [
        [1, 1], // 四角型
        [1, 1],
    ],
    [
        [1, 1, 1], // T字型
        [0, 1, 0],
    ],
    [
        [1, 1, 1], // L字型
        [1, 0, 0],
    ],
    // 他のブロックも追加できます
];

let currentBlock;
let currentBlockColor;
let currentRow;
let currentCol;
let score = 0;
let blockFallSpeed = 1000;
let gameInterval;
let gameOver = false;

function createBoard() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = cell.style.height = cellSize + 'px';
            gameBoard.appendChild(cell);
        }
    }
}

function drawBlock() {
    for (let row = 0; row < currentBlock.length; row++) {
        for (let col = 0; col < currentBlock[row].length; col++) {
            if (currentBlock[row][col]) {
                const cell = document.getElementsByClassName('cell')[(currentRow + row) * cols + (currentCol + col)];
                cell.style.backgroundColor = currentBlockColor;
            }
        }
    }
}

function clearBlock() {
    for (let row = 0; row < currentBlock.length; row++) {
        for (let col = 0; col < currentBlock[row].length; col++) {
            if (currentBlock[row][col]) {
                const cell = document.getElementsByClassName('cell')[(currentRow + row) * cols + (currentCol + col)];
                cell.style.backgroundColor = '';
            }
        }
    }
}

function moveBlock(direction) {
    clearBlock();

    switch (direction) {
        case 'left':
            currentCol--;
            break;
        case 'right':
            currentCol++;
            break;
        case 'down':
            currentRow++;
            break;
    }

    drawBlock();
}

function rotateBlock() {
    const originalBlock = currentBlock;
    currentBlock = currentBlock[0].map((_, i) => currentBlock.map(row => row[i])).reverse();
    if (checkCollision()) {
        currentBlock = originalBlock;
    } else {
        clearBlock();
        drawBlock();
    }
}

function generateBlock() {
    const randomIndex = Math.floor(Math.random() * blocks.length);
    currentBlock = blocks[randomIndex];
    currentBlockColor = blockColors[randomIndex];
    currentRow = 0;
    currentCol = Math.floor(cols / 2) - Math.floor(currentBlock[0].length / 2);
    drawBlock();
}

function dropBlock() {
    if (!gameOver) {
        moveBlock('down');
        checkCollision();
        if (!gameOver) {
            setTimeout(dropBlock, blockFallSpeed);
        }
    }
}

function checkCollision() {
    for (let row = 0; row < currentBlock.length; row++) {
        for (let col = 0; col < currentBlock[row].length; col++) {
            if (currentBlock[row][col]) {
                const gameBoardCell = document.getElementsByClassName('cell')[(currentRow + row) * cols + (currentCol + col)];
                if (currentRow + row >= rows || currentCol + col < 0 || currentCol + col >= cols || gameBoardCell.style.backgroundColor !== '') {
                    if (currentRow === 0) {
                        endGame();
                    }
                    return true;
                }
            }
        }
    }
    return false;
}

function clearLines() {
    let linesCleared = 0;
    for (let row = rows - 1; row >= 0; row--) {
        const rowCells = Array.from({ length: cols }, (_, col) =>
            document.getElementsByClassName('cell')[row * cols + col]
        );
        if (rowCells.every(cell => cell.style.backgroundColor !== '')) {
            rowCells.forEach(cell => cell.style.backgroundColor = '');
            linesCleared++;
        }
    }
    if (linesCleared > 0) {
        score += linesCleared * 100;
        blockFallSpeed -= 20;
        updateScore();
    }
}

function checkGameOver() {
    const topRow = Array.from({ length: cols }, (_, col) =>
        document.getElementsByClassName('cell')[col]
    );
    if (topRow.some(cell => cell.style.backgroundColor !== '')) {
        endGame();
    }
}

function updateScore() {
    scoreElement.textContent = 'Score: ' + score;
}

function endGame() {
    gameOver = true;
    clearInterval(gameInterval);
    alert('Game Over! Your Score: ' + score);
}

function toggleGame() {
    if (!gameInterval) {
        gameInterval = setInterval(gameLoop, blockFallSpeed);
    } else {
        clearInterval(gameInterval);
        gameInterval = null;
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveBlock('left');
            break;
        case 'ArrowRight':
            moveBlock('right');
            break;
        case 'ArrowDown':
            moveBlock('down');
            break;
        case 'ArrowUp':
            rotateBlock();
            break;
        case ' ':
            toggleGame();
            break;
    }
});

document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            moveBlock('right');
        } else {
            moveBlock('left');
        }
    } else {
        if (deltaY > 0) {
            moveBlock('down');
        } else {
            rotateBlock();
        }
    }
});

function gameLoop() {
    moveBlock('down');
    if (!checkCollision()) {
        setTimeout(gameLoop, blockFallSpeed);
    }
}

function startGame() {
    createBoard();
    displayScore();
    generateBlock();
    gameInterval = setInterval(gameLoop, blockFallSpeed);
}

startGame();