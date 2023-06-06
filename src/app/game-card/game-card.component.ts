import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() image: string = '/assets/placeholder/JackBlackBowser.png';
  @Input() gameName: string = 'Nom du jeu';
  @Input() gameGenre: string = 'RPG';
  @Input() gamePlatform: string = '';
  @Input() gameID: string = ''
  @Input() gameShortDescription: string =  '';


  winIcon: string = '/assets/placeholder/windows-icon.png';
  browserIcon: string = '/assets/placeholder/browser-game-icon.png';
}
