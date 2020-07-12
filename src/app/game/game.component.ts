import { Component } from '@angular/core';

type Player = 0 | 1;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.styl']
})
export class GameComponent {

  boardCells: Array<number | string> = ['', '', '', '', '', '', '', '' , ''];

  currentPlayer: Player = 1;

  get winningCombinations() {
    return [
      // horizontal lines
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal lines
      [0, 4, 8],
      [6, 4, 2],
    ];
  }

  get noWinner() {
    return this.winner === undefined && this.boardCells.every(cell => cell !== '');
  }

  get winner(): Player {
    const canWin: Player[] = [0, 1];
    return canWin.find((player) => {
      return this.winningCombinations.find((combination) => {
        return combination.every(num => this.boardCells[num] === player);
      });
    });
  }

  makePlayerMove(index): void {
    const w = this.winner;
    if (w !== 1 && w !== 0) {
      this.boardCells[index] = this.currentPlayer;
      this.currentPlayer = !this.currentPlayer ? 1 : 0;
    }
  }

  startNewGame() {
    this.clearBoard();
    this.setDefaultPlayer();
  }

  setDefaultPlayer() {
    this.currentPlayer = 1;
  }

  clearBoard() {
    this.boardCells = this.boardCells.map(() => '');
  }
}
