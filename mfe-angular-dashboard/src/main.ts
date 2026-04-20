import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { singleSpaAngular, provideSingleSpaPlatform } from 'single-spa-angular';

// 👇 YEH 2 NAYE IMPORTS ADD KIYE HAIN 👇
import { NgZone } from '@angular/core'; 
import { Router, NavigationStart } from '@angular/router';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return bootstrapApplication(App, {
      providers: [
        ...provideSingleSpaPlatform(),
        ...(appConfig.providers || []) // 👈 TypeScript ko shaant karne ke liye safe spread
      ]
    });
  },
  template: '<app-root></app-root>', 
  
  // 👇 YEH 3 CHEEZEIN SINGLE-SPA KO CHAHIYE HOTI HAIN 👇
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;