import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  constructor(private http: HttpClient) {}

  createRecipe() {}
  getRecipes(): Observable<any> {
    return this.http.get('http://localhost:3000/recipes');
  }
  updateRecipe() {}
  deleteRecipe() {}
}
