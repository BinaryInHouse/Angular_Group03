import { Component, OnInit } from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';
import { MedicService } from '../../../services/medic.service';
import { mappingMedic, MedicDto } from '../../../dtos/medic.dto';
import { MatDialog } from '@angular/material/dialog';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  dataSource: MedicDto[] = [];

  metaDataListMedics: MetaDataTableItem[] = [
    {
      field: 'name',
      title: 'Nombre',
    },
    { field: 'lastname', title: 'Apellido' },
  ];

  constructor(
    private readonly medicService: MedicService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.medicService.getAll().subscribe(
      (response) => {
        this.dataSource = mappingMedic(response) as MedicDto[];
      },
      (error) => console.log(error)
    );
  }

  action(actionButton: string): void {
    switch (actionButton) {
      case 'EDITAR':
        this.dialog.open(FormMedicComponent, {
          panelClass: 'modal',
          disableClose: true,
        });
        break;
      case 'ELIMINAR':
        break;
    }
  }
}
