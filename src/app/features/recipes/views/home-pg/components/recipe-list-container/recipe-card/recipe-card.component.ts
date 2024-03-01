import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/home', 'details']);
  }
}
