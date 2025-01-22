# Pomodoro Technique - :notebook: Notes from the journey :tomato: by :tomato:

## :bookmark: Labels

- ✅ : done
- 🚧 : WIP
- ⛌ : ERROR
- ❒ : TODO

## 🍅 Pomodoro 1

✅ Create new board
| |
-+-+-
| |
-+-+-
| |
✅ Display new board
🚧 Display player: 'X' and 'O'

## 🍅 Pomodoro 2

✅ Display player: 'X' and 'O'
✅ try console, displaying game state
✅ Display player X starts
✅ Display board is being created
✅ Display board is created

## 🍅 Pomodoro 3

✅ refactor displaying board state as one string (with new lines)
✅ milestone 1000, game creation... game.start()
🚧 Play one move, in center field (X)
| |
-+-+-
|X|
-+-+-
| |

## 🍅 Pomodoro 4

✅ after one move by X in center field, display board
' | | \n------\n |X| \n------\n | | '
🚧 refactor: board needs to be class variable
❒ display X won after series of moves:
X| |
-+-+-
X|O|
-+-+-
X| |O

Future pomodoros:
❒ refactor board state fields to contain players (or null)
❒ after one move, current player changed (X -> Y)
