import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.styl']
})
export class NavDrawerComponent {

  constructor() { }

  @Input() noWinner: boolean;
  @Input() winner;
  @Input() currentPlayer: number;

}
