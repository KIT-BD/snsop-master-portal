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
import { ApiService } from '../../../services/api';
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
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
  providers: [MessageService],
})
export class SignIn implements OnInit {
  isSigningIn: boolean = false;
  signInForm: any = {};

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  handleSignIn = () => {
    this.isSigningIn = true;
    setTimeout(() => {
      this.apiService.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTExOTA0NDksImV4cCI6MTc4MjcyNjQ0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJuYW1lIjoiU3lzdGVtIFVzZXIiLCJlbWFpbCI6ImFkbWluQHNuc29wLmNvbSIsInJvbGUiOiJBZG1pbiJ9.zrDez1ImLJH9sVw4aDaWpKK1i4jlyxGwobckIF658nw');
    }, 2000);
    // this.apiService
    //   .POST('api/login', this.signInForm.value)
    //   .then((res: any) => {
    //     // console.log(res);
    //     if (res.status == 200) {
    //       this.apiService.setToken(res.data.data.content.accessToken);
    //     } else {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: 'Something went wrong!',
    //       });
    //     }
    //     this.isSigningIn = false;
    //   })
    //   .catch((err: any) => {
    //     console.error(err);
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: err.response.data.detail,
    //     });
    //     this.isSigningIn = false;
    //   });
  };

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('admin@gmail.com', Validators.required),
      password: new FormControl('admin', Validators.required),
      rememberMe: new FormControl(true, Validators.required),
    });
  }
}
