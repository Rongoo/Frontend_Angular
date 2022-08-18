import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"welcome/:name",component:WelcomeComponent, canActivate: [RouteGuardService]},
  {path:"todos/:name",component:ListTodosComponent, canActivate: [RouteGuardService]},
  {path:"logout",component:LogoutComponent, canActivate: [RouteGuardService]},
  {path:"add",component:AddComponent, canActivate: [RouteGuardService]},
  {path:"update/:id",component:UpdateComponent, canActivate: [RouteGuardService]},
  {path:"**",component:ErrorComponent, canActivate: [RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
