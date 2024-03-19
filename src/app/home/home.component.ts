import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons'
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
  IonNavLink,
  IonNav,
  IonFab,
  IonFabButton,
  IonMenuButton } 
from '@ionic/angular/standalone';
import { UserNotificationsComponent } from './ui/user-notifications.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-header [translucent]="true"  class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button class="toolbar-light-theme" slot="start"></ion-menu-button>
          </ion-buttons>
          <!-- <ion-fab-button translucent="true" size="small">
              <img src="../assets/PlanoLogo.png" alt="Plano logo image">
          </ion-fab-button> -->
          <ion-buttons slot="end">  
            <ion-button routerLink="/search">
              <ion-icon class="toolbar-light-theme" slot="icon-only" name="search"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <app-user-notifications></app-user-notifications>
          </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div id="container">
        <strong class="capitalize">Home</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>

  `,
  styles: [`
    ion-menu-button {
  color: var(--ion-color-primary);
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
  `],
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
    IonNavLink,
    IonNav,
    IonMenuButton,
    IonFab,
    IonFabButton,
    RouterLink,
    UserNotificationsComponent
  ],
})
export class HomeComponent {

  constructor() {
    addIcons({ search });
  }
}
