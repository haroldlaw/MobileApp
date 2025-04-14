import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IonContent, IonInput, IonIcon, IonInputPasswordToggle, IonText, IonButton, IonSpinner, IonCard, IonHeader, IonBackButton, IonButtons, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonContent, IonInput, IonIcon, IonInputPasswordToggle, IonText, IonButton, IonSpinner, IonCard, IonButtons, IonHeader, IonToolbar, IonBackButton, ReactiveFormsModule ]
})
export class SignupPage implements OnInit {
  form!: FormGroup;
  isSignUp = signal<boolean>(false);

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      personOutline
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  get isSignUpValue() {
    return this.isSignUp();
  }

  signup() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value)
  }

}
