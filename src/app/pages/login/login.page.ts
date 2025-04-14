import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonList, IonInput, IonIcon, IonInputPasswordToggle, IonText, IonButton, IonSpinner, IonCard } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonList,
    IonInput,
    ReactiveFormsModule,
    IonIcon,
    IonInputPasswordToggle,
    IonText,
    IonButton,
    IonSpinner,
    RouterLink,
    IonCard
  ]
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  isLogin = signal<boolean>(false);

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  get isLoginValue() {
    return this.isLogin();
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value)
  }
}
