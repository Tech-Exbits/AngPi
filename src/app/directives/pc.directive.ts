import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Directive({
  selector: '[isDesktop]'
})
export class PcDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private deviceService: DeviceDetectorService) {
    if(this.deviceService.isDesktop() || this.deviceService.isTablet()) {
      this.viewContainerRef.createEmbeddedView(templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
