import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
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
      image: [null],
      name: [''],
      time: [''],
      portion: [''],
      level: [''],
      vegie: [false],
    });
  }
  onFileSelected(event: Event) {
    // let file = (event.target as HTMLInputElement)?.files?.[0];
    // if (file) {
    //   this.fileName = file.name;
    //   // Create a temporary image source using a FileReader
    //   const reader = new FileReader();
    //   reader.onloadend = (_event) => {
    //     console.log(reader.result);
    //     this.imageurl = reader.result as string; // Assign data URL to imageSrc
    //   };
    //   reader.readAsDataURL(file); // Read the file as a data URL

    const fileInputElement = event.target as HTMLInputElement;
    if (fileInputElement.files && fileInputElement.files[0]) {
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
    this.formSubscription = this.recipeService
      .createRecipe(this.recipeForm.value)
      .subscribe();
    this.router.navigate(['/home', 'list']);
    console.log(this.recipeForm.value);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
