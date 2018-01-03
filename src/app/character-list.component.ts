import {Component} from '@angular/core';

@Component ({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  characters = [
    {name: 'bailie'},
    {name: 'Devin'},
    {name: 'Hello'}
  ];
}
