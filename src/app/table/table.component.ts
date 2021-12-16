import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MockyService } from '../mocky.service';

export interface TableData {
  country: string;
  litres: number;

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private data: MockyService) { }

  ELEMENT_DATA!: TableData[];
  displayedColumns: string[] = ["country", "litres"];
  dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);


  ngOnInit() {
    this.getAllData();
  }

  public getAllData() {
    let resp = this.data.getData();
    resp.subscribe(report => this.dataSource.data = report["tableData"] as TableData[]);
  }

}
