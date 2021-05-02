import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-panel/admin-home/admin-home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthenticationComponent } from './components/students-interface/authentication/authentication.component';
import { LoginComponent } from './components/students-interface/authentication/login/login.component';
import { RegisterComponent } from './components/students-interface/authentication/register/register.component';
import { AllClassesComponent } from './components/students-interface/home/all-classes/all-classes.component';
import { ClassPaymentComponent } from './components/students-interface/home/class-payment/class-payment.component';
import { GradesComponent } from './components/students-interface/home/grades/grades.component';
import { HomeComponent } from './components/students-interface/home/home.component';
import { MyCertificatesComponent } from './components/students-interface/home/my-certificates/my-certificates.component';
import { ClassDetailComponent } from './components/students-interface/home/my-classes/class-detail/class-detail.component';
import { MyClassesComponent } from './components/students-interface/home/my-classes/my-classes.component';
import { ProfileComponent } from './components/students-interface/home/profile/profile.component';
import { QuizesComponent } from './components/students-interface/home/quizes/quizes.component';
import { AuthGuard } from './components/students-interface/authentication/auth.guard';
import { AdminClasssesComponent } from './components/admin-panel/admin-classses/admin-classses.component';
import { StudentsListComponent } from './components/admin-panel/students-list/students-list.component';
import { AdminUsersComponent } from './components/admin-panel/admin-users/admin-users.component';
import { StudentsInterfaceComponent } from './components/students-interface/students-interface.component';
import { InstructorsInterfaceComponent } from './components/instructors-interface/instructors-interface.component';
import { ClassOverviewComponent } from './components/students-interface/home/class-overview/class-overview.component';
import { ClassOutlineComponent } from './components/students-interface/home/class-outline/class-outline.component';
import { ClassScheduleFeeComponent } from './components/students-interface/home/class-schedule-fee/class-schedule-fee.component';
import { ClassPaymentMethodComponent } from './components/students-interface/home/class-payment-method/class-payment-method.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsInterfaceComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AllClassesComponent },
      {
        path: 'my-classes',
        component: MyClassesComponent
      },
      { path: 'quizes', component: QuizesComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'my-certificates', component: MyCertificatesComponent },
      { path: 'profile/:studentId', component: ProfileComponent },
      { path: 'class-detail', component: ClassDetailComponent },
      { path: 'class-payment', component: ClassPaymentComponent, children: [
        { path: '', component: ClassOverviewComponent },
        { path: 'outline', component: ClassOutlineComponent },
        { path: 'schedule-fee', component: ClassScheduleFeeComponent },
        { path: 'payment', component: ClassPaymentMethodComponent }
      ] }
    ]
  },
  {
    path: 'admin-panel', component: AdminPanelComponent
  },
  {
    path: 'admin', component: AdminHomeComponent, children: [
      { path: '', component: AdminClasssesComponent },
      { path: 'students-list', component: StudentsListComponent },
      { path: 'admin-users', component: AdminUsersComponent }
    ]
  },
  {
    path: 'instructors-interface', component: InstructorsInterfaceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        relativeLinkResolution: 'legacy',
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
