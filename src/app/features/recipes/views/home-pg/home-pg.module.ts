import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { MaterialImportsModule } from './material-imports.module';
import { RecipeListContainerComponent } from './components/recipe-list-container/recipe-list-container.component';
import { RecipeCardComponent } from './components/recipe-list-container/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HomePgComponent } from './home-pg.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeListContainerComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    HomePgComponent,
    RecipeFormComponent,
  ],
  imports: [
    CommonModule,
    HomePgRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class HomePgModule {}
