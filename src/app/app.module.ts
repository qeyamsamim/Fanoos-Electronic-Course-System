import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './components/students-interface/authentication/login/login.component';
import { RegisterComponent } from './components/students-interface/authentication/register/register.component';
import { AuthenticationComponent } from './components/students-interface/authentication/authentication.component';
import { LoginSignupTabsComponent } from './components/students-interface/authentication/login-signup-tabs/login-signup-tabs.component';
import { DescriptionAuthComponent } from './components/students-interface/authentication/description-auth/description-auth.component';
import { HomeComponent } from './components/students-interface/home/home.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { SideBarComponent } from './components/students-interface/home/side-bar/side-bar.component';
import { AllClassesComponent } from './components/students-interface/home/all-classes/all-classes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MyClassesComponent } from './components/students-interface/home/my-classes/my-classes.component';
import { GradesComponent } from './components/students-interface/home/grades/grades.component';
import { MyCertificatesComponent } from './components/students-interface/home/my-certificates/my-certificates.component';
import { ProfileComponent } from './components/students-interface/home/profile/profile.component';
import { ClassListingComponent } from './shared/components/class-listing/class-listing.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizesComponent } from './components/students-interface/home/quizes/quizes.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClassDetailComponent } from './components/students-interface/home/my-classes/class-detail/class-detail.component';
import { ClassAccordionComponent } from './components/students-interface/home/my-classes/class-detail/class-accordion/class-accordion.component';
import { ClassPaymentComponent } from './components/students-interface/home/class-payment/class-payment.component';
import { TrainingPolicyComponent } from './components/students-interface/home/training-policy/training-policy.component';
import { PaymentComponent } from './components/students-interface/home/payment/payment.component';
import { AdminHomeComponent } from './components/admin-panel/admin-home/admin-home.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { SpinnerBoxComponent } from './shared/components/spinner-box/spinner-box.component';
import { LoginFormComponent } from './components/admin-panel/login-form/login-form.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminClasssesComponent } from './components/admin-panel/admin-classses/admin-classses.component';
import { AdminUsersComponent } from './components/admin-panel/admin-users/admin-users.component';
import { StudentsListComponent } from './components/admin-panel/students-list/students-list.component';
import { RegisterAdminsComponent } from './components/admin-panel/admin-users/register-admins/register-admins.component';
import { AdminsListComponent } from './components/admin-panel/admin-users/admins-list/admins-list.component';
import { AdminClassListComponent } from './components/admin-panel/admin-classses/admin-class-list/admin-class-list.component';
import { AdminClassPostComponent } from './components/admin-panel/admin-classses/admin-class-post/admin-class-post.component';
import { AdminHeaderComponent } from './components/admin-panel/admin-header/admin-header.component';
import { StudentsInterfaceComponent } from './components/students-interface/students-interface.component';
import { InstructorsInterfaceComponent } from './components/instructors-interface/instructors-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    LoginSignupTabsComponent,
    DescriptionAuthComponent,
    HomeComponent,
    MainHeaderComponent,
    SideBarComponent,
    AllClassesComponent,
    MyClassesComponent,
    GradesComponent,
    MyCertificatesComponent,
    ProfileComponent,
    ClassListingComponent,
    FilterPipe,
    QuizesComponent,
    FooterComponent,
    ClassDetailComponent,
    ClassAccordionComponent,
    ClassPaymentComponent,
    TrainingPolicyComponent,
    PaymentComponent,
    AdminHomeComponent,
    LoadingSpinnerComponent,
    SpinnerBoxComponent,
    AdminPanelComponent,
    LoginFormComponent,
    AdminClasssesComponent,
    AdminUsersComponent,
    StudentsListComponent,
    RegisterAdminsComponent,
    AdminsListComponent,
    AdminClassListComponent,
    AdminClassPostComponent,
    AdminHeaderComponent,
    StudentsInterfaceComponent,
    InstructorsInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
