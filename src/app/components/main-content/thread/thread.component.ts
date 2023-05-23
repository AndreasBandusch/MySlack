import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {
  constructor(public ui: UiService) {}
}
