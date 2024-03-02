import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './home-pg.component';
import { RecipeListContainerComponent } from './components/recipe-list-container/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePgComponent,
    children: [
      { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
      { path: 'recipe-list', component: RecipeListContainerComponent },
      { path: 'details', component: RecipeDetailsComponent },
      { path: 'form', component: RecipeFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePgRoutingModule {}
