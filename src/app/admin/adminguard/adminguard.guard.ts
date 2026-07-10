import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authservice : AdminauthService,private router : Router,private toastr : ToastrService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.authservice.getadmintoken() != null)
    {
        return true
    }
    else{
        this.toastr.warning('Please login to access this page')
        // Route to admin login for admin paths, user login for layout paths
        if(state.url.startsWith('/admin'))
        {
          this.router.navigateByUrl("/admin/admin-login")
        }
        else
        {
          this.router.navigateByUrl("/layout/user-login")
        }
        return false
    }
  }
}
