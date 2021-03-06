import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { PageMedicComponent } from './pages/page-medic/page-medic.component';
import { SharedModule } from '../shared/shared.module';
import { ListMedicComponent } from './components/list-medic/list-medic.component';
import { FormMedicComponent } from './components/form-medic/form-medic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageMedicComponent, ListMedicComponent, FormMedicComponent],
  imports: [
    CommonModule,
    MedicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [FormMedicComponent],
})
export class MedicModule {}
