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
      it('And we can display the inital state to the user, in a fancy way', () => {
        const newBoard = new Board();
        const displayedBoard = [' | | ', '------', ' | | ', '------', ' | | '];
        expect(newBoard.display()).toStrictEqual(displayedBoard);
      });
    });

    describe('', () => {
      it('', () => {
        expect().toBe();
      });
    });
  });
});
