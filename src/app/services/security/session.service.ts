import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  // isLogin
  public isLogin: boolean = false;

  private apiKey: string = "ca62284fa5b6f63c30b3aa0743ceeba7a3a0be7b6a286ae22d78528b4e72abfb";

  private token: string = "";

  constructor() { }

  setAuthenticationHeaders(headers: any) {
    if(this.apiKey) {
      headers['X-API-KEY'] = this.apiKey
    }
    if(this.token) {
      headers['X-API-KEY'] = this.token
    }
  }
}
