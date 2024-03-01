import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './home-pg.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePgComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePgRoutingModule {}
