import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { PageDriverComponent } from './pages/page-driver/page-driver.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDriverComponent],
  imports: [CommonModule, DriverRoutingModule, SharedModule],
})
export class DriverModule {}
