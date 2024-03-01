import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './features/recipes/views/home-pg/home-pg.component';
import { MatCardModule } from '@angular/material/card';
import { HomePgModule } from './features/recipes/views/home-pg/home-pg.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const materialModules = [MatCardModule];

@NgModule({
  declarations: [AppComponent, HomePgComponent],
  imports: [BrowserModule, AppRoutingModule, HomePgModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
