import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <div class="bg-light">
    <div class = "jumbotron">
        <h1>Athlete Profiles</h1>
      <nav class="navbar navbar-light">
        <form class="form-inline">
          <button class="btn btn-sm btn-outline-secondary" type="button" routerLink="/" style="margin: 5px">Add Profile</button>
          <button class="btn btn-sm btn-outline-secondary" type="button" routerLink="/allProfiles" style="margin: 5px">View All Profiles</button>
        </form>
      </nav>
    </div>
    
    <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  {  }
