import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageUserComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
