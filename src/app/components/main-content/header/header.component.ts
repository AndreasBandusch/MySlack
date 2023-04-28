import { Component} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuIsOpen: boolean = true;

  constructor(public ui: UiService) {}

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.ui.showMenu = !this.ui.showMenu;
  }
}
