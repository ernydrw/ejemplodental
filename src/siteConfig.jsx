/**
 * ARCHIVO DE CONFIGURACIÓN DE PLANTILLA
 * Solo modifica los valores de este archivo para adaptar el sitio a un nuevo cliente.
 */

export const siteConfig = {
  // ==========================================
  // INFORMACIÓN GENERAL DEL NEGOCIO
  // ==========================================
  brand: {
    name: "Dental",
    nameHighlight: "Smile", // Parte en color acentuado
    slogan: "Especialistas Odontológicos con Tecnología Digital",
    whatsappNumber: "5213300000000", // Con código de país sin '+' ni espacios
    phoneDisplay: "+52 (33) 0000-0000",
    address: "Av. Médica Principal #450, Consultorio 302, Col. Centro",
    schedule: "Lunes a Viernes: 9:00 AM – 8:00 PM | Sábados: 9:00 AM – 2:00 PM",
  },

  // ==========================================
  // SECCIÓN HERO (PORTADA)
  // ==========================================
  hero: {
    titleLine1: "Recupera la Salud y",
    titleHighlight: "Brillo de tu Sonrisa",
    description: "Tratamientos dentales integrales, sin dolor y con tecnología de vanguardia. Cuidamos de ti y de tu familia en un ambiente cómodo y seguro.",
    ctaPrimaryText: "Agendar Valoración",
    ctaSecondaryText: "Ver Servicios",

    // 3 tarjetas flotantes debajo de la portada
    highlights: [
      {
        icon: "ShieldCheck", // Nombre del icono de lucide-react
        title: "Sin Dolor ni Estrés",
        desc: "Técnicas de anestesia local avanzadas e instrumental ultra suave."
      },
      {
        icon: "Award",
        title: "Dentistas Certificados",
        desc: "Equipo médico de especialistas capacitados continuamente."
      },
      {
        icon: "Activity",
        title: "Tecnología 3D & Digital",
        desc: "Diagnósticos precisos con radiografía digital e intraoral."
      }
    ]
  },

  // ==========================================
  // CATEGORÍAS Y SERVICIOS
  // ==========================================
  categories: [
    { id: 'todos', label: 'Todos los Tratamientos 🦷' },
    { id: 'preventiva', label: 'Prevención y Limpieza 🛡️' },
    { id: 'estetica', label: 'Estética y Blanqueamiento ✨' },
    { id: 'ortodoncia', label: 'Ortodoncia / Brackets 📏' },
    { id: 'especializada', label: 'Implantes y Cirugía 🏥' }
  ],

  services: [
    {
      id: 1,
      nombre: 'Limpieza Dental Ultrasonido',
      categoria: 'preventiva',
      descripcion: 'Eliminación profunda de sarro y placa bacteriana sin dolor, seguida de pulido y aplicación de flúor protector.',
      precio: 'Desde $450',
      etiqueta: 'Más Solicitado ✨',
      imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      nombre: 'Blanqueamiento Dental LED',
      categoria: 'estetica',
      descripcion: 'Aclara hasta 4 tonos en una sola sesión. Tecnología de luz fría que no afecta ni sensibiliza el esmalte.',
      precio: '$1,800',
      etiqueta: 'Resultado Inmediato 💎',
      imagen: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      nombre: 'Ortodoncia Invisible / Brackets',
      categoria: 'ortodoncia',
      descripcion: 'Alineación dental estética con alineadores transparentes o brackets de última generación.',
      precio: 'Valoración $0',
      etiqueta: 'Alineación Perfecta 🦷',
      imagen: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Implantes y Rehabilitación',
      categoria: 'especializada',
      descripcion: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de titanio biocompatibles.',
      precio: 'Consulta previa',
      etiqueta: 'Alta Durabilidad 🛡️',
      imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      nombre: 'Diseño de Sonrisa & Carillas',
      categoria: 'estetica',
      descripcion: 'Transformación estética personalizada mediante carillas de porcelana o resina de alta definición.',
      precio: 'Personalizado',
      etiqueta: 'Sonrisa de Revista ⭐',
      imagen: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      nombre: 'Odontopediatría (Atención Infantil)',
      categoria: 'preventiva',
      descripcion: 'Cuidado dental especializado para niños en un ambiente libre de estrés, enfocado en prevención.',
      precio: 'Desde $500',
      etiqueta: 'Trato Amigable 👶',
      imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    }
  ],

  // ==========================================
  // PROPUESTA DE VALOR ("¿POR QUÉ ELEGIRNOS?")
  // ==========================================
  whyUs: {
    title: "¿Por qué confiar tu sonrisa con nosotros?",
    subtitle: "Nos distingue el compromiso ético, la calidez humana y la excelencia clínica.",
    cards: [
      {
        icon: "UserCheck",
        title: "Diagnóstico Transparente",
        desc: "Te explicamos con imágenes intraorales el estado real de tu boca antes de cualquier procedimiento."
      },
      {
        icon: "CheckCircle2",
        title: "Esterilización Rigurosa",
        desc: "Cumplimos estrictos protocolos internacionales de bioseguridad para la protección total de nuestros pacientes."
      },
      {
        icon: "Clock",
        title: "Atención PUNTUAL",
        desc: "Respetamos tu tiempo. Contamos con horarios vespertinos y atención de urgencias el mismo día."
      }
    ]
  },

  // ==========================================
  // PROMOCIÓN DESTACADA (Opcional)
  // ==========================================
  promo: {
    active: true, // Ponlo en false si el cliente no tiene promo activa
    badge: "¡Promoción de Nuevo Paciente! 🎉",
    title: "Cita de Valoración + Radiografía Diagnóstica GRATIS",
    subtitle: "Válido para tu primera visita reservando esta semana.",
    buttonText: "Reclamar Cita Gratis ✨"
  }
};
