import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Fragment jumps are handled by Home, because desktop scrolls horizontally
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
