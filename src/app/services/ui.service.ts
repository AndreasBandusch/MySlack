import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showOverlay: boolean = false;
  currentOpenOverlay: string = '';
  overlays: any = {
    userMenu: false,
    addChannel: false,
  };

  constructor() { }


  toggleOverlay(status?: boolean, overlay?: any): void {
    if (status) {
      this.overlays[overlay] = true;
      this.showOverlay = true;
      this.currentOpenOverlay = overlay;
    } else {
      this.overlays[overlay] = false;
      this.showOverlay = false;
    }
    if (!overlay) {
      this.overlays[this.currentOpenOverlay] = false;
    }
  }

  
  dontCloseByClick(event: Event): void {
    event.stopPropagation();
  }
}
