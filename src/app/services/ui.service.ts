import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showOverlay: boolean = false;
  overlays: any = {
    userMenu: false,
    profile: false,
    addChannel: false,
  };

  constructor() { }


  toggleOverlay(status?: boolean, overlay?: any): void {
    if (status) {
      this.overlays[overlay] = true;
      this.showOverlay = true;
    } else {
      this.overlays[overlay] = false;
      this.showOverlay = false;
    } 
    
  }

  
  dontCloseByClick(event: Event): void {
    event.stopPropagation();
  }
}
