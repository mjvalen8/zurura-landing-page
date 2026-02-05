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
  formulaSubtitle1: string;
  formulaSubtitle2: string;
  formulaSubtitle3: string;
  formulaTitle1: string;
  formulaTitle2: string;
  formulaTitle3: string;
  activeKids: string;
  today: string;
  artClass: string;
  startingIn: string;
  
  // Carousel Images
  carouselImage1Title: string;
  carouselImage1Desc: string;
  carouselImage2Title: string;
  carouselImage2Desc: string;
  carouselImage3Title: string;
  carouselImage3Desc: string;
  carouselImage4Title: string;
  carouselImage4Desc: string;
  carouselImage5Title: string;
  carouselImage5Desc: string;
  carouselImage6Title: string;
  carouselImage6Desc: string;
  carouselImage7Title: string;
  carouselImage7Desc: string;
  carouselImage8Title: string;
  carouselImage8Desc: string;
  carouselImage9Title: string;
  carouselImage9Desc: string;
  carouselImage10Title: string;
  carouselImage10Desc: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  yearsExperience: string;
  pioneers: string;
  inEarlyEducation: string;
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
  highestSecurityStandard: string;
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
  
  // Footer
  footerSupportTitle: string;
  footerSupportLink: string;
  footerSocialTitle: string;
  footerInfoTitle: string;
  footerBlog: string;
  footerTerms: string;
  footerPrivacy: string;
  footerContactTitle: string;
  
  firstName: string;
  lastName: string;
  organization: string;
  subject: string;
  selectSubject: string;
  generalInquiry: string;
  requestDemo: string;
  technicalSupport: string;
  partnership: string;
  deleteAccount: string;
  dataDeletion: string;
  other: string;
  message: string;
  messagePlaceholder: string;
  privacyAgreement: string;
  sending: string;
  messageSent: string;
  thankYou: string;
  
  // Privacy Policy & Terms
  lastUpdated: string;
  backToHome: string;
  privacyPolicyTitle: string;
  termsTitle: string;
  privacyIntroduction: string;
  privacyIntro: string;
  privacyInfoCollected: string;
  privacyInfoCollectedDesc: string;
  privacyInfoCollectedList1: string;
  privacyInfoCollectedList2: string;
  privacyInfoCollectedList3: string;
  privacyInfoCollectedList4: string;
  privacyHowWeUse: string;
  privacyHowWeUseDesc: string;
  privacyHowWeUseList1: string;
  privacyHowWeUseList2: string;
  privacyHowWeUseList3: string;
  privacyHowWeUseList4: string;
  privacyHowWeUseList5: string;
  privacySharing: string;
  privacySharingDesc: string;
  privacySharingList1: string;
  privacySharingList2: string;
  privacySharingList3: string;
  privacySharingList4: string;
  privacySecurity: string;
  privacySecurityDesc: string;
  privacyRights: string;
  privacyRightsDesc: string;
  privacyRightsList1: string;
  privacyRightsList2: string;
  privacyRightsList3: string;
  privacyRightsList4: string;
  privacyRightsList5: string;
  privacyCookies: string;
  privacyCookiesDesc: string;
  privacyChanges: string;
  privacyChangesDesc: string;
  privacyContact: string;
  privacyContactDesc: string;
  privacyContactEmail: string;
  
  termsAcceptance: string;
  termsAcceptanceDesc: string;
  termsServiceDesc: string;
  termsServiceDescText: string;
  termsUsage: string;
  termsUsageDesc: string;
  termsUsageList1: string;
  termsUsageList2: string;
  termsUsageList3: string;
  termsUsageList4: string;
  termsUsageList5: string;
  termsAccounts: string;
  termsAccountsDesc: string;
  termsIntellectual: string;
  termsIntellectualDesc: string;
  termsLiability: string;
  termsLiabilityDesc: string;
  termsModifications: string;
  termsModificationsDesc: string;
  termsTermination: string;
  termsTerminationDesc: string;
  termsLaw: string;
  termsLawDesc: string;
  termsChanges: string;
  termsChangesDesc: string;
  termsContact: string;
  termsContactDesc: string;
  termsContactEmail: string;
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
      trustedBy: 'Trusted by Kindergartens & Schools',
      digitalAgenda: 'Digital Agenda for',
      modernKindergartens: 'Modern Kindergartens',
      heroDescription: 'Connect teachers, parents, and children with our comprehensive digital platform. Track activities, share moments, and keep everyone informed.',
      getStarted: 'Get Started Today →',
      watchDemo: 'Watch Demo',
      formulaSubtitle1: 'Schools',
      formulaSubtitle2: 'Children',
      formulaSubtitle3: 'Parents',
      formulaTitle1: 'Organized',
      formulaTitle2: 'Happy',
      formulaTitle3: 'Satisfied',
      activeKids: '25 Active Kids',
      today: 'Today',
      artClass: 'Art Class',
      startingIn: 'Starting in 15 min',
      
      // Carousel Images
      carouselImage1Title: 'Daily Drop-off',
      carouselImage1Desc: 'Parents dropping off their children',
      carouselImage2Title: 'Remote Work',
      carouselImage2Desc: 'Parents working from home',
      carouselImage3Title: 'Attendance Check',
      carouselImage3Desc: 'Tracking daily attendance',
      carouselImage4Title: 'Teacher Management',
      carouselImage4Desc: 'Teachers managing activities',
      carouselImage5Title: 'Nap Time',
      carouselImage5Desc: 'Children resting peacefully',
      carouselImage6Title: 'Birthday Celebration',
      carouselImage6Desc: 'Special moments and celebrations',
      carouselImage7Title: 'Digital Learning',
      carouselImage7Desc: 'Teachers using technology',
      carouselImage8Title: 'Outdoor Play',
      carouselImage8Desc: 'Children playing outside',
      carouselImage9Title: 'Building Blocks',
      carouselImage9Desc: 'Creative construction play',
      carouselImage10Title: 'Group Activities',
      carouselImage10Desc: 'Children playing together',
      
      // About Section
      aboutTitle: 'About',
      aboutDescription1: 'We believe that every child deserves the best care and education. Zurura Kids was born from the vision of creating stronger connections between teachers, parents, and children through innovative technology.',
      aboutDescription2: 'Our platform is simple, intuitive and designed to helps you streamline your operations while keeping parents informed and children engaged in their learning journey',
      yearsExperience: 'Years Experience',
      pioneers: 'Pioneers',
      inEarlyEducation: 'In Early Education',
      supportAvailable: 'Support Available',
      ourMission: 'Our Mission',
      missionDescription: 'To revolutionize early childhood education by providing innovative digital tools that enhance communication, streamline operations, and create meaningful connections between all stakeholders in a child\'s educational journey.',
      
      // Features Section
      featuresTitle: 'Everything You Need for',
      modernChildcare: 'Modern Early Learning',
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
      highestSecurityStandard: 'The highest standard of security: GDPR/CCPA (California Consumer Privacy Act) compliant with advanced security features to protect children\'s data.',
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
      
      // Footer
      footerSupportTitle: 'Are you a Zurura Kids user?',
      footerSupportLink: 'Access Support Channel',
      footerSocialTitle: 'Follow us on Social Media',
      footerInfoTitle: 'More Information',
      footerBlog: 'Blog',
      footerTerms: 'Terms and Conditions',
      footerPrivacy: 'Privacy Policy',
      footerContactTitle: 'Contact Us',
      
      firstName: 'First Name',
      lastName: 'Last Name',
      organization: 'Organization/School',
      subject: 'Subject',
      selectSubject: 'Select a subject',
      generalInquiry: 'General Inquiry',
      requestDemo: 'Request Demo',
      technicalSupport: 'Technical Support',
      partnership: 'Partnership',
      deleteAccount: 'Delete Account and Data',
      dataDeletion: 'Data Deletion',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      privacyAgreement: 'I agree to the privacy policy and terms of service.',
      sending: 'Sending...',
      messageSent: 'Message sent successfully!',
      thankYou: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      
      // Privacy Policy & Terms
      lastUpdated: 'Last updated:',
      backToHome: '← Back to Home',
      privacyPolicyTitle: 'Privacy Policy',
      termsTitle: 'Terms and Conditions',
      privacyIntroduction: 'Introduction',
      privacyIntro: 'At Zurura Kids, we are committed to protecting the privacy and security of our users\' personal information. This Privacy Policy describes how we collect, use, store, and protect your information when you use our services.',
      privacyInfoCollected: 'Information We Collect',
      privacyInfoCollectedDesc: 'We collect information that you provide directly to us, including:',
      privacyInfoCollectedList1: 'Contact information (name, email address, phone number)',
      privacyInfoCollectedList2: 'Organization or school information',
      privacyInfoCollectedList3: 'Information about children under your care (name, date of birth, attendance information)',
      privacyInfoCollectedList4: 'Any other information you choose to provide us',
      privacyHowWeUse: 'How We Use Your Information',
      privacyHowWeUseDesc: 'We use the collected information to:',
      privacyHowWeUseList1: 'Provide, maintain, and improve our services',
      privacyHowWeUseList2: 'Process and manage information requests',
      privacyHowWeUseList3: 'Communicate with you about our services',
      privacyHowWeUseList4: 'Comply with legal and regulatory obligations',
      privacyHowWeUseList5: 'Protect the rights and security of our users',
      privacySharing: 'Sharing Information',
      privacySharingDesc: 'We do not sell, rent, or share your personal information with third parties, except in the following circumstances:',
      privacySharingList1: 'With your explicit consent',
      privacySharingList2: 'To comply with legal obligations',
      privacySharingList3: 'To protect our rights and security',
      privacySharingList4: 'With service providers who help us operate our platform (under strict confidentiality agreements)',
      privacySecurity: 'Data Security',
      privacySecurityDesc: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.',
      privacyRights: 'Your Rights',
      privacyRightsDesc: 'You have the right to:',
      privacyRightsList1: 'Access your personal information',
      privacyRightsList2: 'Rectify inaccurate or incomplete information',
      privacyRightsList3: 'Request deletion of your personal information',
      privacyRightsList4: 'Object to the processing of your information',
      privacyRightsList5: 'Request portability of your data',
      privacyCookies: 'Cookies and Similar Technologies',
      privacyCookiesDesc: 'We use cookies and similar technologies to improve your experience, analyze the use of our services, and personalize content. You can configure your browser to reject cookies, although this may affect some functionalities of our services.',
      privacyChanges: 'Changes to this Policy',
      privacyChangesDesc: 'We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date.',
      privacyContact: 'Contact',
      privacyContactDesc: 'If you have questions about this Privacy Policy, you can contact us at:',
      privacyContactEmail: 'Email',
      
      termsAcceptance: 'Acceptance of Terms',
      termsAcceptanceDesc: 'By accessing and using Zurura Kids services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.',
      termsServiceDesc: 'Service Description',
      termsServiceDescText: 'Zurura Kids provides a management platform for early education centers that allows parents, guardians, and educators to manage information about attendance, activities, and children\'s development.',
      termsUsage: 'Use of Service',
      termsUsageDesc: 'You agree to:',
      termsUsageList1: 'Provide accurate and up-to-date information',
      termsUsageList2: 'Maintain the confidentiality of your account and password',
      termsUsageList3: 'Not use the service for illegal or unauthorized purposes',
      termsUsageList4: 'Not interfere with the operation of the service',
      termsUsageList5: 'Respect the rights of other users',
      termsAccounts: 'User Accounts',
      termsAccountsDesc: 'You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account. Zurura Kids will not be liable for any loss or damage resulting from your failure to maintain the security of your account.',
      termsIntellectual: 'Intellectual Property',
      termsIntellectualDesc: 'All content of the service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of Zurura Kids or its content providers and is protected by intellectual property laws.',
      termsLiability: 'Limitation of Liability',
      termsLiabilityDesc: 'To the maximum extent permitted by law, Zurura Kids will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, regardless of whether we have been advised of the possibility of such damages.',
      termsModifications: 'Service Modifications',
      termsModificationsDesc: 'We reserve the right to modify, suspend, or discontinue any aspect of the service at any time, with or without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the service.',
      termsTermination: 'Termination',
      termsTerminationDesc: 'We may terminate or suspend your access to the service immediately, without prior notice, for any reason, including if you violate these Terms and Conditions. Upon termination, your right to use the service will cease immediately.',
      termsLaw: 'Applicable Law',
      termsLawDesc: 'These Terms and Conditions shall be governed and interpreted in accordance with applicable laws, without regard to their conflict of law provisions.',
      termsChanges: 'Changes to Terms',
      termsChangesDesc: 'We reserve the right to modify these Terms and Conditions at any time. We will notify you of significant changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of the service after such changes constitutes your acceptance of the new terms.',
      termsContact: 'Contact',
      termsContactDesc: 'If you have questions about these Terms and Conditions, you can contact us at:',
      termsContactEmail: 'Email'
    },
    es: {
      // Header
      features: 'Características',
      about: 'Acerca de',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      
      // Hero Section
      trustedBy: 'Confianza de Jardines y Escuelas',
      digitalAgenda: 'Agenda Digital para',
      modernKindergartens: 'Jardines Modernos',
      heroDescription: 'Conecta maestros, padres y niños con nuestra plataforma digital integral. Rastrea actividades, comparte momentos y mantén a todos informados.',
      getStarted: 'Comenzar Hoy →',
      watchDemo: 'Ver Demo',
      formulaSubtitle1: 'Organizados',
      formulaSubtitle2: 'Felices',
      formulaSubtitle3: 'Satisfechos',
      formulaTitle1: 'Jardines',
      formulaTitle2: 'Niños',
      formulaTitle3: 'Padres',
      activeKids: '25 Niños Activos',
      today: 'Hoy',
      artClass: 'Clase de Arte',
      startingIn: 'Iniciando en 15 min',
      
      // Carousel Images
      carouselImage1Title: 'Llegada Diaria',
      carouselImage1Desc: 'Padres dejando a sus hijos',
      carouselImage2Title: 'Trabajo Remoto',
      carouselImage2Desc: 'Padres trabajando desde casa',
      carouselImage3Title: 'Control de Asistencia',
      carouselImage3Desc: 'Registrando asistencia diaria',
      carouselImage4Title: 'Gestión Docente',
      carouselImage4Desc: 'Maestros gestionando actividades',
      carouselImage5Title: 'Hora de Siesta',
      carouselImage5Desc: 'Niños descansando tranquilamente',
      carouselImage6Title: 'Celebración de Cumpleaños',
      carouselImage6Desc: 'Momentos especiales y celebraciones',
      carouselImage7Title: 'Aprendizaje Digital',
      carouselImage7Desc: 'Maestros usando tecnología',
      carouselImage8Title: 'Juego al Aire Libre',
      carouselImage8Desc: 'Niños jugando afuera',
      carouselImage9Title: 'Bloques de Construcción',
      carouselImage9Desc: 'Juego creativo de construcción',
      carouselImage10Title: 'Actividades Grupales',
      carouselImage10Desc: 'Niños jugando juntos',
      
      // About Section
      aboutTitle: 'Acerca de',
      aboutDescription1: 'Creemos que cada niño merece el mejor cuidado y educación. Zurura Kids nació de la visión de crear conexiones más fuertes entre maestros, padres y niños a través de tecnología innovadora.',
      aboutDescription2: 'Nuestra plataforma es simple, intuitiva y diseñada para ayudarte a optimizar tus operaciones mientras mantienes a los padres informados y a los niños comprometidos en su viaje de aprendizaje',
      yearsExperience: 'Años de Experiencia',
      pioneers: 'Pioneros',
      inEarlyEducation: 'En Educación Temprana',
      supportAvailable: 'Soporte Disponible',
      ourMission: 'Nuestra Misión',
      missionDescription: 'Revolucionar la educación infantil temprana proporcionando herramientas digitales innovadoras que mejoren la comunicación, optimicen las operaciones y creen conexiones significativas entre todos los actores en el viaje educativo de un niño.',
      
      // Features Section
      featuresTitle: 'Todo lo que Necesitas para',
      modernChildcare: 'Aprendizaje Temprano Moderno',
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
      highestSecurityStandard: 'El más alto estándar de seguridad: Cumple con GDPR/CCPA (Ley de Privacidad del Consumidor de California) con características de seguridad avanzadas para proteger los datos de los niños.',
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
      
      // Footer
      footerSupportTitle: '¿Eres usuario de Zurura Kids?',
      footerSupportLink: 'Accede al Canal de Soporte',
      footerSocialTitle: 'Síguenos en las Redes Sociales',
      footerInfoTitle: 'Más información',
      footerBlog: 'Blog',
      footerTerms: 'Términos y condiciones',
      footerPrivacy: 'Política de privacidad',
      footerContactTitle: 'Contáctanos',
      
      firstName: 'Nombre',
      lastName: 'Apellido',
      organization: 'Organización/Escuela',
      subject: 'Asunto',
      selectSubject: 'Selecciona un asunto',
      generalInquiry: 'Consulta General',
      requestDemo: 'Solicitar Demo',
      technicalSupport: 'Soporte Técnico',
      partnership: 'Asociación',
      deleteAccount: 'Eliminar Cuenta y Datos',
      dataDeletion: 'Eliminación de Datos',
      other: 'Otro',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
      privacyAgreement: 'Acepto la política de privacidad y los términos de servicio.',
      sending: 'Enviando...',
      messageSent: '¡Mensaje enviado exitosamente!',
      thankYou: 'Gracias por contactarnos. Te responderemos dentro de 24 horas.',
      
      // Privacy Policy & Terms
      lastUpdated: 'Última actualización:',
      backToHome: '← Volver al Inicio',
      privacyPolicyTitle: 'Política de Privacidad',
      termsTitle: 'Términos y Condiciones',
      privacyIntroduction: 'Introducción',
      privacyIntro: 'En Zurura Kids, nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información cuando utiliza nuestros servicios.',
      privacyInfoCollected: 'Información que Recopilamos',
      privacyInfoCollectedDesc: 'Recopilamos información que usted nos proporciona directamente, incluyendo:',
      privacyInfoCollectedList1: 'Información de contacto (nombre, dirección de correo electrónico, número de teléfono)',
      privacyInfoCollectedList2: 'Información de la organización o escuela',
      privacyInfoCollectedList3: 'Información de los niños bajo su cuidado (nombre, fecha de nacimiento, información de asistencia)',
      privacyInfoCollectedList4: 'Cualquier otra información que elija proporcionarnos',
      privacyHowWeUse: 'Cómo Usamos su Información',
      privacyHowWeUseDesc: 'Utilizamos la información recopilada para:',
      privacyHowWeUseList1: 'Proporcionar, mantener y mejorar nuestros servicios',
      privacyHowWeUseList2: 'Procesar y gestionar las solicitudes de información',
      privacyHowWeUseList3: 'Comunicarnos con usted sobre nuestros servicios',
      privacyHowWeUseList4: 'Cumplir con obligaciones legales y regulatorias',
      privacyHowWeUseList5: 'Proteger los derechos y la seguridad de nuestros usuarios',
      privacySharing: 'Compartir Información',
      privacySharingDesc: 'No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:',
      privacySharingList1: 'Con su consentimiento explícito',
      privacySharingList2: 'Para cumplir con obligaciones legales',
      privacySharingList3: 'Para proteger nuestros derechos y seguridad',
      privacySharingList4: 'Con proveedores de servicios que nos ayudan a operar nuestra plataforma (bajo estrictos acuerdos de confidencialidad)',
      privacySecurity: 'Seguridad de los Datos',
      privacySecurityDesc: 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.',
      privacyRights: 'Sus Derechos',
      privacyRightsDesc: 'Usted tiene derecho a:',
      privacyRightsList1: 'Acceder a su información personal',
      privacyRightsList2: 'Rectificar información inexacta o incompleta',
      privacyRightsList3: 'Solicitar la eliminación de su información personal',
      privacyRightsList4: 'Oponerse al procesamiento de su información',
      privacyRightsList5: 'Solicitar la portabilidad de sus datos',
      privacyCookies: 'Cookies y Tecnologías Similares',
      privacyCookiesDesc: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de nuestros servicios y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades de nuestros servicios.',
      privacyChanges: 'Cambios a esta Política',
      privacyChangesDesc: 'Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización".',
      privacyContact: 'Contacto',
      privacyContactDesc: 'Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:',
      privacyContactEmail: 'Correo Electrónico',
      
      termsAcceptance: 'Aceptación de los Términos',
      termsAcceptanceDesc: 'Al acceder y utilizar los servicios de Zurura Kids, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.',
      termsServiceDesc: 'Descripción del Servicio',
      termsServiceDescText: 'Zurura Kids proporciona una plataforma de gestión para centros de educación temprana que permite a padres, tutores y educadores gestionar información sobre asistencia, actividades y desarrollo de los niños.',
      termsUsage: 'Uso del Servicio',
      termsUsageDesc: 'Usted se compromete a:',
      termsUsageList1: 'Proporcionar información precisa y actualizada',
      termsUsageList2: 'Mantener la confidencialidad de su cuenta y contraseña',
      termsUsageList3: 'No utilizar el servicio para fines ilegales o no autorizados',
      termsUsageList4: 'No interferir con el funcionamiento del servicio',
      termsUsageList5: 'Respetar los derechos de otros usuarios',
      termsAccounts: 'Cuentas de Usuario',
      termsAccountsDesc: 'Es responsable de mantener la confidencialidad de su cuenta y contraseña. Usted acepta notificarnos inmediatamente de cualquier uso no autorizado de su cuenta. Zurura Kids no será responsable de ninguna pérdida o daño que resulte de su incumplimiento de mantener la seguridad de su cuenta.',
      termsIntellectual: 'Propiedad Intelectual',
      termsIntellectualDesc: 'Todo el contenido del servicio, incluyendo pero no limitado a texto, gráficos, logotipos, iconos, imágenes, clips de audio y software, es propiedad de Zurura Kids o sus proveedores de contenido y está protegido por leyes de propiedad intelectual.',
      termsLiability: 'Limitación de Responsabilidad',
      termsLiabilityDesc: 'En la máxima medida permitida por la ley, Zurura Kids no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos, independientemente de si se nos ha advertido de la posibilidad de tales daños.',
      termsModifications: 'Modificaciones del Servicio',
      termsModificationsDesc: 'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento, con o sin previo aviso. No seremos responsables ante usted ni ante ningún tercero por cualquier modificación, suspensión o discontinuación del servicio.',
      termsTermination: 'Terminación',
      termsTerminationDesc: 'Podemos terminar o suspender su acceso al servicio inmediatamente, sin previo aviso, por cualquier motivo, incluyendo si viola estos Términos y Condiciones. Al terminar, su derecho a utilizar el servicio cesará inmediatamente.',
      termsLaw: 'Ley Aplicable',
      termsLawDesc: 'Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes aplicables, sin tener en cuenta sus disposiciones sobre conflictos de leyes.',
      termsChanges: 'Cambios a los Términos',
      termsChangesDesc: 'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Le notificaremos sobre cambios significativos publicando los nuevos términos en esta página y actualizando la fecha de "Última actualización". Su uso continuado del servicio después de dichos cambios constituye su aceptación de los nuevos términos.',
      termsContact: 'Contacto',
      termsContactDesc: 'Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:',
      termsContactEmail: 'Correo Electrónico'
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