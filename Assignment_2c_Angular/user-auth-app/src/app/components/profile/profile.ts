import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html'
})
export class ProfileComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  // We access the data using the Signal we created in the service
  user = this.authService.currentUser;

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

export class Profile {}
