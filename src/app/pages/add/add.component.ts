import { Component, OnInit } from '@angular/core';
import { StateserviceService } from 'src/app/services/stateservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public _state:StateserviceService) { }

  ngOnInit(): void {
    
  }

}
