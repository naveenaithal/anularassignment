import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {


  userdata:any={}

  constructor(private _router:Router,public http:HttpClient) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.userdata)

    
    this.http.post('http://localhost:3000/users', this.userdata).subscribe((res) => {
      console.log(res)

    })

    
    alert("Registration success")
    this._router.navigate([''])
    
  }
  

}
