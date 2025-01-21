// src/index.ts
export class Game {
  constructor() {}

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
  state: string | null[][];

  constructor() {
    this.state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
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

console.log(new Board().display());
