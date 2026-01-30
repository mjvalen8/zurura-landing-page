import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  translations: any = {};
  privacyPolicyUrl: string = '';
  termsAndConditionsUrl: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translations = this.translationService.getTranslations();
    // Construir URL dinámica según el entorno
    // En desarrollo: usar assets, en producción: usar raíz (después del build)
    const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isDev) {
      // En desarrollo, los PDFs están en assets
      this.privacyPolicyUrl = `${window.location.origin}/assets/documents/privacypolicy.pdf`;
      this.termsAndConditionsUrl = `${window.location.origin}/assets/documents/termsofservice.pdf`;
    } else {
      // En producción, los PDFs están en la raíz (copiados por postbuild)
      this.privacyPolicyUrl = `${window.location.origin}/privacypolicy.pdf`;
      this.termsAndConditionsUrl = `${window.location.origin}/termsofservice.pdf`;
    }
  }
}
