import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="content-wrapper">
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  `,
})
export class AboutComponent {}
