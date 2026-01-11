import { Component, inject, input } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb';
import { RouterLink } from '@angular/router';
import { SiIcon } from "../../../icons/si-icon/si-icon";
import { IconName } from '../../../icons/icons.paths';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, SiIcon],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  protected separator = input<IconName>('chevron-right')
  private breadcrumbService = inject(BreadcrumbService);
  protected breadcrumbs = this.breadcrumbService.breadcrumbs
}
