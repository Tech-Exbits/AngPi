import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceDetectionService } from '../services/crucial/device-detection.service';


@Directive({
  selector: '[isiOS]'
})
export class IosDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private deviceService: DeviceDetectionService) {
    console.log(this.deviceService.isMobile);
    if(this.deviceService.isiOS) {
      this.viewContainerRef.createEmbeddedView(templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
