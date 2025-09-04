import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-[#F8F9FA]">
      <!-- Header -->
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="text-2xl font-bold text-emerald-600">Soona</span>
            </a>
          </div>
          <div class="flex gap-x-6">
            <a href="#features" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
            <a routerLink="/auth/signin" class="text-sm font-semibold leading-6 text-emerald-600">
              Sign in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <!-- Main content -->
      <main>
        <!-- Hero section -->
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Personal Sunnah Worship Tracker
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                "The most beloved deeds to Allah are those that are consistent, even if they are few."
                <span class="block mt-2 text-sm text-gray-500">(Sahih Bukhari & Muslim)</span>
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a routerLink="/auth/signin" 
                   class="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                  Start Your Journey
                </a>
                <a href="#features" class="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Features section -->
        <div id="features" class="py-24 bg-white sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-emerald-600">Track Your Progress</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to enhance your spiritual journey
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <!-- Prayer Tracking -->
                <div class="flex flex-col">
                  <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg class="h-5 w-5 flex-none text-emerald-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Prayer & Worship Tracking
                  </dt>
                  <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p class="flex-auto">Track your Sunnah prayers, fasting days, charity, and Quran recitation with ease.</p>
                  </dd>
                </div>
                <!-- Smart Reminders -->
                <div class="flex flex-col">
                  <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg class="h-5 w-5 flex-none text-emerald-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    Smart Reminders
                  </dt>
                  <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p class="flex-auto">Receive gentle reminders with hadith snippets for your daily Sunnah practices.</p>
                  </dd>
                </div>
                <!-- Analytics -->
                <div class="flex flex-col">
                  <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg class="h-5 w-5 flex-none text-emerald-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    Analytics & Insights
                  </dt>
                  <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p class="flex-auto">Track your progress with beautiful visualizations and meaningful insights.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <!-- About section -->
        <div id="about" class="bg-emerald-50 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-emerald-600">About Soona</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Making Sunnah worship a natural part of daily life
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Soona is not just a tracker — it's a reflection tool that motivates users with gentle reminders, 
                progress analytics, and community-inspired encouragement, making Sunnah worship a natural part of daily life.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA section -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div class="relative isolate overflow-hidden bg-emerald-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start your spiritual journey today
              </h2>
              <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
                Join thousands of Muslims enhancing their Sunnah worship with Soona.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a routerLink="/auth/signin" 
                   class="rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white">
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div class="mt-8 md:order-1 md:mt-0">
            <p class="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 Soona. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class LandingComponent {}
