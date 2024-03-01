import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class MaterialImportsModule {}
