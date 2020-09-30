import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeadlineComponent } from './components/headline/headline.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [HeadlineComponent, TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HeadlineComponent,
    TableComponent,
  ],
})
export class SharedModule {}
