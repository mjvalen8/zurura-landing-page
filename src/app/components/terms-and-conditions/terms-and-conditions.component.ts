import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent implements OnInit {
  translations: any = {};
  lastUpdated: string = '';
  currentLanguage: 'en' | 'es' = 'en';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.translations = this.translationService.getTranslations();
      this.updateLastUpdated();
    });
    this.currentLanguage = this.translationService.getCurrentLanguage();
    this.updateLastUpdated();
  }

  private updateLastUpdated(): void {
    const locale = this.currentLanguage === 'es' ? 'es-ES' : 'en-US';
    this.lastUpdated = new Date().toLocaleDateString(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
