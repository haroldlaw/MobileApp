import { Component, OnInit, signal } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbleOutline, cogOutline, callOutline, chatbubblesOutline, chatbubble, call, chatbubbles, cog } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabs, IonTabBar]
})
export class TabsPage implements OnInit {

  selectedTab = signal<string>('chats');

  constructor() {
    addIcons({
      chatbubbleOutline,
      cogOutline,
      callOutline,
      chatbubblesOutline,
      chatbubble,
      call,
      chatbubbles,
      cog
    })
  }

  ngOnInit() {
  }

  getSelected(event: any) {
    console.log(event);
    this.selectedTab.set(event?.tab);
  }

}
