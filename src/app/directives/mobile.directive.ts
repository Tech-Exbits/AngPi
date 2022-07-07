import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Directive({
  selector: '[isMobile]'
})
export class MobileDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private deviceService: DeviceDetectorService) {
    if(this.deviceService.isMobile()) {
      this.viewContainerRef.createEmbeddedView(templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
