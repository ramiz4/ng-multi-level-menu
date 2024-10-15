import { Routes } from '@angular/router';
import { DummyContentComponent } from './content/dummy-content.component';
import { ProductsComponent } from './content/products.component';
import { HomeComponent } from './content/home.component';
import { AboutComponent } from './content/about.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products' },
    children: [
      {
        path: 'laptops',
        component: DummyContentComponent,
        data: { title: 'Laptops' },
      },
      {
        path: 'phones',
        component: DummyContentComponent,
        data: { title: 'Phones' },
        children: [
          {
            path: 'smartphones',
            component: DummyContentComponent,
            data: { title: 'Smartphones' },
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Us' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { skipMenuItem: true },
  },
];
