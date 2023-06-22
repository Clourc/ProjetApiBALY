import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges{
  @Input() isLoggedIn!: boolean;
  constructor(){}

  ngOnChanges(changes: SimpleChanges){
    if(changes['isLoggedIn']){
      if(changes['isLoggedIn'].firstChange === true) {
        console.log(changes)
        console.log('Change detected');
      } else {
        console.log(changes)
        console.log('Change detected');
        location.reload();
      }
    };
  }
}
