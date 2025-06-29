import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "./component/header/header";
import { Sidemenu } from "./component/sidemenu/sidemenu";

@Component({
  selector: 'app-private',
  imports: [RouterModule, Header, Sidemenu],
  templateUrl: './private.html',
  styleUrl: './private.scss'
})
export class Private {

}
