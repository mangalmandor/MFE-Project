import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { singleSpaAngular, provideSingleSpaPlatform } from 'single-spa-angular';

import { NgZone } from '@angular/core'; 
import { Router, NavigationStart } from '@angular/router';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return bootstrapApplication(AppComponent, {
      providers: [
        ...provideSingleSpaPlatform(),
        ...(appConfig.providers || [])
      ]
    });
  },
  template: '<app-root></app-root>', 

  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;