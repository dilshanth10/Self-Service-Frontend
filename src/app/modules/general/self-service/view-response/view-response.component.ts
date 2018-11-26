import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { SelfService } from 'src/app/models/self-service/self-service';
import { ResponseService } from 'src/app/services/self-service/response.service';
import { Response } from 'src/app/models/self-service/response';



@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css']
})
export class ViewResponseComponent implements OnInit {
  response: Response[];
  dataSource = new MatTableDataSource<Response>();
  displayedColumns: string[] = ['fullName','createdAt','selfServiceTypeName','status','description','responseview'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private responseService:ResponseService) { }
  ngOnInit() {

    this.responseService.getAllResponse().subscribe(data =>{
      this.dataSource.data = data;
    })

    this.dataSource = new MatTableDataSource<any>(this.response);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

