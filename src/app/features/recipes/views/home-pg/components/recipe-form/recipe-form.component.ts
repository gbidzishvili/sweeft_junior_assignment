import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { RecipeServiceService } from '../../../../services/recipe-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  recipeForm!: FormGroup;
  formSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      image: [''],
      name: [''],
      time: [''],
      portion: [''],
      level: [''],
      vegie: [false],
    });
  }

  onFormsubmit() {
    this.formSubscription = this.recipeService
      .createRecipe(this.recipeForm.value)
      .subscribe();
    console.log(this.recipeForm.value);
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
