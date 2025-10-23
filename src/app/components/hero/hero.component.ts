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
      src: '/assets/images/1-parent-leaving-kid.png',
      alt: 'Daily drop-off scene',
      titleKey: 'carouselImage1Title',
      descriptionKey: 'carouselImage1Desc'
    },
    {
      src: '/assets/images/2-african-parent-remote-office-view.jpeg',
      alt: 'Remote work scene',
      titleKey: 'carouselImage2Title',
      descriptionKey: 'carouselImage2Desc'
    },
    {
      src: '/assets/images/3-attendance-tracking-scene.png',
      alt: 'Attendance tracking scene',
      titleKey: 'carouselImage3Title',
      descriptionKey: 'carouselImage3Desc'
    },
    {
      src: '/assets/images/4-teacher-working-on-attendance.png',
      alt: 'Teacher management scene',
      titleKey: 'carouselImage4Title',
      descriptionKey: 'carouselImage4Desc'
    },
    {
      src: '/assets/images/5-african-kids-logging-nap-status.jpeg',
      alt: 'Nap time scene',
      titleKey: 'carouselImage5Title',
      descriptionKey: 'carouselImage5Desc'
    },
    {
      src: '/assets/images/6-birthday-celebration.png',
      alt: 'Birthday celebration scene',
      titleKey: 'carouselImage6Title',
      descriptionKey: 'carouselImage6Desc'
    },
    {
      src: '/assets/images/7-teacher-zoomed-on-laptop.png',
      alt: 'Digital learning scene',
      titleKey: 'carouselImage7Title',
      descriptionKey: 'carouselImage7Desc'
    },
    {
      src: '/assets/images/8-children-playing-outdoors.jpeg',
      alt: 'Outdoor play scene',
      titleKey: 'carouselImage8Title',
      descriptionKey: 'carouselImage8Desc'
    },
    {
      src: '/assets/images/9-building-with-blocks.jpeg',
      alt: 'Building blocks scene',
      titleKey: 'carouselImage9Title',
      descriptionKey: 'carouselImage9Desc'
    },
    {
      src: '/assets/images/10-children-playing-outdoors.jpeg',
      alt: 'Group activities scene',
      titleKey: 'carouselImage10Title',
      descriptionKey: 'carouselImage10Desc'
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
