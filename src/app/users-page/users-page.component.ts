import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor() { }
  users = [
    { "name": "Ajay", "age": 30 },
    { "name": "Vijay", "age": 40 },
    { "name": "Raju", "age": 50 },
    { "name": "Rajesh", "age": 60 },
    { "name": "Ramesh", "age": 70 },
    { "name": "Danusj", "age": 25 },
  ]

  ngOnInit(): void {
  }

}
