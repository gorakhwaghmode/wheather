import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { WhetherComponent } from './whether/whether.component';

const routes: Routes = [
  {path:'emp', component:LoginComponent},
  {path:'', component:EmpComponent},
  {path:'mandy', component:WhetherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
