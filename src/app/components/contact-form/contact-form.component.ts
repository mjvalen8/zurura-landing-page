import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  translations: any = {};
  isSubmitting = false;
  isSubmitted = false;

  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    privacy: false
  };

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(() => {
      this.translations = this.translationService.getTranslations();
    });
  }

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.isSubmitted = false;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.isSubmitted = true;
      
      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }, 2000);
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
      privacy: false
    };
    this.isSubmitted = false;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}