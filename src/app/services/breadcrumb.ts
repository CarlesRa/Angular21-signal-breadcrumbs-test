import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class Breadcrumb {

  private readonly router = inject(Router);
  
  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
  );

  readonly breadcrumbs = computed(() => {
    this.navigationEnd(); 
    return this.buildBreadCrumbs(this.router.routerState.root);
  });

  private buildBreadCrumbs(route: ActivatedRoute | null): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [];
    let url = '';

    while (route = route?.firstChild ?? null) {
      const routeURL = route.snapshot.url.map(s => s.path).join('/');
      
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = route.snapshot.data['breadcrumb'];

      if (label) {
        breadcrumbs.push({ label, url });
      }
    }

    return breadcrumbs;
  }
}
