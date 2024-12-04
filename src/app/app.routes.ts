import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { Step1Component } from './components/step-1/step-1.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'step1', component: Step1Component }],
  },
  { path: '**', redirectTo: '' },
];
