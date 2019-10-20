import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <div class="container">
                <app-header></app-header>
                <outer-slider></outer-slider>
                <router-outlet></router-outlet>
              </div>
            `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
