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
  IonCol,
  IonRow,
  IonMenuButton } 
from '@ionic/angular/standalone';
import { UserNotificationsComponent } from './ui/user-notifications.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-header >
      <ion-toolbar>
        <div class="toolbar-container">
            <ion-buttons slot="start">
              <ion-menu-button class="toolbar-light-theme" slot="start"></ion-menu-button>
            </ion-buttons>
            <ion-buttons slot="start">
              <ion-button routerLink="/search">
                <ion-icon class="toolbar-light-theme" slot="icon-only" name="search"></ion-icon>
              </ion-button>
            </ion-buttons>
            <app-user-notifications class="user-fab"></app-user-notifications>
          </div>
        </ion-toolbar>
      </ion-header>

    <ion-content>
      <ion-row>
        <ion-col>
          <h1 class="capitalize">Welcome to Plano</h1>
          <strong class="capitalize ion-padding-bottom">The easy way to load your presets for Sunday</strong>
          <img class="ion-padding-bottom ion-padding-top" src="../assets/HelixPlanoLogo.png" alt="">
          <strong class="capitalize">Home</strong>
          <p class="ion-padding-bottom">Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quo distinctio expedita. Numquam qui magni, ullam animi adipisci molestiae asperiores quam. Molestiae modi incidunt excepturi voluptatibus? Nesciunt, ex quasi libero alias quia perferendis! Repudiandae numquam hic animi laudantium nulla soluta iure natus rem maiores assumenda neque inventore exercitationem cum nemo pariatur non recusandae quam, commodi aut repellat, magni sunt reiciendis! Cupiditate hic vel reprehenderit natus cum atque quisquam. Possimus, animi. Inventore vero veritatis ea, non numquam ex perferendis animi facere cumque eveniet, ad tempore nobis, odio fugiat aspernatur aliquid! Eum fuga ducimus qui accusantium dolores incidunt omnis, quos laboriosam mollitia, nisi aliquam aspernatur sit earum laborum. Cumque adipisci quia iure, ea officia rerum laudantium expedita corporis excepturi fugit vero voluptate numquam, molestias alias nobis repellat nulla aut optio soluta blanditiis ipsa assumenda, perspiciatis in! Vero assumenda molestias aut pariatur ut cupiditate sed, ipsa ipsam, non libero dignissimos culpa eius fugit quam quaerat, voluptas accusamus cum nostrum repellendus repellat blanditiis nesciunt tempora nulla soluta. Odit molestiae consequatur voluptates dignissimos itaque. Nam dolores atque ratione ipsa non, repudiandae temporibus itaque exercitationem? Quidem quod autem optio vero voluptate illum in cum explicabo eligendi aliquid voluptatem, dolorem quae similique sint ducimus iste quibusdam eius fuga nobis. Atque id vitae quasi quam? Quibusdam ipsa repellendus quae magni nisi numquam, corrupti totam dolorem sint saepe ea ullam. Distinctio, laudantium tempore. In praesentium fugit nesciunt, animi quas eaque architecto quasi delectus corporis ea deserunt deleniti ad natus sequi alias cupiditate laboriosam, obcaecati incidunt reiciendis eos quo odit repellendus ipsum quos! Voluptate veniam sapiente inventore ullam autem rerum pariatur aperiam quia, repellendus eius odio excepturi eos, sint, facilis molestiae iusto commodi accusantium provident harum atque quam dolorem! Hic laboriosam dolorem ipsa. Necessitatibus cum beatae dolores! Explicabo consequuntur exercitationem ea similique, quisquam eum aperiam asperiores pariatur dignissimos. A, nemo.</p>
        </ion-col>
      </ion-row>
      <div id="container">
      </div>
    </ion-content>

  `,
  styles: [`
    ion-menu-button {
      color: var(--ion-color-primary);
    }

    .user-fab {
      margin-right: 8px;
      margin-left: auto;
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
    UserNotificationsComponent,
    IonCol,
    IonRow,
  ],
})
export class HomeComponent {

  constructor() {
    addIcons({ search });
  }
}
