import { Component, inject, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;

  menuIsOpen: boolean = true;

  constructor(public ui: UiService) { 
    const aCollection = collection(this.firestore, 'user')
    this.items$ = collectionData(aCollection);
  }


  ngOnInit(): void {
    
  }

  toogleChannels() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
