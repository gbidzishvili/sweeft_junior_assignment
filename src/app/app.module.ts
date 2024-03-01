import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomePgModule } from './features/recipes/views/home-pg/home-pg.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,HomePgModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
