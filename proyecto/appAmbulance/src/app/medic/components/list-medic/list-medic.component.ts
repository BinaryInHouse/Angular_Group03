import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';
import { MedicService } from '../../../services/medic.service';
import { mappingMedic, MedicDto } from '../../../dtos/medic.dto';
import metaDataListMedicsJSON from '../../../../assets/jsons/metadata-medics.json';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  @Output() onEditMedic = new EventEmitter();

  dataSource: MedicDto[] = [];

  metaDataListMedics: MetaDataTableItem[] = metaDataListMedicsJSON;

  constructor(private readonly medicService: MedicService) {}

  ngOnInit(): void {
    this.medicService.getAll().subscribe(
      (response) => {
        this.dataSource = mappingMedic(response) as MedicDto[];
      },
      (error) => console.log(error)
    );
  }

  action(actionButton: string, data: MedicDto): void {
    switch (actionButton) {
      case 'EDITAR':
        this.onEditMedic.emit(data);
        break;
      case 'ELIMINAR':
        break;
    }
  }

  openForm(): void {}
}
