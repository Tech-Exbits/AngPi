import { Injectable } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private spinner: NgxSpinnerService, private translate: TranslateService) { }

  /* Modals Instances Array */
  ModalInstances = [];

  loader(action: string = "pageload", spinnerTemplate: Spinner){
    if(action == "pageload"){
      /** spinner starts */
      this.spinner.show('master', spinnerTemplate);
      setTimeout(() => {
        /** spinner ends after 4 seconds */
        this.spinner.hide('master');
      }, 4000);
    }else if(action == "show"){
      this.spinner.show('master', spinnerTemplate);
    }else{
      this.spinner.hide('master');
    }
  }

  isTypeDate(item: any) {
    return (item) instanceof Date;
  }

  isTypeBoolean(item: any) {
    return typeof item === 'boolean';
  }

  isTypeString(item: any) {
    return typeof item === 'string';
  }
  
  isTypeObject(item: any) {
    return typeof item === 'object';
  }

  getDomainfromURL(requestURL: string): string{
    var domain: string = "";
    var baseURL = window.location.href.replace(requestURL, '');
    if(!baseURL.includes('#')){
      baseURL = baseURL+'#';
    }
    domain = baseURL.replace('#','').replace('job-board/', ""); 
    if(baseURL.includes("localhost")){
      domain = "s33";
    }else{
      domain = domain.replace('http://', '').replace('https://', '');
      domain = domain.replace('/', '').replace('.og.net', '');
    }
    return domain;
  }

  getBaseURLfromURL(requestURL: string): string{
    var baseURL = window.location.href.replace(requestURL, '');
    if(!baseURL.includes('#')){
      baseURL = baseURL+'#';
    }
    return baseURL;
  }

  getNameFromLookupId(data: any, value: any){
    for(var obj of data){
      if(obj.id == value){
        return obj.name;
      }
    }
    return null;
  }

  convertToDate(dateString: string){
    if(dateString){
      return new Date(dateString);
    }else{
      return new Date();
    }
  }

  convertStringtoURL(str: string){
    if(!str.includes('https://')){
      str = "https://"+ str ;
      return str;
    }else{
      return str;
    }
  }

  convertURLtoString(url: string){
    if(url.includes('https://')){
      url = url.replace('https://', '');
      return url;
    }else{
      return url;
    }
  }

  convertSEOStringtoString(seoStr: string){
    return seoStr.replace(/_/g,' ');
  }

  getTranslation(code: string, params?: any): Observable<string>{
    var result = new BehaviorSubject<string>("");
    if(params){
      this.translate.get(code, params).subscribe((res: string) => {
        result.next(res);
      });
    }else{
      this.translate.get(code).subscribe((res: string) => {
        result.next(res);
      });
    }
    return result.asObservable();
  }

  setTranslationLanguage(langCode: string){
    this.translate.use(langCode);
  }

  getObjectByPropertyValue(data: any, propertykeyword: any, value: any): any{
    propertykeyword = 'id';
    var result = data.filter((obj: any) => {
      return obj[propertykeyword] === value
    })
    return result;
  }

  base64ToBlob(b64Data: string, contentType='', sliceSize=512): any {
    b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
  }

  base64ToArrayBuffer(b64Data: string): any {
    var binary_string = atob(b64Data);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  validateEmail(email: string){
    var expr=/^(([^<>()\[\]\.\,;:\s@\"]+(\.[^<>()\[\]\.\,;:\s@\"]+)*)|(\".\+\"))@(([^<>()\.\,;\s@\"]+\.{1,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    return expr.test(email);
  }

/*   convertToArrayOfObjects(data: any) {
    var keys = data.shift(),
        i = 0, k = 0,
        obj: any = null,
        output = [];

    for (i = 0; i < data.length; i++) {
        obj = {};

        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }

        output.push(obj);
    }
    return output;
  } */

  convertToArrayOfObjects(data: any): any {
    var collection = data.slice(); // make a copy
    var keys = collection.shift();
    
    collection = collection.map(function (e: any) {
        var obj: any = {};
        
        keys.forEach(function (key: any, i: any) {
            obj[key] = e[i];
        });
        
        return obj;
    });
    return collection;
  }

  convertToObject(data: any): any {
    var mainObj: any = {};
    data.forEach(function (item: any) {
      if(item.length > 2) {
        var innerArr = [];
        for (var i = 1; i < item.length; i++) {
          innerArr.push(item[i]);
        }
        mainObj[item[0]] = innerArr;
      } else {
        mainObj[item[0]] = item[1]
      }
    })
    return mainObj
  }

  getRandomColor(): any {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  numberWithCommas(str: string) {
    return str ? str.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  }

  closeAllModals() {
    this.ModalInstances.forEach((modal: any) => modal.hide());
    this.ModalInstances.length = 0;
  }

}
