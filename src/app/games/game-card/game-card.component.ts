import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() game: any;

  winIcon: string = '/assets/pictures/windows-icon.png';
  browserIcon: string = '/assets/pictures/browser-game-icon.png';

}
