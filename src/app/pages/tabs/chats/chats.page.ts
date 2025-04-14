import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonAvatar, IonImg, IonList, IonLabel, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonAvatar, IonLabel, IonIcon, IonButtons, IonButton]
})
export class ChatsPage implements OnInit {
  chats = Array(10)

  constructor() { 
    addIcons({
      addCircle
    })
  }

  ngOnInit() {
  }

}
