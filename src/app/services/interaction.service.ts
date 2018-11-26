import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SelfServiceService } from './self-service.service';
import { SelfServiceType } from '../model/self-service-type';
import { SelfService } from '../model/self-service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
  private selfServiceTypeDataSource = new Subject<SelfServiceType>();
  private msgDataSource = new Subject<string>();
  private selfServiceDataSource = new Subject<SelfServiceService>();
  

  loggedInSource$ = this.loggedInSource.asObservable();
  selfServiceTypeDataSource$ = this.selfServiceTypeDataSource.asObservable();
  selfServiceDataSource$= this.selfServiceDataSource.asObservable();

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }
  sendSelfServiceType(selfServiceType:SelfServiceType){
    return this.selfServiceTypeDataSource.next(selfServiceType);
  }
  // sendSelfService(selfService:SelfService){
  //   return this.selfServiceDataSource.next(selfService);
  // }
  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }
}
