import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string;
  name: string;
  surname: string;
  lastname: string;
  cmp: string;
  dni: string;
  email: string;

  group: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl(this.data?.name, Validators.required),
      surname: new FormControl(this.data?.surname, Validators.required),
      lastname: new FormControl(this.data?.lastname, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
    });
    this.title = this.data ? 'Edición' : 'Nuevo';
    this.name = this.data?.name;
    this.surname = this.data?.surname;
    this.lastname = this.data?.lastname;
    this.cmp = this.data?.cmp;
    this.dni = this.data?.dni;
    this.email = this.data?.email;
  }

  save(): void {
    /* const values = this.group.value; */
    const values = this.group.getRawValue();
    console.log('values', values);
  }
}
