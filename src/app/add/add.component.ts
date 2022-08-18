import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name:string=""
  message:string=""
  date:Date=new Date()
  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  saveTodo() {
    let user = sessionStorage.getItem('authenticatedUser')
    user = user? user : ""
    if(user===""){
      this.message="An error has ocured! Please try to relog."
    } else if(this.name===""){
      this.message="Please enter a name for your todo!"
    }else{
      let todo = new Todo(-1,this.name,user,this.date,false);
      this.http.put(`http://localhost:8080/todos/${user}`,todo).subscribe(response =>{console.log(response)});
      this.router.navigate([`/todos/${user}`])
    }
}
}
