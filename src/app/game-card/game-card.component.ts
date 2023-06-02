import { Component } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  image: string = '/assets/placeholder/JackBlackBowser.png';
  winIcon: string = '/assets/placeholder/windows-icon.png';
  browserIcon: string = '/assets/placeholder/browser-game-icon.png';
}
