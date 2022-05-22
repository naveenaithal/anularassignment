import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {


  userdata:any={}

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.userdata)

    


    
    alert("Registration success")
    this._router.navigate([''])
    
  }
  

}
