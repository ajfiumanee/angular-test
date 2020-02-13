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

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  logout() {
    this.authService.SignOut();
  }
}
