import { Component, effect } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  userData: any = null;

  constructor(private apiService: ApiService) {
    effect(() => {
      this.userData = this.apiService.loginState().user;
    });
  }

  logout = () => {
    this.apiService.logout();
  }
}
