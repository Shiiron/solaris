import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<any>('../assets/data.json')
      .toPromise()
      .then((res) => <Person[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
