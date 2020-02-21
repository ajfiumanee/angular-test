import { Component, OnInit,   HostBinding, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { map, tap, filter, mergeMap, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  shouldHideMenus(routeSnapshot = this.activatedRoute.root.snapshot) {
    const hideMenus: boolean = !!routeSnapshot.data['hideMenus'] || routeSnapshot.children.some( c => this.shouldHideMenus(c));
    return hideMenus;
  }

  template$ = this.router.events.pipe(
    startWith(true),
    filter(event => event instanceof NavigationEnd),
    map( () => this.shouldHideMenus() ? 'empty' : 'main'),
  );

  teste = this.activatedRoute.root.snapshot;
  isSidebarOpen: boolean = true;
  constructor(public authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
