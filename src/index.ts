// src/index.ts
export class Board {
  state: string | null[][];

  constructor() {
    this.state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  display(): string[] {
    return [' | | ', '------', ' | | ', '------', ' | | '];
  }
}

export class Player {
  constructor(private displayName: string) {}

  display(): string {
    return this.displayName;
  }
}
