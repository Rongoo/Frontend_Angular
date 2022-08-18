import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatorService } from '../validator.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[] =[]

  message:string=""
 

  constructor(private validator: ValidatorService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  isUserLogedIn():boolean{
    return this.validator.isUserLogedIn();
  }

  update(id:number){
    this.router.navigate(['/update',id]);
  }
  delete(id:number){
    let user = sessionStorage.getItem('authenticatedUser');
    this.http.delete(`http://localhost:8080/todos/${user}/${id}`).subscribe(respone=>{
      this.message=`Todo ${id} deleted!`
      this.refreshTodos()
    })
    
  }
  
  refreshTodos(){
    let user = sessionStorage.getItem('authenticatedUser');
    this.http.get<Todo[]>(`http://localhost:8080/todos/${user}`).subscribe(list => this.todos=list);
  }

  add(){
    this.router.navigate(['/add']);
  }
}

