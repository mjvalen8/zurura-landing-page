import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  translations: any = {};
  currentSlide = 0;
  private slideInterval: any;

  // Array de imágenes para el carrusel
  carouselImages = [
    {
      src: '/assets/images/children-in-kindergarten-classroom-doing-art-activ.jpg',
      alt: 'Children in kindergarten classroom doing art activities',
      title: 'Art Activities',
      description: 'Creative learning through art'
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=faces',
      alt: 'Children playing outdoor games',
      title: 'Outdoor Play',
      description: 'Fun and healthy outdoor activities'
    },
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&crop=faces',
      alt: 'Children learning numbers and math',
      title: 'Math Learning',
      description: 'Interactive number games'
    },
    {
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=faces',
      alt: 'Children reading books together',
      title: 'Reading Time',
      description: 'Building literacy skills'
    }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(() => {
      this.translations = this.translationService.getTranslations();
    });
    
    // Iniciar el carrusel automático
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambiar imagen cada 4 segundos
  }

  stopCarousel(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.stopCarousel();
    this.startCarousel(); // Reiniciar el timer
  }
}
