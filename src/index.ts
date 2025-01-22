// src/index.ts
export class Game {
  board: Board = new Board();
  constructor() {}

  startNewGame() {
    console.log(this.displayBoardIsBeingCreated());
    console.log(this.board.display());
    console.log(this.displayBoardIsCreated());
    console.log(this.displayStartPlayer());

    this.board.makeMove(playerOne, [0, 0]);
    console.log(this.board.display());

    this.board.makeMove(playerTwo, [1, 1]);
    console.log(this.board.display());
    this.board.makeMove(playerOne, [1, 0]);
    console.log(this.board.display());
    this.board.makeMove(playerTwo, [2, 2]);
    console.log(this.board.display());
    this.board.makeMove(playerOne, [2, 0]);
    console.log(this.board.display());
  }

  displayStartPlayer(): string {
    return 'The game will start with player X';
  }

  displayBoardIsBeingCreated(): string {
    return 'Game Board Creation...';
  }

  displayBoardIsCreated(): string {
    return 'Board Created.';
  }
}

export class Board {
  state: (Player | null)[][];

  constructor() {
    this.state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  makeMove(player: Player, field: [number, number]) {
    const rowIndex = field[0];
    const columnIndex = field[1];
    this.state[rowIndex][columnIndex] = player;
  }

  display(): string {
    let displayedBoard: string[] = [];
    this.state.forEach((row, index) => {
      if (index > 0) {
        displayedBoard.push('\n------\n');
      }
      row.forEach((field, index) => {
        if (field === null) {
          displayedBoard.push(' ');
        }
        if (field != null) {
          displayedBoard.push(field?.display());
        }
        if (index < row.length - 1) {
          displayedBoard.push('|');
        }
      });
    });
    return displayedBoard.join('');
  }
}

export class Player {
  constructor(private displayName: string) {}

  display(): string {
    return this.displayName;
  }
}

const playerOne = new Player('X');
const playerTwo = new Player('Y');

const gameWithXWinningVertically = new Game();
gameWithXWinningVertically.startNewGame();
