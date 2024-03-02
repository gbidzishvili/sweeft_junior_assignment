import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RecipeServiceService } from '../../../../services/recipe-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  imageurl!: string | ArrayBuffer | null;
  fileName!: string;
  recipeForm!: FormGroup;
  formSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      image: [null, Validators.required],
      name: [null],
      time: [null],
      portion: [null],
      level: [null],
      vegie: [false],
      ingredients: this.fb.array([new FormControl()]),
      directions: this.fb.array([new FormControl()]),
    });
  }
  getIngredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  getNewIngredient(): FormControl {
    return new FormControl();
  }
  getDirections(): FormArray {
    return this.recipeForm.get('directions') as FormArray;
  }
  getNewDirection(): FormControl {
    return new FormControl();
  }
  addNewIngredientBtnClidk(): void {
    this.getIngredients().push(this.getNewIngredient());
  }
  removeIngredientBtnClick(ingredientIndex: number) {
    this.getIngredients().removeAt(ingredientIndex);
  }
  addNewDirectionBtnClidk(): void {
    this.getDirections().push(this.getNewDirection());
  }
  removeDirectionBtnClick(directionIndex: number) {
    this.getDirections().removeAt(directionIndex);
  }
  onFileSelected(event: Event) {
    const fileInputElement = event.target as HTMLInputElement;
    if (fileInputElement.files?.[0]) {
      this.fileName = fileInputElement.files?.[0].name;
      var reader = new FileReader();
      reader.onloadend = () => {
        var baseStringResut = reader.result as string;
        this?.recipeForm.get?.('image')?.setValue(baseStringResut);
        console.log(this.recipeForm.get('image'));
      };
      reader.readAsDataURL(fileInputElement.files[0]);
    }
  }

  onFormsubmit() {
    console.log(this.recipeForm.valid);

    this.formSubscription = this.recipeService
      .createRecipe(this.recipeForm.value)
      .subscribe();
    // this.router.navigate(['/home', 'list']);
    console.log(this.recipeForm.value);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
