import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sign-in',
  standalone: true,
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
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  isSigningIn: boolean = false;
  signInForm: any = {};

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  handleSignIn = () => {
    this.isSigningIn = true;
    this.apiService
      .POST('api/login', this.signInForm.value)
      .then((res: any) => {
        // console.log(res);
        if (res.status == 200) {
          this.apiService.setToken(res.data.data.content.accessToken);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong!',
          });
        }
        this.isSigningIn = false;
      })
      .catch((err: any) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.response.data.detail,
        });
        this.isSigningIn = false;
      });
  };

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('admin@gmail.com', Validators.required),
      password: new FormControl('admin', Validators.required),
      rememberMe: new FormControl(true, Validators.required),
    });
  }
}
