import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons'
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
  IonBackButton,
  IonMenuButton } 
from '@ionic/angular/standalone';

@Component({
  selector: 'app-favorites',
  template: `
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button class="toolbar-light-theme btn-back-topPad" defaultHref="/home"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>

    <ion-content>
      <div id="container">
        <strong class="capitalize">Favorites</strong>
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
    IonBackButton,
    RouterLink],
})
export class FavoritesComponent {

  constructor() {
    addIcons({ heart });
  }
}
