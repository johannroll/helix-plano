import { Component } from "@angular/core";
import {
    IonButton,
    IonPopover,
    IonContent,
    IonList,
    IonItem,
    IonFabButton,
    IonFab,
    IonIcon
} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons'


@Component({
    selector: 'app-user-notifications',
    template: `
        <ion-fab slot="fixed" vertical="top" horizontal="end">
            <ion-fab-button  translucent="true" size="small" id="popover-button">
                <ion-icon name="person-circle-outline"></ion-icon>
            </ion-fab-button>
        </ion-fab>
     
        <ion-popover trigger="popover-button" [dismissOnSelect]="true">
            <ng-template>
                <ion-content>
                    <ion-list lines="none">
                        <ion-item [button]="true" [detail]="false">Option 1</ion-item>
                        <ion-item [button]="true" [detail]="false">Option 2</ion-item>
                        <ion-item [button]="true" id="nested-trigger">More options...</ion-item>

                        <ion-popover trigger="nested-trigger" [dismissOnSelect]="true" side="end">
                            <ng-template>
                                <ion-content>
                                    <ion-list>
                                        <ion-item [button]="true" [detail]="false">Nested option</ion-item>
                                    </ion-list>
                                </ion-content>
                            </ng-template>
                        </ion-popover>
                    </ion-list>
                </ion-content>
            </ng-template>
        </ion-popover>
    `,
    styles: [``],
    standalone: true,
    imports: [
        IonButton,
        IonPopover,
        IonContent,
        IonList,
        IonItem,
        IonFabButton,
        IonFab,
        IonIcon
    ]
})

export class UserNotificationsComponent {
    constructor() {
        addIcons({ personCircleOutline });
    }
}