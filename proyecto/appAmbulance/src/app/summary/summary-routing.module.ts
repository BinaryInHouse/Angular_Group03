import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSummaryComponent } from './pages/page-summary/page-summary.component';

const routes: Routes = [{ path: '', component: PageSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule {}
