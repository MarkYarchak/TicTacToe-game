import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.styl']
})
export class CellComponent {
  @Input() cellContent;
}
