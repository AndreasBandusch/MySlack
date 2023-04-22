import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showOverlay: boolean = true;
  overlays: any = {
    userMenu: false,
    addChannel: true,
  };

  constructor() { }

  toggleOverlay(status: boolean, overlay: any): void {
    if (status) {
      this.overlays[overlay] = true;
      this.showOverlay = true;
    }
  }

  dontCloseByClick(event: Event): void {
    event.stopPropagation();
  }
}
