import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the RemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RemoteProvider Provider');
  }

  getContent(): Observable<any> {

  return this.http.get("http://quotes.rest/qod.json");
  }

}