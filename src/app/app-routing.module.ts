import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/students-interface/authentication/authentication.component';
import { LoginComponent } from './components/students-interface/authentication/login/login.component';
import { RegisterComponent } from './components/students-interface/authentication/register/register.component';
import { AllClassesComponent } from './components/students-interface/home/all-classes/all-classes.component';
import { GradesComponent } from './components/students-interface/home/grades/grades.component';
import { HomeComponent } from './components/students-interface/home/home.component';
import { MyCertificatesComponent } from './components/students-interface/home/my-certificates/my-certificates.component';
import { MyClassesComponent } from './components/students-interface/home/my-classes/my-classes.component';
import { ProfileComponent } from './components/students-interface/home/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: AllClassesComponent },
      { path: 'my-classes', component: MyClassesComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'my-certificates', component: MyCertificatesComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
