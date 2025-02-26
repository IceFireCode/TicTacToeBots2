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
        const newBoard = new Board(null);
        const state = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(newBoard.state).toStrictEqual(state);
      });
      it('And we can display the inital state to the user, in a fancy way', () => {
        const newBoard = new Board(null);
        const displayedBoard = ' | | \n------\n | | \n------\n | | ';
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
  describe('When the game has started, the players can make moves', () => {
    it('After the first move by player one in the center field [1, 1], the board is updated', () => {
      const board = new Board(null);
      const playerOne = new Player('X');
      const state = [
        [null, null, null],
        [null, playerOne, null],
        [null, null, null],
      ];
      board.makeMove(playerOne, [1, 1]);
      expect(board.state).toStrictEqual(state);
    });
    it('After the first move by player one in the center field [1, 1], we can display the board', () => {
      const board = new Board(null);
      const playerOne = new Player('X');
      const displayedBoard = ' | | \n------\n |X| \n------\n | | ';
      board.makeMove(playerOne, [1, 1]);
      expect(board.display()).toStrictEqual(displayedBoard);
    });
  });
  describe('After each move, one of the players can be the winner with three Xs in a line', () => {
    it('Player X wins with a vertical line in the first column, after three moves', () => {
      const playerOne = new Player('X');
      const playerTwo = new Player('Y');
      const initialBoardState = [
        [playerOne, null, null],
        [playerOne, playerTwo, null],
        [playerOne, null, playerTwo],
      ];
      const board = new Board(initialBoardState);
      expect(board.getWinner()).toStrictEqual(playerOne);
    });
  });
});
