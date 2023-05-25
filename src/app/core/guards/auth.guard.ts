import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: "root"
})
class AuthGuard {

    constructor(private auth: AuthService,
        private router: Router) { }

    canActivateFacesnaps(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.auth.getToken();
        if (token) {
            return true;
        } else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
}

export const canActivateFacesnaps: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

        return inject(AuthGuard).canActivateFacesnaps(route, state);

    };