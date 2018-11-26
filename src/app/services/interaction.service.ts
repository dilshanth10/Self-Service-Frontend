import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { SelfServiceType } from './../models/self-service/self-service-type';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SelfService } from 'src/app/models/self-service/self-service';

@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
  private selfServiceTypeDataSource = new Subject<SelfServiceType>();
  private msgDataSource = new Subject<string>();
  private selfServiceDataSource = new Subject<SelfService>();

  loggedInSource$ = this.loggedInSource.asObservable();
  selfServiceTypeDataSource$ = this.selfServiceTypeDataSource.asObservable();
  selfServiceDataSource$= this.selfServiceDataSource.asObservable();

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }
  sendSelfServiceType(selfServiceType:SelfServiceType){
    return this.selfServiceTypeDataSource.next(selfServiceType);
  }
  sendSelfService(selfService:SelfService){
    return this.selfServiceDataSource.next(selfService);
  }
  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }
}
