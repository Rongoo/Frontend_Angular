import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Todo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  name:string=""
  date:Date=new Date('1990-01-01')
  id:number=-1
  done:boolean=false
  message:string=""

  ngOnInit(): void {
    let user = sessionStorage.getItem('authenticatedUser')
    let id 
    this.route.params.subscribe(params => id=params['id'])
    this.http.get<Todo>(`http://localhost:8080/todos/${user}/${id}`).subscribe(response=>{
      console.log(response)
      this.id=response.id
      this.name=response.name;
      this.done=response.done
      this.date=response.targetDate;
    })
  }

  saveTodo() {
    let user = sessionStorage.getItem('authenticatedUser')
    user = user? user : ""
    if(user===""){
      this.message="An error has ocured! Please try to relog."
    } else if(this.name===""){
      this.message="Please enter a name for your todo!"
    }
    else{
      let todo = new Todo(this.id,this.name,user,this.date,this.done);
      this.http.put(`http://localhost:8080/todos/${user}`,todo).subscribe(response =>{console.log(response)});
      this.router.navigate([`/todos/${user}`])
    }
  }

}
