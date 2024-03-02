import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  title: string | undefined = 'List';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.title = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    });
  }
}
