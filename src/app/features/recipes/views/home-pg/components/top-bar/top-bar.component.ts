import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit, OnDestroy {
  private subscriptioin!: Subscription;
  title: string | undefined = 'List';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.subscriptioin = this.router.events.subscribe(() => {
      this.title = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    });
  }
  goToFormPg() {
    this.router.navigate(['/home', 'form']);
  }
  goToListPg() {
    this.router.navigate(['/home', 'list']);
  }
  ngOnDestroy() {
    this.subscriptioin.unsubscribe();
  }
}
