import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { DomainAccessService } from '../services/security/domain-access.service';

@Directive({
  selector: '[hasBetaAccess]'
})
export class BetaAccessDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private domainAccessService: DomainAccessService) {
      if(this.domainAccessService.hasBetaAccess()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
  }

}
