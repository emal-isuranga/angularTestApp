import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  angForm: FormGroup;
  @ViewChild(NavComponent, {static: false}) hello: NavComponent;

  name = "test"

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      email: [''],
      name: ['']
    });
  }

  onClickSubmit(email, password) {
    alert('Your Email is : ' + email);
  }

}
