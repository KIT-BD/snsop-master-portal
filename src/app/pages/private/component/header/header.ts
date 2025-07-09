import { Component, effect, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../../services/api';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Helper } from '../../../../services/helper';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  providers: [ConfirmationService],
})
export class Header {
  userData: any = null;

  constructor(
    private apiService: ApiService,
    private helper: Helper,
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
      icon: 'fas fa-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'p-button-success p-button-sm',
      acceptIcon: 'fas fa-check',
      rejectButtonStyleClass: 'p-button-danger p-button-sm',
      rejectIcon: 'fas fa-times',
      closable: false,
      accept: () => {
        this.apiService.logout();
      },
    });
  };

  toggleMenu = () => {
    this.helper.showMenuOnMobile.set(!this.helper.showMenuOnMobile());
  };
}
