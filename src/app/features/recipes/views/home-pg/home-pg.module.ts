import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgRoutingModule } from './home-pg-routing.module';
import { MaterialImportsModule } from './material-imports.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './components/recipe-list/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HomePgComponent } from './home-pg.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    HomePgComponent,
    RecipeFormComponent,
    TopBarComponent,
    PageNotFoundComponent,
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
