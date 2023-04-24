import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  overlays: any = {
    userMenu: false,
    profile: false,
    addChannel: false,
  };

  constructor() { }


  toggleOverlay(status: boolean, overlay: any): void {
    status ? this.overlays[overlay] = true:  this.overlays[overlay] = false;
  }

  
  dontCloseByClick(event: Event): void {
    event.stopPropagation();
  }
}
