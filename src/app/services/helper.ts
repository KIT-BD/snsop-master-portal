import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Helper {
  public showMenuOnMobile = signal(false);

  constructor() {}
}
