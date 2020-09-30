import { Component, OnInit } from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';
import { MedicService } from '../../../services/medic.service';
import { mappingMedic, MedicDto } from '../../../dtos/medic.dto';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  dataSource: MedicDto[] = [
    { name: 'Nombre 01', lastname: 'Apellido 01' },
    { name: 'Nombre 02', lastname: 'Apellido 02' },
    { name: 'Nombre 03', lastname: 'Apellido 03' },
    { name: 'Nombre 04', lastname: 'Apellido 04' },
    { name: 'Nombre 05', lastname: 'Apellido 05' },
  ];

  metaDataListMedics: MetaDataTableItem[] = [
    {
      field: 'name',
      title: 'Nombre',
    },
    { field: 'lastname', title: 'Apellido' },
  ];

  constructor(private readonly medicService: MedicService) {}

  ngOnInit(): void {
    this.medicService.getAll().subscribe(
      (response) => {
        this.dataSource = mappingMedic(response) as MedicDto[];
      },
      (error) => console.log(error)
    );
  }
}
