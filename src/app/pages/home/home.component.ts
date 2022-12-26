import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateserviceService } from 'src/app/services/stateservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public _state: StateserviceService, public _route: Router) { }

  ngOnInit(): void {
  }

}
