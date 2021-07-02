// TODO: write code here
// setInterval(console.log('hi'), 1000);
const boardSize = 4;
export const allCells = [];
export default function createCellsArray() {
  for (let i = 0; i < boardSize ** 2; i += 1) {
    allCells.push(i);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#game-container');
  document.querySelector('#game-container').innerHTML = `
  <div class="board-container">
    <div data-id="board" class="board"></div>
  </div>`;

  const boardElement = container.querySelector('[data-id=board]');
  for (let i = 0; i < boardSize ** 2; i += 1) {
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    boardElement.appendChild(cellEl);
  }
  createCellsArray();
  const newPosition = allCells[Math.floor(Math.random() * allCells.length)];
  const cell = boardElement.children[newPosition];
  cell.classList.add('goblin');
});

setInterval(() => {
  const goblin = Array.from(document.querySelector('[data-id=board]').querySelectorAll('.cell')).findIndex((item) => item.classList.contains('goblin'));
  let newPosition = allCells[Math.floor(Math.random() * allCells.length)];
  do {
    newPosition = allCells[Math.floor(Math.random() * allCells.length)];
  }
  while (goblin === newPosition);
  const cell = document.querySelector('[data-id=board]').children[newPosition];
  if (document.querySelector('.goblin')) {
    document.querySelector('.goblin').classList.remove('goblin');
  }
  cell.classList.add('goblin');
}, 2000);
