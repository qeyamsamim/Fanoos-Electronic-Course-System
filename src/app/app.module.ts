import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
