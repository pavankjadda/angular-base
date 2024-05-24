import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
	providers: [importProvidersFrom(BrowserModule, RouterModule.forRoot(routes), HttpClientModule)],
}).catch((err) => console.error(err));
