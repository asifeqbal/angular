import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent }      from './aboutus/aboutus.component';
import { LoginComponent }      from './login/login.component';
import { StudentComponent }      from './student/student.component';

const routes: Routes = [

{ path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'aboutus',    component: AboutusComponent },
  { path: 'student',    component: StudentComponent },
  { path: 'login',      component: LoginComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
