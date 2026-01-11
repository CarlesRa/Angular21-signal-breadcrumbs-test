import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-outlet-component',
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: ``,
})
export class BreadcrumbOutletComponent {

}
