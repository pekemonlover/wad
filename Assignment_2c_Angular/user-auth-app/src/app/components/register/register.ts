import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})

export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = { username: '', email: '', password: '' };

  handleRegister() {
    this.authService.registerUser(this.user);
    alert('Registration successful! Redirecting to login...');
    this.router.navigate(['/login']);
  }
}

export class Register {}
