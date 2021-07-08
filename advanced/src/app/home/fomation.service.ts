import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FomationService {

  constructor(private http: HttpClient) { }

  addNewFormation(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.post('http://localhost:8080/formations/add', body, httpOptions);
  }
}
