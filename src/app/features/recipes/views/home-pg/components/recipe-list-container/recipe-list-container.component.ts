import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../../../services/recipe-service.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list-container',
  templateUrl: './recipe-list-container.component.html',
  styleUrl: './recipe-list-container.component.scss',
})
export class RecipeListContainerComponent implements OnInit {
  public recipes$!: Observable<Recipe[]>;
  constructor(private recipeService: RecipeServiceService) {}
  ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }
}
