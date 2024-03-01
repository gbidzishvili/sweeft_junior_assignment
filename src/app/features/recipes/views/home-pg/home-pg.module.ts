import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { MaterialImportsModule } from './material-imports.module';
import { RecipeListContainerComponent } from './recipe-list-container/recipe-list-container.component';
import { RecipeCardComponent } from './recipe-list-container/recipe-card/recipe-card.component';

@NgModule({
  declarations: [RecipeListContainerComponent, RecipeCardComponent],
  imports: [CommonModule, HomePgRoutingModule, MaterialImportsModule],
  exports: [RecipeListContainerComponent],
})
export class HomePgModule {}
