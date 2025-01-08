import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auth-ang-4f406',
        appId: `${environment.GOOGLE_API_ID}`,
        storageBucket: 'auth-ang-4f406.firebasestorage.app',
        apiKey: `${environment.API_KEY}`,
        authDomain: 'auth-ang-4f406.firebaseapp.com',
        messagingSenderId: '535203440264',
        measurementId: 'G-3FXTG4YYCF',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
