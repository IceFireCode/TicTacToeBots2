// tests/index.test.ts
import { Board } from '../src/';

describe('TicTacToToeBots ', () => {
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
    describe('We can create the first player (X)', () => {
      it('Displaying the first player will show the X ', () => {
        expect(new Player('X').display()).toBe('X');
      });
    });
  });
});
