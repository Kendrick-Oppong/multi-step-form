import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { Step1Component } from './pages/step-1/step-1.component';
import { Step2Component } from '@pages/step-2/step-2.component';
import { Step3Component } from '@pages/step-3/step-3.component';
import { Step4Component } from '@pages/step-4/step-4.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      {
        path: 'step1',
        component: Step1Component,
        title: 'Step 1 - YOUR INFO',
      },
      {
        path: 'step2',
        component: Step2Component,
        title: 'Step 2 - SELECT PLAN',
      },
      {
        path: 'step3',
        component: Step3Component,
        title: 'Step 3 - ADD-ONS',
      },
      {
        path: 'step4',
        component: Step4Component,
        title: 'Step 4 - SUMMARY',
      },
    ],
  },
];
