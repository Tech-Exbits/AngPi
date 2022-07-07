import { Pipe, PipeTransform } from '@angular/core';
import { utcToZonedTime } from 'date-fns-tz';

@Pipe({
  name: 'timezone'
})
export class TimezonePipe implements PipeTransform {

  transform(value: any, zone?: any): any {
    if(zone != null && zone != undefined && zone != ''){
      value = utcToZonedTime(value, zone);
    }
    return value;
  }

}
