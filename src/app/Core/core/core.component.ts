import { Component, OnInit, Output, HostBinding, Input, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.sass']
})
export class CoreComponent implements OnInit {

  isSidebarOpen: boolean = true;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
