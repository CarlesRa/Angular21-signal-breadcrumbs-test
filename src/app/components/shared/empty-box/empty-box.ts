import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-box',
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: ``,
})
export class EmptyBox {

}
