import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: CookieService) { }

  /* Cookie Related Functions Start */

  getDataFromCookie(key: any){
    var value: any = this.cookieService.get(key);
    if(value != null && value != ''){
      return atob(value);
    }
    else{
      return null;
    }
  }

  setDataToCookie(key: any, value: any){
    this.cookieService.set(key, btoa(value), {sameSite: 'Strict', secure: true});
  }

  removeDataFromCookie(key: any){
    this.cookieService.delete(key);
  }

  /* Cookie Related Functions End */


  /* Local Storage Related Functions Start */

  getDataFromLocalStorage(key: any){
    var value: any=localStorage.getItem(key);
    if(value != null && value != ''){
      return atob(value);
    }
    else{
      return null;
    }
  }

  setDataToLocalStorage(key: any, value: any){
    localStorage.setItem(key, btoa(value));
  }

  removeDataFromLocalStorage(key: any){
    localStorage.removeItem(key);
  }

  /* Local Storage Related Functions End */

}

