import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonContent,
  IonRouterLink,
  IonMenu,
  IonMenuButton,
  IonSplitPane,
  IonListHeader,
  IonMenuToggle,
  IonList,
  IonLabel,
  IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alarm, logoIonic, search, logInOutline, heart } from 'ionicons/icons';
import { NetworkService } from './shared/services/network-service/network.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ToastService } from './shared/services/toast-service/toast-service.service';


@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-split-pane contentId="main-content">
        <ion-menu contentId="main-content" type="overlay">
          <ion-content>
            <ion-list id="inbox-list">
              <ion-list-header>Menu</ion-list-header>
              <ion-note>hi&#64;planningcentrefriend.com</ion-note>
  
              <ion-menu-toggle auto-hide="false">
              @for (p of appPages; track $index) {
                <ion-item routerDirection="root" [routerLink]="p.url" lines="none" detail="false" routerLinkActive="selected">
                  <ion-icon aria-hidden="true" slot="start" [ios]="p.icon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              }
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet  id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  `,
  styles: [`
      ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
  `],
  standalone: true,
  imports: [IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonContent,
    IonRouterLink,
    IonMenu,
    IonMenuButton,
    IonListHeader,
    IonSplitPane,
    IonNote,
    IonMenuToggle,
    IonLabel,
    IonList,
    RouterLink 
  ],
})
export class AppComponent {
  networkService = inject(NetworkService)
  toastService = inject(ToastService)

  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in-outline' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    
  ];
  constructor() {
    addIcons({ alarm, logoIonic, search, logInOutline, heart });

    this.networkService.checkConnection$.pipe(takeUntilDestroyed(), tap((status) => console.log('Network status: ', status))).subscribe((online) => {
      this.networkService.state.update((state) => ({
          ...state,
          online: online,
          connectionCount: state.connectionCount + 1
      }))
    })

    effect(() => {
        const network = this.networkService.isOnline();
        
        if (!network) {
            this.toastService.errorToast('No internet connection')
        }

        if ( network && this.networkService.connectionCount() > 1) {
          this.toastService.successToast('Internet connection restored');
          setTimeout(() => {
              this.networkService.refresh();
            }, 1700)
        }
    })
  }
}
