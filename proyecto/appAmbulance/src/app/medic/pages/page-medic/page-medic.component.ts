import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeyPad } from '../../../interfaces/keypad.interface';
import { FormMedicComponent } from '../../components/form-medic/form-medic.component';
import { Modal } from '../../../classes/modal';

@Component({
  selector: 'app-page-medic',
  templateUrl: './page-medic.component.html',
  styleUrls: ['./page-medic.component.css'],
})
export class PageMedicComponent implements OnInit {
  listKeyPad: KeyPad[] = [
    {
      tooltip: 'AGREGAR MÉDICO',
      icon: 'add',
      action: 'ADD',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openForm(data: any = null): void {
    Modal.openModal(this.dialog, FormMedicComponent, {
      panelClass: 'modal',
      disableClose: true,
      data,
    });
  }

  action(actionButton: string): void {
    switch (actionButton) {
      case 'ADD':
        this.openForm();
        break;
    }
  }
}
