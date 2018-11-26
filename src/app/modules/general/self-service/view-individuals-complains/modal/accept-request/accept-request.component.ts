import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { SelfServiceService } from 'src/app/services/self-service.service';
import { SelfService } from 'src/app/model/self-service';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.css']
})
export class AcceptRequestComponent implements OnInit {
  

  constructor(private selfServiceService: SelfServiceService, private interactionService:InteractionService) { }
  selfService: SelfService[];
  selfServiceObj = new SelfService();
 msg: any;
  ngOnInit() {
    this.getSelfServiceByUser();
  }
  getSelfServiceByUser() {
    return this.selfServiceService.getSelfServiceByUser(1).subscribe(
      data => {
        this.selfService = data;
      console.log(data);
      }
    )
  }
  updateId(selfService) {
    console.log(selfService);
    this.selfServiceObj = Object.assign({}, this.selfServiceObj);
  }
  updateSelfServiceByUser() {
    this.selfServiceService.updateSelfServiceByUser(this.selfServiceObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
      this.getSelfServiceByUser();
    })
  }

}
