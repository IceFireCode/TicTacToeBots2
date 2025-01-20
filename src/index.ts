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
}
