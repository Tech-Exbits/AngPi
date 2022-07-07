import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compare'
})
export class ComparePipe implements PipeTransform {

  transform(value: any, comparisonValue: any): boolean {
    if(value && comparisonValue){
      value = String(value);
      comparisonValue = String(comparisonValue);
      if(value.toLowerCase() === comparisonValue.toLowerCase()){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

}
