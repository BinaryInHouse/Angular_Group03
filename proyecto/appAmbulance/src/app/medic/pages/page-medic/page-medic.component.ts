import { Component, OnInit } from '@angular/core';
import { KeyPad } from '../../../interfaces/keypad.interface';

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

  constructor() {}

  ngOnInit(): void {}

  action(actionButton: string): void {
    switch (actionButton) {
      case 'ADD':
        break;
    }
  }
}
