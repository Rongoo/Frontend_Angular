import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="sdasd";
  password:string="";
  constructor(private validator:ValidatorService, private router: Router) { }

  ngOnInit(): void {
  }

  validate():void{
    if(this.validator.validate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
    }
  }
}
