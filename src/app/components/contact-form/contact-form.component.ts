import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import emailjs from '@emailjs/browser';

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

  // EmailJS configuration - Outlook/GoDaddy
  // SERVICE_ID: ID del servicio SMTP de Outlook configurado en EmailJS
  private readonly EMAILJS_SERVICE_ID = 'service_oeiws9r';
  // TEMPLATE_ID: ID del template de email en EmailJS
  private readonly EMAILJS_TEMPLATE_ID = 'template_86mozuk';
  // PUBLIC_KEY: Clave pública de tu cuenta EmailJS (NO cambia, es la misma para todos tus servicios)
  private readonly EMAILJS_PUBLIC_KEY = '9_IXVLKYZ20hyTLc8';
  
  // Email destination - Dirección de correo destino (Outlook/GoDaddy)
  private readonly RECIPIENT_EMAIL = 'admin@zururakids.com';

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

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.isSubmitted = false;

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: `${this.formData.firstName} ${this.formData.lastName}`,
        from_email: this.formData.email,
        organization: this.formData.organization || 'Not specified',
        subject: this.getSubjectText(this.formData.subject),
        message: this.formData.message,
        to_email: this.RECIPIENT_EMAIL
      };

      // Send email using EmailJS
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully!');
      this.isSubmitting = false;
      this.isSubmitted = true;
      
      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      this.isSubmitting = false;
      // You might want to show an error message to the user
      alert('Error sending message. Please try again.');
    }
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

  getSubjectText(subjectKey: string): string {
    const subjectMap: { [key: string]: string } = {
      'general': 'General Inquiry',
      'demo': 'Request Demo',
      'support': 'Technical Support',
      'partnership': 'Partnership',
      'deleteAccount': 'Delete Account and Data',
      'dataDeletion': 'Data Deletion',
      'other': 'Other'
    };
    return subjectMap[subjectKey] || 'General Inquiry';
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}