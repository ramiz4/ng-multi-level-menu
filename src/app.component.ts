import { Component, OnInit } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { MultiLevelMenuComponent } from './multi-level-menu/multi-level-menu.component';

interface MenuItem {
  title: string;
  link: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MultiLevelMenuComponent],
  template: `
    <app-multi-level-menu [menuItems]="menu" [direction]="'ltr'"></app-multi-level-menu>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menu = this.buildMenuFromRoutes(this.router.config);
  }

  // Recursive function to generate the menu structure from the routes
  buildMenuFromRoutes(routes: Route[], parentPath: string = ''): MenuItem[] {
    //console.log(routes)
    routes = routes.filter((route) => !(route.data as any)?.skipMenuItem);
    console.log(routes);
    return routes.map((route) => {
      const path = route.path ? `${parentPath}/${route.path}` : parentPath;
      const menuItem: MenuItem = {
        title: route.data?.['title'] || 'NO_TITLE',
        link: path,
        children: route.children
          ? this.buildMenuFromRoutes(route.children, path)
          : [],
      };
      return menuItem;
    });
  }
}
