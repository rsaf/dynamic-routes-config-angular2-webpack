import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl:'./app.html'
})
export class AppComponent  {
  name = 'Angular';
  constructor (private router: Router) {
    let routes = [
      {
        path: 'about',
        loadChildren: './components/about/about.module#AboutModule'
      },
      {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
      }
    ]
    router.resetConfig(routes);

    console.log('route.config ----', JSON.stringify(router.config,undefined, 2));

  }
 }
