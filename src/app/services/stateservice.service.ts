import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateserviceService {
  students: any[] = [{
    firstName: "sejal",
    lastName: "sulakhe",
    age: 22,
    gender: "female",
    mobile: 9373915508,
    address: "Pune"
  }];
  editIndex = -1;
  index: number = -1;
  isLogin = false;

  studentForm: FormGroup;

  constructor(private _actrouter: ActivatedRoute, private _rout: Router) {
    this.studentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      age: new FormControl('', [Validators.required, Validators.min(5), Validators.max(20)]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      address: new FormControl('', [Validators.required])

    })

  }

  addstudent() {
    if (this.studentForm.valid) {

      this.students.push(this.studentForm.value);
      this.studentForm.reset;
      this._rout.navigate(['/home']);

    }
    else {
      alert('invalid')
    }
  }

  editStudent() {
    this.editIndex = this.index;
    this.studentForm.patchValue(this.students[this.index]);
  }
  updateStudent() {
    if (this.studentForm.valid) {
      this.students[this.editIndex] = this.studentForm.value;
      this.studentForm.reset;
      this.editIndex = -1;

    }
  }

  deleteStudent(i: number) {
    if (confirm("Are you sure you want to delete this student?")) {
      this.students.splice(i, 1);
    }
  }
}
