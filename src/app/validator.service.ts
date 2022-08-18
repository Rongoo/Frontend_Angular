import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

validate(username:string,password:string):boolean{
  if(username==="123" && password==="1234"){
    sessionStorage.setItem('authenticatedUser', username);
  return true;
}
return false;
}

isUserLogedIn(){
  let user = sessionStorage.getItem('authenticatedUser');
  if(user === null) return false;
  return true;
}
}
