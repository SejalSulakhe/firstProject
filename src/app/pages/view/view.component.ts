import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateserviceService } from 'src/app/services/stateservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewIndex=-1;
  studentview:any={};

  constructor(public _state:StateserviceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.viewIndex=data['index'];
    })
    this.studentview=this._state.students[this.viewIndex];
  }

}
