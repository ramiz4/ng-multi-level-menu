import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-multi-level-menu',
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf],
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss'],
})
export class MultiLevelMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  @Input() direction: 'ltr' | 'rtl' = 'ltr';
  activeMenu: any[] = [];

  ngOnInit() {
    if (this.menuItems) {
      this.activeMenu.push(this.menuItems);
    }
  }

  navigateTo(menu: any) {
    if (menu.children && menu.children.length) {
      this.activeMenu.push(menu.children);
    }
  }

  navigateBack() {
    if (this.activeMenu.length > 1) {
      this.activeMenu.pop();
    }
  }

  isSubmenuActive() {
    return this.activeMenu.length > 1;
  }
}
