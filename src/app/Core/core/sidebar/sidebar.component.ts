import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Input() @HostBinding('class.--open') isSidebarOpen: boolean;
  private openedMenus = new Set<string>();

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  toggleMenu(menu: string) {
    if (this.isMenuOpen(menu)) {
      this.closeMenu(menu);
    } else {
      this.openMenu(menu);
    }
  }

  isMenuOpen(menu: string) {
    return this.openedMenus.has(menu);
  }

  openMenu(menu: string) {
    this.openedMenus.add(menu);
  }

  closeMenu(menu: string) {
    this.openedMenus.delete(menu);
  }

  logout() {
    this.authService.SignOut();
  }
}
