import { Component, inject } from '@angular/core';
import { Breadcrumb } from '../../../services/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  private breadcrumbService = inject(Breadcrumb);
  protected breadcrumbs = this.breadcrumbService.breadcrumbs
}
