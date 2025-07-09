import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './component/header/header';
import { Sidemenu } from './component/sidemenu/sidemenu';
import { Helper } from '../../services/helper';

@Component({
  selector: 'app-private',
  imports: [RouterModule, Header, Sidemenu],
  templateUrl: './private.html',
  styleUrl: './private.scss',
})
export class Private {
  constructor(private helper: Helper) {}

  toggleMenu = () => {
    this.helper.showMenuOnMobile.set(!this.helper.showMenuOnMobile());
  };
}
