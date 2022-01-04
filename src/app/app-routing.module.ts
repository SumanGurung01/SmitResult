import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeveloperComponent } from './developer/developer.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path : "result" , component : ResultComponent},
  {path : "login" , component : LoginComponent},
  {path : "developer" , component: DeveloperComponent},
  {path:'',redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
