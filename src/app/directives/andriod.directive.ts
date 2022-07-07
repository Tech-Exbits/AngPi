import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceDetectionService } from '../services/crucial/device-detection.service';


@Directive({
  selector: '[isAndriod]'
})
export class AndriodDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private deviceService: DeviceDetectionService) {
    if(this.deviceService.isAndriod) {
      this.viewContainerRef.createEmbeddedView(templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
