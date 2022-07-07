import { Injectable } from '@angular/core';
import { DomainAccessService } from '../security/domain-access.service';
import { LoggingApiCallService } from '../v1-services/logging-api-call.service';

export enum LogLevel {
  All = 'ALL',
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARNING',
  Error = 'ERROR',
  Fatal = 'FATAL',
  Off = 'OFF'
}

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  level: LogLevel = LogLevel.All;
  logWithDate: boolean = false;

  constructor(
    private dataService: LoggingApiCallService,
    private domainAccessService: DomainAccessService) {
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.generateAndSendLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
      this.generateAndSendLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
      this.generateAndSendLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
      this.generateAndSendLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
      this.generateAndSendLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
      this.generateAndSendLog(msg, LogLevel.All, optionalParams);
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
        ret = true;
    }
    return ret;
  }

  private generateAndSendLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
        let value: string = "";
        
        // Build log string
        if (this.logWithDate) {
            value = new Date() + " - ";
        }
        
        //value += "Type: " + LogLevel[this.level];
        //value += " - Message: " + msg;
        value += msg;
        value += this.formatParams(params);
        /* if (params.length) {
            value += " - Info: " + this.formatParams(params);
        } */
        
        this.writeLogToServer(value, level);
    }
  }

  private formatParams(params: any[]): string {
    let ret: string = params.join(",");
    
    // Is there at least one object in the array?
    if (params.some(p => typeof p == "object")) {
        ret = "";
        
        // Build comma-delimited string
        for (let item of params) {
          if(params.length == 1){
            ret += JSON.stringify(item);
          }else{
            ret += JSON.stringify(item) + ",";
          }
        }
    }
    return ret;
  }

  private writeLogToServer(message: string, loglevel: any){
    const url = `/logs`;
    var params = {'message':message, 'log':loglevel};
      this.dataService.sendPOSTRequest(url, null, null, params).subscribe((responseData: any) => {},
      (error: any) => {//Error callback
      });
  }

  public Log(message: string) {
    if(this.domainAccessService.isRequestAllowed()){
      var params: any = {};
      params['domain'] = this.domainAccessService.currentDomain;
      this.info(message, params);
    }
  }

}
