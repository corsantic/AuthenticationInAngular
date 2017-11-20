import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  canActivate(){
if(this.authService.isLoggedIn())return true;

this.router.navigate(['/login'],{queryParams:{returnUrl:''}});
return false;

  }

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }


}
