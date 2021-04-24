import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Students } from '../models/students.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  student = new BehaviorSubject<Students>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // This function add new admin to the application.
  singUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // This function logs admin into the application.
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // This function saves authentication details to the local storage and keeps admin logged in until the token expires on the server.
  autoLogin() {
    const adminData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('adminData'));
    if (!adminData) {
      return;
    }
    const loadedAdmin = new Students(
      adminData.email,
      adminData.id,
      adminData._token,
      new Date(adminData._tokenExpirationDate)
    );

    if (loadedAdmin.token) {
      this.student.next(loadedAdmin);
      const expirationDuration =
        new Date(adminData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  // This function logs the admin out of the web application.
  logout() {
    this.student.next(null!);
    this.router.navigate(['/']);
    localStorage.removeItem('adminData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  // AutoLogout function logs admin automatically out of the applicatio after one hour.
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  // This function handles authentication.
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const admin = new Students( email, userId, token, expirationDate);
    this.student.next(admin);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('adminData', JSON.stringify(admin));
  }

  // This function handles error related to registering admin and logging into applicaiton.
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Has Occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This Email Already Exist!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is not correct.'
        break;
    }
    return throwError(errorMessage);
  }
}
