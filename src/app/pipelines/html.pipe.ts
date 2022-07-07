import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  transform(value: string): string{
    value = '<p>' + value.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
    return value;
  }

}
