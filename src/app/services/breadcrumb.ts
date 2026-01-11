import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

/**
 * Service that generates breadcrumb items based on the current router state.
 *
 * This service can be injected into any component that needs
 * to display hierarchical navigation (breadcrumbs) for the user.
 * 
 * @author CarlesRa
 */
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {

  /** Angular Router instance injected via signals. */
  private readonly router = inject(Router);
  
  /**
   * Signal that tracks NavigationEnd events from the router.
   *
   * This signal is used as a reactive trigger for the `breadcrumbs` computed.
   * Calling `this.navigationEnd()` registers the dependency so that
   * `breadcrumbs` recomputes on every navigation.
   */
  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
  );

  /**
   * Computed signal that returns the current list of breadcrumbs.
   *
   * This signal automatically updates whenever a NavigationEnd event occurs,
   * thanks to the dependency on `navigationEnd()`.
   *
   * @returns Array of `BreadcrumbItem` representing the current navigation hierarchy.
   */
  readonly breadcrumbs = computed(() => {
    // Trigger the computed to re-evaluate on each navigation end event
    this.navigationEnd();
    
    // Build the breadcrumb trail starting from the root of the router state
    return this.buildBreadCrumbs(this.router.routerState.root);
  });

  /**
   * Recursively builds the breadcrumb items from the current route tree.
   *
   * Iterates through all firstChild routes, concatenates the URLs,
   * and includes only routes that have a 'breadcrumb' property in their data.
   *
   * @param route The route from which to start building breadcrumbs
   * @returns Array of `BreadcrumbItem` objects representing the breadcrumb trail
   */
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