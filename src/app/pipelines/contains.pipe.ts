import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(value: any, data?:any): any {
    if(this.trim(value).includes(this.trim(data))){
      return true;
    }
    return false;
  }

  trim(data: string){
    return data.replace(/\s/g, "");
  }

}
