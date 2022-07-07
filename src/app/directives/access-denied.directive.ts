import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[isAccessDenied]'
})
export class AccessDeniedDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input()
  set isAccessDenied(value: any){
    if(value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
