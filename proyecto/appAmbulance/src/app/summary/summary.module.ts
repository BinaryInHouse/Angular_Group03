import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { PageSummaryComponent } from './pages/page-summary/page-summary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageSummaryComponent],
  imports: [CommonModule, SummaryRoutingModule, SharedModule],
})
export class SummaryModule {}
