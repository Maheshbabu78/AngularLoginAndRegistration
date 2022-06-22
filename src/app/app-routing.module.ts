import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { RegistersucessComponent } from './registersucess/registersucess.component';

const routes: Routes = [

  {path:'loginuser', component:LoginComponent},
  {path:'loginsucess', component:LoginsucessComponent},
  {path:'createuser', component:CreateuserComponent},
  {path:'registersuccess', component:RegistersucessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
