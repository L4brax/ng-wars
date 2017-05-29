import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getListe(character): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      return this.http.get('https://swapi.co/api/people/?search=' + character)
          .toPromise()
          .then((response) => {
              resolve(response.json()['results']);
          });
    });
  }

}
