import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent implements OnInit {
  @Input()
  control!: AbstractControl<any, any> | null;
  errorMessage!: string;
  ngOnInit() {
    this.control?.statusChanges.subscribe(() => {
      this.errorMessage = this.getErrorMessage();
    });
  }
  getErrorMessage(): string {
    // let obj = {
    //   required: 'This field is required',
    //   maxlength: `Max length ${this.control?.errors?.['maxlength']?.requiredLength} characters`,
    //   pattern: 'Use English letters',
    // };
    console.log('rame');
    this.control = this.control as FormControl;
    console.log(this.control.errors);
    if (this.control?.errors?.['required']) {
      return 'This field is required';
    }
    if (this.control?.errors?.['maxlength']) {
      return `Max length ${this.control.errors['maxlength'].requiredLength} characters`;
    }
    if (this.control?.errors?.['pattern']) {
      return 'Use English letters';
    }

    // Object.entries(obj)
    // Add other error types as needed
    return '';
  }
}
