import { Component } from "@angular/core";
import {
    IonButton,
    IonPopover,
    IonContent,
    IonList,
    IonItem,
    IonFabButton
} from '@ionic/angular/standalone'


@Component({
    selector: 'app-user-notifications',
    template: `
        <ion-fab-button  translucent="true" size="small" id="popover-button">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-fab-button>
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
        IonFabButton
    ]
})

export class UserNotificationsComponent {

}