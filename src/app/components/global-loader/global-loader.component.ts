import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [],
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss'],
})
export class GlobalLoaderComponent {
  @Input()
  MESSAGE: string = 'Loading...';
}
