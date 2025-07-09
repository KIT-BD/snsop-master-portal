import { Component, OnInit } from '@angular/core';
import { GlobalLoader } from '../../../components/global-loader/global-loader';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  imports: [ButtonModule, GlobalLoader],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile implements OnInit {
  isLoading: boolean = true;
  user: any = {};

  ngOnInit(): void {
    this.user = {
      username: 'System User',
      role: 'Administrator',
      email: 'system.user@example.com',
    };
    this.isLoading = false;
  }
}
