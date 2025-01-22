// src/index.ts
export class Game {
  constructor() {}

  startNewGame() {
    console.log(this.displayBoardIsBeingCreated());
    const board = new Board();
    console.log(board.display());
    console.log(this.displayBoardIsCreated());
    console.log(this.displayStartPlayer());
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
    return ' | | \n------\n | | \n------\n | | ';
  }
}

export class Player {
  constructor(private displayName: string) {}

  display(): string {
    return this.displayName;
  }
}

const gameWithXWinningHorizontally = new Game();
gameWithXWinningHorizontally.startNewGame();
