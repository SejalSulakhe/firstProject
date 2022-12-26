import { Component, OnInit } from '@angular/core';
import { StateserviceService } from '../services/stateservice.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(public _state:StateserviceService) { }

  ngOnInit(): void {
  }

}
