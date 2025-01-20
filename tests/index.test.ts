// tests/index.test.ts
import { Board } from '../src/';

describe('TicTacoToeBots ', () => {
  describe('Starting a new Game', () => {
    describe('We can create a new Board', () => {
      it('And its state will be nine empty fields (null)', () => {
        const newBoard = new Board();
        const state = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(newBoard.state).toStrictEqual(state);
      });
    });
  });
});
