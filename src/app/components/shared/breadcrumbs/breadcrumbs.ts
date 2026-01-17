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
  protected showHome = input<boolean>(true);
  protected linkColor = input<string>('#3b82f6');
  protected separatorColor = input<string>('#94a3b8');
  protected currentWeight = input<string>('500');
  protected separator = input<IconName>('chevron-right')
  
  private breadcrumbService = inject(BreadcrumbService);
  protected breadcrumbs = this.breadcrumbService.breadcrumbs
}
