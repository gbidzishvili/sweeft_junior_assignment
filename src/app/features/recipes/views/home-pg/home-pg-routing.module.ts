import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './home-pg.component';
import { RecipeListContainerComponent } from './components/recipe-list-container/recipe-list-container.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePgComponent,
    children: [
      { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
      { path: 'recipe-list', component: RecipeListContainerComponent },
      { path: 'details', component: RecipeDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePgRoutingModule {}
