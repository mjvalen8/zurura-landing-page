import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
  // Header
  features: string;
  about: string;
  contact: string;
  login: string;
  
  // Hero Section
  trustedBy: string;
  digitalAgenda: string;
  modernKindergartens: string;
  heroDescription: string;
  getStarted: string;
  watchDemo: string;
  schools: string;
  children: string;
  parents: string;
  activeKids: string;
  today: string;
  artClass: string;
  startingIn: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  yearsExperience: string;
  supportAvailable: string;
  ourMission: string;
  missionDescription: string;
  
  // Features Section
  featuresTitle: string;
  modernChildcare: string;
  featuresDescription: string;
  smartScheduling: string;
  smartSchedulingDesc: string;
  photoSharing: string;
  photoSharingDesc: string;
  parentCommunication: string;
  parentCommunicationDesc: string;
  childProfiles: string;
  childProfilesDesc: string;
  attendanceTracking: string;
  attendanceTrackingDesc: string;
  securePlatform: string;
  securePlatformDesc: string;
  learningReports: string;
  learningReportsDesc: string;
  wellbeingFocus: string;
  wellbeingFocusDesc: string;
  
  // CTA Section
  readyToGetStarted: string;
  ctaDescription: string;
  accessYourPortal: string;
  
  // Contact Form Section
  contactTitle: string;
  contactDescription: string;
  getInTouch: string;
  contactInfo: string;
  email: string;
  phone: string;
  address: string;
  followUs: string;
  sendMessage: string;
  firstName: string;
  lastName: string;
  organization: string;
  subject: string;
  selectSubject: string;
  generalInquiry: string;
  requestDemo: string;
  technicalSupport: string;
  partnership: string;
  other: string;
  message: string;
  messagePlaceholder: string;
  privacyAgreement: string;
  sending: string;
  messageSent: string;
  thankYou: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<'en' | 'es'>('en');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: { [key: string]: Translation } = {
    en: {
      // Header
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      
      // Hero Section
      trustedBy: 'Trusted by 200+ Kindergartens',
      digitalAgenda: 'Digital Agenda for',
      modernKindergartens: 'Modern Kindergartens',
      heroDescription: 'Connect teachers, parents, and children with our comprehensive digital platform. Track activities, share moments, and keep everyone informed.',
      getStarted: 'Get Started Today →',
      watchDemo: 'Watch Demo',
      schools: 'Schools',
      children: 'Children',
      parents: 'Parents',
      activeKids: '25 Active Kids',
      today: 'Today',
      artClass: 'Art Class',
      startingIn: 'Starting in 15 min',
      
      // About Section
      aboutTitle: 'About',
      aboutDescription1: 'We believe that every child deserves the best care and education. Zurura Kids was born from the vision of creating stronger connections between teachers, parents, and children through innovative technology.',
      aboutDescription2: 'Our platform has been trusted by over 200 kindergartens worldwide, helping them streamline their operations while keeping parents informed and children engaged in their learning journey.',
      yearsExperience: 'Years Experience',
      supportAvailable: 'Support Available',
      ourMission: 'Our Mission',
      missionDescription: 'To revolutionize early childhood education by providing innovative digital tools that enhance communication, streamline operations, and create meaningful connections between all stakeholders in a child\'s educational journey.',
      
      // Features Section
      featuresTitle: 'Everything You Need for',
      modernChildcare: 'Modern Childcare',
      featuresDescription: 'Our comprehensive platform brings together all the tools teachers and parents need to provide the best care and education for children.',
      smartScheduling: 'Smart Scheduling',
      smartSchedulingDesc: 'Manage daily activities, meals, naps, and special events with an intuitive calendar.',
      photoSharing: 'Photo Sharing',
      photoSharingDesc: 'Capture and share precious moments with parents instantly and securely.',
      parentCommunication: 'Parent Communication',
      parentCommunicationDesc: 'Direct messaging between teachers and parents for better collaboration.',
      childProfiles: 'Child Profiles',
      childProfilesDesc: 'Individual tracking of each child\'s development, activities, and milestones.',
      attendanceTracking: 'Attendance Tracking',
      attendanceTrackingDesc: 'Easy check-in/check-out system with real-time notifications to parents.',
      securePlatform: 'Secure Platform',
      securePlatformDesc: 'GDPR compliant with advanced security features to protect children\'s data.',
      learningReports: 'Learning Reports',
      learningReportsDesc: 'Track educational progress and generate detailed development reports.',
      wellbeingFocus: 'Wellbeing Focus',
      wellbeingFocusDesc: 'Monitor mood, health, and emotional development with care.',
      
      // CTA Section
      readyToGetStarted: 'Ready to Get Started?',
      ctaDescription: 'Join thousands of kindergartens already using Zurura Kids to create better connections between teachers, parents, and children.',
      accessYourPortal: 'Access Your Portal',
      
      // Contact Form Section
      contactTitle: 'Get in Touch',
      contactDescription: 'Have questions about Zurura Kids? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      getInTouch: 'Get in Touch',
      contactInfo: 'We\'re here to help you get started with Zurura Kids. Whether you have questions about our platform, need technical support, or want to schedule a demo, our team is ready to assist you.',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      followUs: 'Follow Us',
      sendMessage: 'Send Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      organization: 'Organization/School',
      subject: 'Subject',
      selectSubject: 'Select a subject',
      generalInquiry: 'General Inquiry',
      requestDemo: 'Request Demo',
      technicalSupport: 'Technical Support',
      partnership: 'Partnership',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      privacyAgreement: 'I agree to the privacy policy and terms of service.',
      sending: 'Sending...',
      messageSent: 'Message sent successfully!',
      thankYou: 'Thank you for contacting us. We\'ll get back to you within 24 hours.'
    },
    es: {
      // Header
      features: 'Características',
      about: 'Acerca de',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      
      // Hero Section
      trustedBy: 'Confianza de más de 200 Jardines',
      digitalAgenda: 'Agenda Digital para',
      modernKindergartens: 'Jardines Modernos',
      heroDescription: 'Conecta maestros, padres y niños con nuestra plataforma digital integral. Rastrea actividades, comparte momentos y mantén a todos informados.',
      getStarted: 'Comenzar Hoy →',
      watchDemo: 'Ver Demo',
      schools: 'Jardines',
      children: 'Niños',
      parents: 'Padres',
      activeKids: '25 Niños Activos',
      today: 'Hoy',
      artClass: 'Clase de Arte',
      startingIn: 'Iniciando en 15 min',
      
      // About Section
      aboutTitle: 'Acerca de',
      aboutDescription1: 'Creemos que cada niño merece el mejor cuidado y educación. Zurura Kids nació de la visión de crear conexiones más fuertes entre maestros, padres y niños a través de tecnología innovadora.',
      aboutDescription2: 'Nuestra plataforma ha sido confiada por más de 200 jardines en todo el mundo, ayudándoles a optimizar sus operaciones mientras mantienen a los padres informados y a los niños comprometidos en su viaje de aprendizaje.',
      yearsExperience: 'Años de Experiencia',
      supportAvailable: 'Soporte Disponible',
      ourMission: 'Nuestra Misión',
      missionDescription: 'Revolucionar la educación infantil temprana proporcionando herramientas digitales innovadoras que mejoren la comunicación, optimicen las operaciones y creen conexiones significativas entre todos los actores en el viaje educativo de un niño.',
      
      // Features Section
      featuresTitle: 'Todo lo que Necesitas para',
      modernChildcare: 'Cuidado Infantil Moderno',
      featuresDescription: 'Nuestra plataforma integral reúne todas las herramientas que maestros y padres necesitan para proporcionar el mejor cuidado y educación a los niños.',
      smartScheduling: 'Programación Inteligente',
      smartSchedulingDesc: 'Gestiona actividades diarias, comidas, siestas y eventos especiales con un calendario intuitivo.',
      photoSharing: 'Compartir Fotos',
      photoSharingDesc: 'Captura y comparte momentos preciosos con los padres de forma instantánea y segura.',
      parentCommunication: 'Comunicación con Padres',
      parentCommunicationDesc: 'Mensajería directa entre maestros y padres para mejor colaboración.',
      childProfiles: 'Perfiles de Niños',
      childProfilesDesc: 'Seguimiento individual del desarrollo, actividades y logros de cada niño.',
      attendanceTracking: 'Seguimiento de Asistencia',
      attendanceTrackingDesc: 'Sistema fácil de entrada/salida con notificaciones en tiempo real a los padres.',
      securePlatform: 'Plataforma Segura',
      securePlatformDesc: 'Cumple con GDPR con características de seguridad avanzadas para proteger los datos de los niños.',
      learningReports: 'Reportes de Aprendizaje',
      learningReportsDesc: 'Rastrea el progreso educativo y genera reportes detallados de desarrollo.',
      wellbeingFocus: 'Enfoque en Bienestar',
      wellbeingFocusDesc: 'Monitorea el estado de ánimo, salud y desarrollo emocional con cuidado.',
      
      // CTA Section
      readyToGetStarted: '¿Listo para Comenzar?',
      ctaDescription: 'Únete a miles de jardines que ya usan Zurura Kids para crear mejores conexiones entre maestros, padres y niños.',
      accessYourPortal: 'Acceder a tu Portal',
      
      // Contact Form Section
      contactTitle: 'Ponte en Contacto',
      contactDescription: '¿Tienes preguntas sobre Zurura Kids? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.',
      getInTouch: 'Ponte en Contacto',
      contactInfo: 'Estamos aquí para ayudarte a comenzar con Zurura Kids. Ya sea que tengas preguntas sobre nuestra plataforma, necesites soporte técnico o quieras programar una demostración, nuestro equipo está listo para asistirte.',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      followUs: 'Síguenos',
      sendMessage: 'Enviar Mensaje',
      firstName: 'Nombre',
      lastName: 'Apellido',
      organization: 'Organización/Escuela',
      subject: 'Asunto',
      selectSubject: 'Selecciona un asunto',
      generalInquiry: 'Consulta General',
      requestDemo: 'Solicitar Demo',
      technicalSupport: 'Soporte Técnico',
      partnership: 'Asociación',
      other: 'Otro',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
      privacyAgreement: 'Acepto la política de privacidad y los términos de servicio.',
      sending: 'Enviando...',
      messageSent: '¡Mensaje enviado exitosamente!',
      thankYou: 'Gracias por contactarnos. Te responderemos dentro de 24 horas.'
    }
  };

  constructor() {}

  getCurrentLanguage(): 'en' | 'es' {
    return this.currentLanguage.value;
  }

  setLanguage(language: 'en' | 'es'): void {
    this.currentLanguage.next(language);
  }

  getTranslation(key: keyof Translation): string {
    return this.translations[this.currentLanguage.value][key];
  }

  getTranslations(): Translation {
    return this.translations[this.currentLanguage.value];
  }
}