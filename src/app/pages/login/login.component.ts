import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateserviceService } from 'src/app/services/stateservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _state: StateserviceService , private route : Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }


  login() {
    console.log(this.loginForm.valid);
    if (this.loginForm.controls['username'].value === 'admin' && this.loginForm.controls['password'].value === 'admin') {
      alert("Login Successfully");
      this.route.navigate(['app/home'])
      this._state.isLogin = true;
    } else {
      alert("Login Failed")
      this._state.isLogin = false;
    }
  
  }



}
