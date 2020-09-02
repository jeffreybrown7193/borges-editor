import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      console.log('yes');
      return true;
    }
    console.log('no');
    this.route.navigate(['user/login']);
    return false;
  }
}
