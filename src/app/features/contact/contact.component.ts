import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormUtils } from '../../../shared/utils/form.utils';
import { EmailService } from '../../../shared/services/email.service';

import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, NgOptimizedImage],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private emailService = inject(EmailService);

  mainImageLoaded = signal<boolean>(false);

  status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  errorMessage = signal<string>('');

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  formUtils: typeof FormUtils = FormUtils;

  onMainImageLoad() {
    this.mainImageLoaded.set(true);
    console.log('image loaded');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload = { ...this.contactForm.value };

    this.status.set('loading');

    this.emailService.sendContactForm(payload).subscribe({
      next: (resp) => {
        if (!resp.status) {
          this.status.set('error');
          this.errorMessage.set('Hubo un error al enviar');
          return;
        }
        this.status.set('success');
      },
      error: (err) => {
        this.status.set('error');
        this.errorMessage.set(`Hubo un error al enviar, intente de nuevo`);
        setTimeout(() => this.status.set('idle'), 2500);
      },
      complete: () => {
        this.contactForm.reset();
        setTimeout(() => {
          this.status.set('idle');
          this.router.navigate(['/']);
        }, 1500);
      },
    });
  }
}
