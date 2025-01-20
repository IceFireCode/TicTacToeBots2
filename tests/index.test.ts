// tests/index.test.ts
import { Board, Game, Player } from '../src/';

describe('TicTacToToeBots ', () => {
  describe('Starting a new Game', () => {
    it('We can display that the first player (X) will make the first move', () => {
      const startingPlayerText = 'The game will start with player X';
      expect(new Game().displayStartPlayer()).toBe(startingPlayerText);
    });
    it('We can display that the board is being created', () => {
      const boardBeingCreatedText = 'Game Board Creation...';
      expect(new Game().displayBoardIsBeingCreated()).toBe(
        boardBeingCreatedText
      );
    });
    it('We can display that the board is created', () => {
      const boardIsCreatedText = 'Board Created.';
      expect(new Game().displayBoardIsCreated()).toBe(boardIsCreatedText);
    });
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
      it('Displaying the first player will show the X', () => {
        expect(new Player('X').display()).toBe('X');
      });
    });
    describe('We can create the second player (Y)', () => {
      it('Displaying the first player will show the Y', () => {
        expect(new Player('Y').display()).toBe('Y');
      });
    });
  });
});
