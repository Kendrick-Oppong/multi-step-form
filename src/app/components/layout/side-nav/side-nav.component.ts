import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
  
export class SideNavComponent {
  readonly steps = [
    { index: 1, step: 'Step 1', title: 'YOUR INFO' },
    { index: 2, step: 'Step 2', title: 'SELECT PLAN' },
    { index: 3, step: 'Step 3', title: 'ADD-ONS' },
    { index: 4, step: 'Step 4', title: 'SUMMARY' },
  ];
}
