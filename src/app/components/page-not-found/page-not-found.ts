import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFound {
  errorcode: string = '404';
  errormessage: string = 'Not Found!';
}
