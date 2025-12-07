import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
	providers: [provideZoneChangeDetection(),importProvidersFrom(BrowserModule, RouterModule.forRoot(routes)), provideHttpClient(withFetch())],
}).catch((err) => console.error(err));
