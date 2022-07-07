import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UtilitiesService } from '../misc/utilities.service';
import { ApiCallService } from '../v1-services/api-call.service';
import { addMinutes } from 'date-fns';
import { DnsService } from './dns.service';

@Injectable({
  providedIn: 'root'
})
export class FasterThanLightService {

  constructor(private apiService: ApiCallService, private dnsService: DnsService, private utilities: UtilitiesService) { }

  /* Stats API */
  getSystemStats(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/stats';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      if(response['message'] == 'success') {
        response['response'] = this.utilities.convertToObject(response['response'])
      }
      subject.next(response);
    }),
    (error: any) => {
      subject.next(error);
    }
    return subject.asObservable();    
  }

  getDatabaseStats(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/dbstats';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      if(response['message'] == 'success') {
        response['response'] = this.utilities.convertToObject(response['response'])
      }
      subject.next(response);
    }),
    (error: any) => {
      subject.next(error);
    }
    return subject.asObservable();    
  }

  /* OverTime API */
  getTotalOvertime(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/overtime';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      if(response['message'] == 'success') {
        response['response'] = this.utilities.convertToArrayOfObjects(response['response']);
        console.log(response['response']);
        //this.generateDomainTimeSeries(response);
      }
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();    
  }

  getClientsOvertime(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/clients-overtime';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      response['response'] = this.utilities.convertToArrayOfObjects(response['response'])
      this.reduceClientTimeSeries(response)
      subject.next(response)
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();    
  }

  getQueryTypesOvertime(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/querytype-overtime';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();     
  }

  /* Domains API */
  getTopBlockedDomains(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/top-ads';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();      
  }

  getTopPermittedDomains(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/top-domains';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();     
  }

  /* Clients API */
  getTotalTopClients(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/top-clients';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();    
  }

  getBlockedTopClients(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/top-blocked-clients';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();     
  }

  /* Forwarded Destinations API */
  getForwardedDestinations(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl/forward-dest';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      if(response['message'] == 'success') {
        var array: any = [];
        for (var element of response['response']) {
          var obj: any = {}
          var forwardIP = element[2];
          if(element.length > 3) {
            var forwardName = element[3]
            obj['name'] = forwardName
          }
          else {
            obj['name'] = forwardIP
          }
          obj['value'] = element[1]
          var isFound: boolean = false;
          for (var item of array) {
            if(item.name === obj.name) {
              isFound = true;
              var newValue = Number(item.value) + Number(obj.value);
              item.value = String(newValue.toFixed(2));
              break;
            }
          }
          if(!isFound) {
            array.push(obj);
          }
          
        }
        response['response'] = array;
      }
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();     
  }

  /* QueryTypes API */
  getQueryTypes(): Observable<any> {
    var subject = new Subject<any>();
    const url: string = '/ftl​/querytypes';
    this.apiService.sendGETRequest(url).subscribe((response: any) => {
      subject.next(response);
    }),
    (error: any) => {
      subject.error(error);
    }
    return subject.asObservable();     
  }

  generateClientTimeSeries(response: any): any {
    this.reduceDomainTimeSeries(response);
    var array: any = [];
    for (var i = 0; i < response['response'].length; i++) {
      var obj: any = {}
      var series: any = [];
      series.push({
        name: 'Permitted',
        value: response['response'][i]['domain-overtime']
      })
      series.push({
        name: 'Blocked',
        value: response['response'][i]['ads-overtime']
      })

      var timestamps = response['response'][i]['timestamp'].split(':');
      var inittime = new Date(parseInt(timestamps[0]));
      var outtime = new Date(parseInt(timestamps[1]));
      var formatobj: any = { month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
      
      obj['name'] = String(inittime.toLocaleString('en-US', formatobj))+' : '+String(outtime.toLocaleString('en-US', formatobj)) ;
      obj['series'] = series;
      array.push(obj);
    }
    response['response'] = array;
  }

  reduceClientTimeSeries(response: any): void {
    var timerange: any = [];
    var startRange: Date = new Date();
    var values = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
    
    for (var i = 0; i < response['response'].length; i++) {
      var computeMap : any = {};
      var headers: any = [];
      if(Object.keys(computeMap).length == 0) {
        computeMap = response['response'][i];
        for (var key in computeMap) {
          if(key != 'timestamp') {
            headers.push(key);
          }
        }
      }

      var h: any = parseInt(response['response'][i]['timestamp'], 10);
      var d: any = parseInt(response['response'][i]['timestamp'], 10) < 1200 ? new Date().setHours(Math.floor(h / 6), 10 * (h % 6), 0, 0) : new Date(1000 * h);
      
      for (var index = 0; index < headers.length ; index++) {
        if(headers[index] != 'timestamp') {
          var compute = parseInt(values[index]) + parseInt(computeMap[headers[index]]);
          values[index] = String(compute);
        }
      }

      if(i == 0 || startRange.getTime() == d.getTime()) {
        startRange = addMinutes(d, 120);
        var currentTime = new Date();
        //console.log(d);
        //console.log(startRange)
        if(startRange.getTime() < currentTime.getTime()) {
          computeMap['timestamp'] = String(d.getTime()) + ':' + String(startRange.getTime());
          for (var index = 0; index < headers.length ; index++) {
            computeMap[headers[index]] = values[index];
          }
          timerange.push(computeMap);
        } else {
          computeMap['timestamp'] = String(d.getTime()) + ':' + String(currentTime.getTime());
          for (var index = 0; index < headers.length ; index++) {
            computeMap[headers[index]] = values[index];
          }
          timerange.push(computeMap);
        }
        values = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
      }
    }
    console.log(timerange);
    response['response'] = timerange;
  }

  generateDomainTimeSeries(response: any): any {
    this.reduceDomainTimeSeries(response);
    var array: any = [];
    for (var i = 0; i < response['response'].length; i++) {
      var obj: any = {}
      var series: any = [];
      series.push({
        name: 'Permitted',
        value: response['response'][i]['domain-overtime']
      })
      series.push({
        name: 'Blocked',
        value: response['response'][i]['ads-overtime']
      })

      var timestamps = response['response'][i]['timestamp'].split(':');
      var inittime = new Date(parseInt(timestamps[0]));
      var outtime = new Date(parseInt(timestamps[1]));
      var formatobj: any = { month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
      
      obj['name'] = String(inittime.toLocaleString('en-US', formatobj))+' : '+String(outtime.toLocaleString('en-US', formatobj)) ;
      obj['series'] = series;
      array.push(obj);
    }
    //response['response'] = array;
  }

  reduceDomainTimeSeries(response: any): void {
    var timerange: any = [];
    var startRange: Date = new Date();
    var domainQueries: any = 0;
    var adsQueries: any = 0;
    for (var i = 0; i < response['response'].length; i++) {
      var h: any = parseInt(response['response'][i]['timestamp'], 10);
      var d: any = parseInt(response['response'][i]['timestamp'], 10) < 1200 ? new Date().setHours(Math.floor(h / 6), 10 * (h % 6), 0, 0) : new Date(1000 * h);
      domainQueries = domainQueries + parseInt(response['response'][i]['domain-overtime'])
      adsQueries = adsQueries + parseInt(response['response'][i]['ads-overtime'])

      if(i == 0 || startRange.getTime() == d.getTime()) {
        startRange = addMinutes(d, 120);
        var currentTime = new Date();
        if(startRange.getTime() < currentTime.getTime()) {
          
          timerange.push({
            'timestamp': String(d.getTime()) + ':' + String(startRange.getTime()),
            'domain-overtime': String(domainQueries),
            'ads-overtime': String(adsQueries)
          });
        } else {
          timerange.push({
            'timestamp': String(d.getTime()) + ':' + String(currentTime.getTime()),
            'domain-overtime': String(domainQueries),
            'ads-overtime': String(adsQueries)
          });
        }
        domainQueries = 0;
        adsQueries = 0;
      }
    }
    //response['response'] = timerange;
  }
}
