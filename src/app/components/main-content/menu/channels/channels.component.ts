import { Component, inject, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
  menuIsOpen : boolean = true;
  
  
  constructor(public ui: UiService) {
    const aCollection = collection(this.firestore, 'channels')
    this.items$ = collectionData(aCollection);
  }

  ngOnInit(): void {
    
  }
  
  toogleChannels() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
