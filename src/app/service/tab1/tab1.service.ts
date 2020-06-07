
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor(private http: HttpClient) { }

  async getPessoas() {

    let response = await this.http.get("../../../assets/pessoas.json").toPromise();
    console.log(response);
    return response;
  }
}
