import { MatDialog } from '@angular/material/dialog';

export class Modal {
  static openModal(
    modal: MatDialog,
    component: any,
    options: { [s: string]: string | number | boolean | {} }
  ): void {
    modal.open(component, options);
  }
}
