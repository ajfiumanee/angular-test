import {Component, OnInit, Input, HostBinding, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
