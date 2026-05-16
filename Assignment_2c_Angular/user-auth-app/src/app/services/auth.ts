import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // A Signal to hold the current user globally
  currentUser = signal<User | null>(null);

  registerUser(user: User): void {
    // Storing in localStorage to simulate a database
    localStorage.setItem('user_db', JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const data = localStorage.getItem('user_db');
    if (data) {
      const user: User = JSON.parse(data);
      if (user.email === email && user.password === password) {
        this.currentUser.set(user); // Update the global signal
        return true;
      }
    }
    return false;
  }

  logout() {
    this.currentUser.set(null);
  }
}

export default AuthService;