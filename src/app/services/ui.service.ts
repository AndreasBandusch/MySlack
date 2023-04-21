import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showOverlay: boolean = false;
  overlays: any = {
    userMenu: false,
    testMenu: false,
  };

  constructor() { }

  toggleOverlay(status: boolean, overlay: any): void {
    if (status) {
      this.overlays[overlay] = true;
      this.showOverlay = true;
    }
  }
}
