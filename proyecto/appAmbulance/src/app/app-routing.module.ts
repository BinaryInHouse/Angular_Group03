import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'summary',
    loadChildren: () =>
      import('./summary/summary.module').then((m) => m.SummaryModule),
  },
  {
    path: 'medics',
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
