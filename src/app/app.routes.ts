import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Imprint } from './pages/imprint/imprint';
import { Page404 } from './pages/page-404/page-404';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'imprint', component: Imprint },
  { path: '**', component: Page404 },
];
