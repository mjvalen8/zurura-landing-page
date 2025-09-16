import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  translations: any = {};
  currentLanguage: 'en' | 'es' = 'en';
  isDropdownOpen = false;
  isMobileMenuOpen = false;
  
  languages: { code: 'en' | 'es', name: string, flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.translations = this.translationService.getTranslations();
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: 'en' | 'es'): void {
    this.translationService.setLanguage(language);
    this.isDropdownOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Close dropdown when opening mobile menu
    if (this.isMobileMenuOpen) {
      this.isDropdownOpen = false;
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  getCurrentLanguageInfo() {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.relative');
    const mobileMenu = target.closest('.md\\:hidden');
    
    if (!dropdown && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
    
    if (!mobileMenu && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }
}
