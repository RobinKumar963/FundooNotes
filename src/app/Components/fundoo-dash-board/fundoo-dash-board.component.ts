import { Component, OnInit, Output } from '@angular/core';
import { DataExchangeService } from 'src/app/Services/DataExchange/data-exchange.service';

@Component({
  selector: 'app-fundoo-dash-board',
  templateUrl: './fundoo-dash-board.component.html',
  styleUrls: ['./fundoo-dash-board.component.scss']
})
export class FundooDashBoardComponent implements OnInit {

  constructor(private dataExchange: DataExchangeService) { }

  currentLoggedInUsers:string;
  currentProfileImageLink:string;
  clickedlabelName:string;
   contentStatus:string;

  receiveMessage($event) {
    this.contentStatus = $event
  }
  receiveLabelName($event) {
    this.clickedlabelName=$event;
  }
  ngOnInit() {
     this.dataExchange.currentMessage.subscribe(message => this.currentLoggedInUsers = message);
     this.dataExchange.profileImageLink.subscribe(message => this.currentProfileImageLink = message);

  }

}
