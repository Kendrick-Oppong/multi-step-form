export const navSteps = [
  { index: 1, step: 'Step 1', title: 'YOUR INFO', path: 'step1' },
  { index: 2, step: 'Step 2', title: 'SELECT PLAN', path: 'step2' },
  { index: 3, step: 'Step 3', title: 'ADD-ONS', path: 'step3' },
  { index: 4, step: 'Step 4', title: 'SUMMARY', path: 'step4' },
];

export const step1Config = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
  },
  {
    label: 'Email Address',
    type: 'text',
    name: 'emailAddress',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
  },
];
