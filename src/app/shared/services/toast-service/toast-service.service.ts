import { Injectable, inject } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { defineCustomElement as defineToast } from '@ionic/core/components/ion-toast';

@Injectable({
    providedIn: 'root'
})

export class ToastService {
    toastController = inject(ToastController)

    constructor() {
        defineToast();
    }

    async notifyToast( message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: 'bottom',
            cssClass: 'notification-toast'
        });

        await toast.present();
    }

    async successToast( message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: 'bottom',
            color: 'success',
            cssClass: 'success-toast'
        });

        await toast.present();
    }
    async errorToast( message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: 'bottom',
            color: 'danger',
            cssClass: 'error-toast'
        });

        await toast.present();
    }
}