import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getRemoteData(): Observable<any> {

  return this.http.get("https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=5b1a1cc4b7de439aae56d145e609c938");

  };

getNG(): Observable<any> {

  return this.http.get("https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=5b1a1cc4b7de439aae56d145e609c938");

};
getBBC(): Observable<any> {

  return this.http.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=5b1a1cc4b7de439aae56d145e609c938");

};

}




