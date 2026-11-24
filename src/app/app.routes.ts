import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { MeuImpacto } from './pages/meu-impacto/meu-impacto';

export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'meu-impacto',
    component: MeuImpacto
  },
  {
    path: '**',
    redirectTo: ''
  }
];
