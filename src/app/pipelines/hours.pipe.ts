import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHours'
})
export class HoursPipe implements PipeTransform {

  transform(value: any, convertFrom:any): any {
    var convertedValue="";
    if(convertFrom == 'minutes'){
      convertedValue = this.minutestohours(Number(value));
    }
    if(convertFrom == 'seconds'){
      convertedValue = this.secondstohours(Number(value));
    }
    return convertedValue;
  }

  minutestohours(num: any){ 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + " hours " + minutes + " minutes";         
  }

  secondstohours(num: any){ 
    var hours = Math.floor(num / 3600);  
    var minutes = num % 3600;
    return hours + " hours " + minutes + " minutes";         
  }

}
