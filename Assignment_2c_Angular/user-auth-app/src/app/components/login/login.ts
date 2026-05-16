import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})

export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  credentials = { email: '', password: '' };

  handleLogin() {
    const success = this.authService.login(this.credentials.email, this.credentials.password);
    if (success) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials!');
    }
  }
}

export class Login {}
