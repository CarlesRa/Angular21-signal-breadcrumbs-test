import { Routes } from '@angular/router';
import { MainLayout } from './components/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        title: 'Home',
        path: 'home',
        loadComponent: () => import('./components/pages/home/home').then(mod => mod.Home),
      },
      {
        title: 'Products',
        path: 'products',
        loadComponent: () => import('./components/pages/products-base/products-base').then(mod => mod.ProductsBase),
        data: {
          breadcrumb: 'Products'
        },
        children: [
          {
            path: '',
            loadComponent: () => import('./components/pages/products/products').then(mod => mod.Products),
            data: {
              breadcrumb: null
            }          
          },
          {
            title: 'Laptops',
            path: 'laptops',
            loadComponent: () => import('./components/pages/laptops/laptops').then(mod => mod.Laptops),
            data: {
              breadcrumb: 'Laptops'
            }
          },
        ]
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      }
    ]
  }
];
