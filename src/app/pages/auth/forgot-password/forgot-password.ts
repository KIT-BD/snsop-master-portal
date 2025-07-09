import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FloatLabelModule,
    InputTextModule,
    ToastModule,
    PasswordModule,
    ButtonModule,
    StepperModule,
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
  providers: [MessageService],
})
export class ForgotPassword {
  isResetingPassword: boolean = false;
  forgotPasswordForm: any = {};
  userEmail: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() {}

  handleForgotPassword = () => {};
}
