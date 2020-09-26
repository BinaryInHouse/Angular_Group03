import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { PageMedicComponent } from './pages/page-medic/page-medic.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageMedicComponent],
  imports: [CommonModule, MedicRoutingModule, SharedModule],
})
export class MedicModule {}
