import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

declare var Tawk_API: any;

@Injectable({
  providedIn: 'root'
})
export class TawkChatService {
  private init: boolean = false;
  private loaded: boolean = false;
  private loadSubject: Subject<boolean> = new Subject<boolean>();
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document) {
      this.renderer = rendererFactory.createRenderer(null, null);
    }

  public loadTawk(tawkId: string){
    if(this.loaded){
      return
    } else {
      const s = this.renderer.createElement('script');
      s.type = 'text/javascript';
      s.text = `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/${tawkId}/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();`;
      this.renderer.appendChild(this._document.body, s);
      Tawk_API.onLoad = this.loadedEvent.bind(this);
      this.SetChatVisibility()
    }
  }

  private loadedEvent(){
    this.loaded = true;
    this.loadSubject.next(this.loaded);
  }

  public UpdateTawkUser(user: any) {
      this.loadedWrapper(() => {this.updateAtrributes(user)});
  }

  private loadedWrapper(func: any){ 
    if(!this.loaded){
        var sub = this.loadSubject.asObservable().subscribe({
          next: () => {
            func();
            sub.unsubscribe();
          },
          error: () => {}
        });
    } else {
      func();
    }
  }

  public isTawkLoaded() {
    return this.loaded;
  }

  public ExpandChatWindow(show: boolean = false){
    this.loadedWrapper(() => show ? Tawk_API.maximize() : Tawk_API.minimize());
  }

  public SetChatVisibility(show: boolean = false) {
    this.loadedWrapper(() => show ? Tawk_API.showWidget() : Tawk_API.hideWidget());
  }

  private updateAtrributes(user: any){
    Tawk_API.setAttributes({
        'name'  : `${user.firstname} ${user.surname}`,
        'email' : user.email,
        'id'  : user.id,
    }, function(error: any){});
  }
}
