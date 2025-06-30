import { Component, effect } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  providers: [ConfirmationService]
})
export class Header {

  userData: any = null;

  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService
  ) {
    effect(() => {
      this.userData = this.apiService.loginState().user;
    });
  }

  confirmLogout = () => {
    this.confirmationService.confirm({
      message: 'Are you sure you want to log out?',
      header: 'Confirm Logout',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      rejectButtonStyleClass: 'p-button-secondary p-button-sm',
      accept: () => {
        this.logout();
      }
    });

  }

  logout = () => {
    this.apiService.logout();
  }
}
