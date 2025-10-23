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

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translations = this.translationService.getTranslations();
  }
}
