import { Injectable } from '@angular/core';
import { DomainAccessService } from '../security/domain-access.service';
import { LoggingService } from '../crucial/logging.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../security/session.service';

export class DataTablesResponse {
  data: any[] = [];
  draw: number = 0;
  recordsFiltered: number = 0;
  recordsTotal: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  ApiBaseURL: string = environment.rooturl;

  constructor(private http: HttpClient, private Logger: LoggingService, private domainAccessService: DomainAccessService, private sessionService: SessionService) { }

  sendGETRequest(url:string, Headers?: any, Params?: any) : void | any {
    url = this.ApiBaseURL+url;
    if(this.domainAccessService.isRequestAllowed()){
      if(Headers != null || Params != null){
        var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        if(Headers != null){
          Object.entries(Headers).forEach(([key, value]) => {
            headers[key] = value;
          });
        }
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.get(url, {'headers':headers, 'params':Params});
      }else{
        var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.get(url, {'headers':headers});
      }
    }
  }

  sendPOSTRequest(url:string, Body:any, Headers?: any, Params?: any, isMultiPartRequest?:boolean) : void | any {
    url = this.ApiBaseURL+url;
    if(this.domainAccessService.isRequestAllowed()){
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
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.post<any>(url, body, {'headers':headers, 'params':Params});
      }else{
        if(isMultiPartRequest != null){
          var headers: any = {};
          headers = {'Access-Control-Allow-Origin': '*'};
          body = Body;
        }else{
          headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
          body = JSON.stringify(Body);
        }
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.post<any>(url, body, {'headers':headers});
      }
      
    }

  }

  sendDataTableGETRequest(url: string, Params?:any) : void | any{
    url = this.ApiBaseURL+url;
    if(this.domainAccessService.isRequestAllowed()){
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
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.get<DataTablesResponse>(url, {'headers':headers, 'params':params});
      }
    }
  }

  sendDataTablePOSTRequest(url: string, Params?:any) : void | any {
    url = this.ApiBaseURL+url;
    if(this.domainAccessService.isRequestAllowed()){
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
        this.sessionService.setAuthenticationHeaders(headers);
        // this.Logger.Log("Sending Request To " + url);
        return this.http.post<DataTablesResponse>(url, null, {'headers':headers, 'params':params});
      }
    }
  }

}
