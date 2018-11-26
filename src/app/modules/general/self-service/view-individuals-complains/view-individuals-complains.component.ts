import { Component, OnInit } from '@angular/core';
import { SelfServiceService } from 'src/app/services/self-service.service';
import { SelfService } from 'src/app/model/self-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-individuals-complains',
  templateUrl: './view-individuals-complains.component.html',
  styleUrls: ['./view-individuals-complains.component.css']
})
export class ViewIndividualsComplainsComponent implements OnInit {

  constructor(private selfServiceService: SelfServiceService,private userService:UserService) { }
  selfService: SelfService[];
  selfServiceObj = new SelfService();
 
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

}
