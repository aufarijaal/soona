// src/app/auth.store.ts
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' }) // ✅ makes it global
export class AuthStore {
  // state
  private user = signal<{ name: string } | null>({
    name: 'Guest'
  });

  // computed
  isLoggedIn = computed(() => this.user() !== null);

  // actions
  login(name: string) {
    this.user.set({ name });
  }

  logout() {
    this.user.set(null);
  }

  getUser() {
    return this.user();
  }
}
