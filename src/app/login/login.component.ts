import { Component, inject } from "@angular/core";
import { addIcons } from 'ionicons';
import { search, eye, eyeOff } from 'ionicons/icons'
import { RouterLink } from "@angular/router";
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
    IonMenuButton,
    IonBackButton,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonSpinner,
    IonInput } 
  from '@ionic/angular/standalone';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { ToastService } from "../shared/services/toast-service/toast-service.service";


@Component({
    selector: 'app-login',
    template: `
      <ion-header>
        <ion-toolbar>
            <ion-buttons class="btn-back" slot="start" justify-center>
              <ion-back-button class="toolbar-light-theme" defaultHref="/home"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content [fullscreen]="true">
        <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="12" size-xl="5" size-lg="5" size-md="6" size-sm="8">
                <ion-card >
                    <ion-card-header>
                        <ion-card-title>Login</ion-card-title>
                        <ion-card-subtitle>Planning Centre</ion-card-subtitle>
                    </ion-card-header>
    
                    <ion-card-content class="ion-margin-top">
                        <form [formGroup]="loginForm" (ngSubmit)="handleLogin()">
                            <ion-list lines="none">
                                <ion-item >
                                    <ion-input
                                        class="ion-margin-bottom"
                                        formControlName="email"
                                        type="email"
                                        fill="clear"
                                        label="Email"
                                        labelPlacement="floating"
                                        placeholder="email@domain.com"
                                        errorText="Invalid email"                
                                    ></ion-input>
                                </ion-item>
                                <ion-item class="ion-margin-top">
                                    <ion-input
                                        class="ion-margin-bottom" 
                                        formControlName="password"
                                        [type]="showPassword ? 'text' : 'password'"  
                                        fill="clear" 
                                        labelPlacement="floating" 
                                        label="Password" placeholder=""
                                        placeholder="password"
                                        errorText="Invalid password"
                                        >
                                    </ion-input>
                                    <ion-button color="primary" fill="clear" slot="end" aria-label="Show/hide" (click)="toggleShowPassword()">
                                        <ion-icon slot="icon-only" [name]="showPassword ? 'eye-off' : 'eye' " aria-hidden="true"></ion-icon>
                                    </ion-button>
                                </ion-item>
                            </ion-list>
                            <p class="forgot-password"><a target="_blank" rel="noopener noreferrer" href="https://login.planningcenteronline.com/password_reset/new">Forgot password</a></p>
                            <ion-button 
                                type="submit" 
                                [disabled]="!loginForm.valid || loading"  
                                class="ion-padding-top ion-margin-top" 
                                fill="solid" expand="block">
                                @if (loading) {
                                    <ion-spinner name="circular"></ion-spinner>
                                } @else {
                                    Login
                                }
                                </ion-button>
                        </form>
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
      </ion-content>
    `,
    styles: [`
        p a {
            text-decoration: none;
            // color: #fff;
        }

        ion-list {
            background: transparent !important;
        }

        ion-item {
            background: transparent !important;
            border-radius: 8px 8px 8px 8px !important;
        }

        .forgot-password {
            width: 100%;
            margin-top: 8px;
        }

        ion-toolbar {
            height: 62px;
        }

        ion-back-button {
           margin-top: 0.7rem;
        }

        ion-spinner {
            height: 21px;
            margin: 0 0;
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
    RouterLink,
    IonInput,
    IonBackButton,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    ReactiveFormsModule,
    IonSpinner
],
})

export class LoginComponent {
    formBuilder = inject(FormBuilder)
    toastService = inject(ToastService)
    showPassword: boolean = false;
    loading: boolean = false;

    validLogin = {
        email: 'johannroll@gmail.com',
        password: "Password123"
    }

    loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    toggleShowPassword() {
        this.showPassword = !this.showPassword
    }

    handleLogin() {
        if (this.loginForm.valid) {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                if (this.loginForm.value.email === this.validLogin.email && this.loginForm.value.password === this.validLogin.password) {
                    this.toastService.successToast("Successfully logged in")
                } else {
                    this.toastService.errorToast("Invalid credentials")
                }
            }, 2500);
        } 
        console.log(this.loginForm.value);
    }

    constructor() {
        addIcons({ search, eye, eyeOff });
      }
}