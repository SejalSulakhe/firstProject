import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateserviceService } from 'src/app/services/stateservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public _state: StateserviceService, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe(params => {
      this._state.editIndex = params['index'];
      this._state.studentForm.patchValue(this._state.students[this._state.editIndex]);
    })
  }

}
