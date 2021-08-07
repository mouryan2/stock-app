import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Tyre } from '../models/Tyre.model';
import { TyresService } from '../services/tyres.service';

export interface TyreData {
  description: string;
  stockQuantity: number;
  unitPrice: number;
}

@Component({
  selector: 'app-tyres',
  templateUrl: './tyres.component.html',
  styleUrls: ['./tyres.component.css']
})
export class TyresComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['description', 'stockQuantity', 'unitPrice'];
  dataSource: MatTableDataSource<TyreData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tyres:Tyre[]=[];

  constructor(private tyreService : TyresService) {}

  ngOnInit(){
    
    this.tyreService.getTyres().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } );
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


