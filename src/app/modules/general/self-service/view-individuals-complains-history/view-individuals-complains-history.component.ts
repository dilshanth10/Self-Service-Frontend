import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { SelfServiceUser } from 'src/app/models/self-service/self-service-user';
import { SelfService } from 'src/app/models/self-service/self-service';


@Component({
  selector: 'app-view-individuals-complains-history',
  templateUrl: './view-individuals-complains-history.component.html',
  styleUrls: ['./view-individuals-complains-history.component.css']
})
export class ViewIndividualsComplainsHistoryComponent implements OnInit {

  dataSource = new SelfServiceUserDataSource(this.selfServiceService)
  displayedColumns: string[] = ['date', 'type','status','description','reply'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private selfServiceService:SelfServiceService) { }

  ngOnInit() {
  
  }

}


export class SelfServiceUserDataSource extends DataSource<any>{
  constructor(private selfServiceService:SelfServiceService){
    super();
  }
  connect():Observable<SelfService[]>{
    return this.selfServiceService.getSelfServiceByUser(1);
  }
  disconnect(){}
}
