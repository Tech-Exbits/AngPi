import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[isAccessGranted]'
})
export class AccessGrantedDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input()
  set isAccessGranted(value: any) {
    if(value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
