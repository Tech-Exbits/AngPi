import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {

  constructor() { }

  get isAndriod() {
    return navigator.userAgent.match(/Android/i);
  }

  get isBlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  }

  get isiOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }

  get isOpera() {
    return navigator.userAgent.match(/Opera Mini/i);
  }

  get isWindows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  }

  get isMobile() {
    return (navigator.userAgent.match(/Android/i) 
    || navigator.userAgent.match(/BlackBerry/i) 
    || navigator.userAgent.match(/iPhone|iPad|iPod/i) 
    || navigator.userAgent.match(/Opera Mini/i) 
    || (navigator.userAgent.match(/IEMobile/i) 
    || navigator.userAgent.match(/WPDesktop/i)))
  }

  get isDesktop() {
    return (!navigator.userAgent.match(/Android/i) 
    && !navigator.userAgent.match(/BlackBerry/i) 
    && !navigator.userAgent.match(/iPhone|iPad|iPod/i) 
    && !navigator.userAgent.match(/Opera Mini/i) 
    && (!navigator.userAgent.match(/IEMobile/i) 
    && !navigator.userAgent.match(/WPDesktop/i)))
  }

}
