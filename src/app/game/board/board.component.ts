import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.styl'],
})
export class BoardComponent {

  constructor() { }
  @Output() makePlayerMove = new EventEmitter();
  @Input() currentPlayer;

  @Input() boardCells: Array<string | number>;

  makeAMove(index) {
    if (this.boardCells[index] === '') {
      this.makePlayerMove.emit(index);
    }
  }

}
