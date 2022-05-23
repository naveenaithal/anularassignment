import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(public http:HttpClient) { }
  users = [
    { "name": "Ajay", "age": 30 },
    { "name": "Vijay", "age": 40 },
    { "name": "Raju", "age": 50 },
    { "name": "Rajesh", "age": 60 },
    { "name": "Ramesh", "age": 70 },
    { "name": "Danusj", "age": 25 },
  ]

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe((res:any) => {
      console.log(res[0].name)
for(let i=0;i<res.length;i++){
        this.users.push({name:res[i].name,age:res[i].age})

}
      // this.users.push(res)
    })
  }

}
