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
✅ refactor: board needs to be class variable
✅ display X won after series of moves:
X| |
-+-+-
X|O|
-+-+-
X| |O
✅ milestone 2000, game till X wins with vertical line

Future pomodoros:
❒ refactor board state fields to contain players (or null)
❒ after one move, current player changed (X -> Y)

REFLECTION:

Compared to the first time doing this task, I defenitely changed the approach, both technically and by coding style. I used Typescript with the Cookiecutter this time instead of going through a lot of setup pain but using my preffered language Kotlin. The first time a first sketched my architecture on a piece of paper. This time I just started small and tried to make the architecture emerge. And I really sticked two four pomodori for the tests+coding, stopping at a point that does not feel great yet.

I felt stressed by the task, setting the bar too high for myself after reading the task, and knowing I only have two hours. Also knew upfront that I had no idea how to run the game and keep all code covered with tests. Also didn't know upfront how to handle the randomization of the moves with TDD.

Main thing to work on for me would be to keep my stress level lower. Set the bar lower and stop (over)thinking the task and thinking about how to build something I didn't even get to yet in the time I spend.
