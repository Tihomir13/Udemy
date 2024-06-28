import { Component, DestroyRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.contains('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(6), Validators.required],
    }),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  ngOnInit() {
    const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);

      // Reactive way
      this.form.patchValue({
        email: loadedForm.email,
      });

      // Regular way
      this.form.controls.email.setValue(loadedForm.email);
    }

    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          );
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe);
  }

  onSubmit() {}
}
