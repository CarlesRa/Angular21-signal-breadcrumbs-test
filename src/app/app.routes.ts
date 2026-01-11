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
        loadComponent: () => import('./components/shared/empty-box/empty-box').then(mod => mod.EmptyBox),
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
            loadComponent: () => import('./components/shared/empty-box/empty-box').then(mod => mod.EmptyBox),
            data: {
              breadcrumb: 'Laptops'
            }, children: [
              {
                path: '',
                loadComponent: () => import('./components/pages/laptops/laptops').then(mod => mod.Laptops),
                data: {
                  breadcrumb: null // TODO: ADD A CONST TO MORE EXPLICIT EX: SKIP_BREADCRUMB
                }
              },
              {
                title: 'Laptop information',
                path: ':id',
                loadComponent: () => import('./components/pages/laptop-detail/laptop-detail').then(mod => mod.LaptopDetail),
                data: {
                  breadcrumb: 'Laptop details'
                }
              }
            ]
          },
        ]
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      }
    ]
  }
];
