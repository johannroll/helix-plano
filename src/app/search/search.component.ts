
import { Component, computed, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonLabel,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonBackButton } 
from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  template: `
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button class="toolbar-light-theme" defaultHref="/home"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar class="ion-no-border" animated="true" [debounce]="600" placeholder="search" (ionInput)="searchTerm.set($event.target.value)"></ion-searchbar>
        </ion-toolbar>
    </ion-header>
        
    <ion-content>
      <ion-list lines="none">
        @for (item of searchResults(); track $index) {
          @if(searchTerm()!.length > 0) {
            <ion-item>
              <ion-avatar slot="start">
                <img src="{{item.picture}}" />
              </ion-avatar>
              <ion-label>
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
              </ion-label>
            </ion-item>
          }
        } 
        @if (searchResults().length === 0 && searchTerm()) {  
          <ion-item>
            <ion-label>
                <h2>No result</h2>
            </ion-label>
          </ion-item>  
        }      
      </ion-list>
    </ion-content>
  `,
  styles: [`
  `]
  ,
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonLabel,
    IonIcon,
    IonButton,
    IonSearchbar,
    IonList,
    IonItem,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonBackButton,
    RouterLink
  ],
})
export class SearchComponent {
  location = inject(Location)

  navigation = signal(this.location)

  searchTerm = signal<string | null | undefined>(null)

  searchResults = computed(() => {
    return this.items().filter((item) => item.name!?.toLowerCase().includes(this.searchTerm()!?.toLowerCase()))
  })

  items = signal([
    {
      name: 'Josh',
      description: 'hello',
      picture: 'https://api.dicebear.com/8.x/adventurer/svg?seed=abc',
    },
    {
      name: 'John',
      description: 'hello',
      picture: 'https://api.dicebear.com/8.x/adventurer/svg?seed=abc',
    },
    {
      name: 'Johnnie',
      description: 'hello',
      picture: 'https://api.dicebear.com/8.x/adventurer/svg?seed=abc',
    },
    {
      name: 'Annie',
      description: 'bye',
      picture: 'https://api.dicebear.com/8.x/adventurer/svg?seed=def',
    },
    {
      name: 'Luke',
      description: 'Good evening',
      picture: 'https://api.dicebear.com/8.x/adventurer/svg?seed=ghi',
    },
  ]);

  constructor() {}
}
