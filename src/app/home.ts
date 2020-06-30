import {Component, OnInit, ViewEncapsulation, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {GlobalTaxonomy, TAXONOMY_DATA } from './taxonomy';


@Component({
  selector: 'ng-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit {

  @Input() source = '';
  @Input() translation = '';
  @Output('rowselected') rowselected = new EventEmitter<any>();
  selectedRow = "";
  selectRow(row) {
      this.selectedRow = row;
  }


  onSubmit(){
    this.rowselected.emit(this.selectedRow);
    console.log('emitting event row:' + JSON.stringify(this.selectedRow));
  }

  constructor() { }

  displayedColumns: string[] = ['Level3','Level4'];
  dataSource = new MatTableDataSource(TAXONOMY_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  Level2List= ["All","Fruit-Vegetables","Meats"]

  onTabChange(event) {
    var filter_value = this.Level2List[event]
    if (event == 0){
      this.dataSource = new MatTableDataSource(TAXONOMY_DATA);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }else{
      var filteredArray = TAXONOMY_DATA.filter(function(itm){
         return itm.Level2 == filter_value;
      });
      this.dataSource = new MatTableDataSource(filteredArray);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
