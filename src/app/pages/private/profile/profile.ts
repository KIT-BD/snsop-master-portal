import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  user = {
    username: 'System User',
    role: 'Administrator',
    email: 'system.user@example.com'
  };
}
