import { Injectable } from '@angular/core';
import { DomainAccessService } from '../security/domain-access.service';
import { LoggingService } from '../crucial/logging.service';
import { HttpClient } from '@angular/common/http';

export class DataTablesResponse {
  data: any[] = [];
  draw: number = 0;
  recordsFiltered: number = 0;
  recordsTotal: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingApiCallService {

  ApiBaseURL: string = "";

  constructor(private http: HttpClient, private Logger: LoggingService, private domainAccessService: DomainAccessService) { }

  sendGETRequest(url:string, apiModule: string, Headers?: any, Params?: any) : void | any{
    
    if(this.domainAccessService.isRequestAllowed()){
      var generatedURL = this.generateAPIModuleURL(url, apiModule);
      if(Headers != null || Params != null){
        var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        
        if(Headers != null){
          Object.entries(Headers).forEach(([key, value]) => {
            headers[key] = value;
          });
        }
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.get(generatedURL, {'headers':headers, 'params':Params});
      }else{
        var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.get(generatedURL, {'headers':headers});
      }
    }
    
  }

  sendPOSTRequest(url:string, apiModule: string, Body:any, Headers?: any, Params?: any, isMultiPartRequest?:boolean) : void | any {

    if(this.domainAccessService.isRequestAllowed()){
      var generatedURL = this.generateAPIModuleURL(url, apiModule);
      var body: any;

      if(Headers != null || Params != null){
        if(isMultiPartRequest != null){
          var headers: any = {};
          headers = {'Access-Control-Allow-Origin': '*'};
          body = Body;
        }else{
          headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
          body = JSON.stringify(Body);
        }
        
        
        if(Headers != null){
          Object.entries(Headers).forEach(([key, value]) => {
            headers[key] = value;
          });
        }
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.post<any>(generatedURL, body, {'headers':headers, 'params':Params});
      }else{
        if(isMultiPartRequest != null){
          var headers: any = {};
          headers = {'Access-Control-Allow-Origin': '*'};
          body = Body;
        }else{
          headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
          body = JSON.stringify(Body);
        }
        
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.post<any>(generatedURL, body, {'headers':headers});
      }
      
    }

  }

  sendDataTableGETRequest(url: string, apiModule:string, Params?:any) : void | any{
    
    if(this.domainAccessService.isRequestAllowed()){
      var generatedURL = this.generateAPIModuleURL(url, apiModule);
      if(Params != null){
        var headers:any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        var params:any = {};
        Object.entries(Params).forEach(([key, value]) => {
          params[key] = value;
        });
        var colIndex = Number(Params.order[0].column);
        var sortOrder = String(Params.order[0].dir);
        params['search'] = String(Params.search.value);
        params['start'] = String(Params.start);
        params['length'] = String(Params.length);
        params['colIndex'] = String(colIndex);
        params['sortOrder'] = sortOrder;
        params['sortableColumnName'] = String(Params.columns[colIndex].data);
        
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.get<DataTablesResponse>(generatedURL, {'headers':headers, 'params':params});
      }
    }
  }

  sendDataTablePOSTRequest(url: string, apiModule:string, Params?:any) : void | any {

    if(this.domainAccessService.isRequestAllowed()){
      var generatedURL = this.generateAPIModuleURL(url, apiModule);
      if(Params != null){
        var params: any = {};
        Object.entries(Params).forEach(([key, value]) => {
          params[key] = value;
        });
        var colIndex = Number(Params.order[0].column);
        var sortOrder = String(Params.order[0].dir);
        params['search'] = String(Params.search.value);
        params['start'] = String(Params.start);
        params['length'] = String(Params.length);
        params['colIndex'] = String(colIndex);
        params['sortOrder'] = sortOrder;
        params['sortableColumnName'] = String(Params.columns[colIndex].data);
        var headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        
        this.Logger.Log("Sending Request To " + generatedURL);
        return this.http.post<DataTablesResponse>(generatedURL, null, {'headers':headers, 'params':params});
      }
      
    }

  }

  generateAPIModuleURL(url: string, apiModule: string){
    if(this.ApiBaseURL.includes('<<domain>>')){
      this.ApiBaseURL = this.ApiBaseURL.replace('<<domain>>', this.domainAccessService.currentDomain);
    }
    var URL: any = `${this.ApiBaseURL}`;
    return URL;
  }

}
