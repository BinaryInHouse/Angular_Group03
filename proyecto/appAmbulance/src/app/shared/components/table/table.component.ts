import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataSource = [];
  @Input() metaDataTable: MetaDataTableItem[] = [];

  listFields = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.listFields = this.metaDataTable.map((item) => item.field);
  }
}
