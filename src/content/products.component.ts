import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule], // Import RouterModule
  template: `
    <div class="content-wrapper">
      <h1>Products</h1>
      <p>This is some dummy content for the page products.</p>
      <hr>

      <!-- Nested router-outlet for child routes -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ProductsComponent {
  pageTitle: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.pageTitle = data['title']; // Retrieve the title from route data
    });
  }
}
