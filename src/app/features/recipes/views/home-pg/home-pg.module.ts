import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { MaterialImportsModule } from './material-imports.module';
import { RecipeListContainerComponent } from './components/recipe-list-container/recipe-list-container.component';
import { RecipeCardComponent } from './components/recipe-list-container/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HomePgComponent } from './home-pg.component';

@NgModule({
  declarations: [
    RecipeListContainerComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    HomePgComponent,
  ],
  imports: [CommonModule, HomePgRoutingModule, MaterialImportsModule],
})
export class HomePgModule {}
