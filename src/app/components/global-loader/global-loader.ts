import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [],
  templateUrl: './global-loader.html',
  styleUrls: ['./global-loader.scss'],
})
export class GlobalLoader {
  @Input()
  MESSAGE: string = 'Loading...';
}
