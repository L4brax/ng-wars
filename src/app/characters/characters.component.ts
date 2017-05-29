import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public liste: Object[] = [];
  public character: String;

  constructor(private people: PeopleService) { }

  ngOnInit() {
  }

  searchCharacter(character) {
    console.log(character);
    this.people.getListe(character)
      .then((liste) => {
        this.liste = liste;
    });
    console.log(this.liste);
  }
}
