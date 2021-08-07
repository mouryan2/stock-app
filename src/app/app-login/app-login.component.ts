import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  loggedIn: boolean = false;

  switchLog() {
    this.loggedIn = !this.loggedIn;
  }

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(form: NgForm) {
  }

}

