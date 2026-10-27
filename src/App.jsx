import React, { useState } from 'react';
import {
  Menu,
  X,
  Smile,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Award,
  Activity,
  PhoneCall,
  CheckCircle2,
  UserCheck,
  Send,
  Star
} from 'lucide-react';

export default function DentalClinicLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  // Servicios Dentales
  const servicios = [
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
      descripcion: 'Alineación dental estética con alineadores transparentes o brackets de última generación (estéticos o metálicos).',
      precio: 'Valoración $0',
      etiqueta: 'Alineación Perfecta 🦷',
      imagen: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Implantes y Rehabilitación',
      categoria: 'especializada',
      descripcion: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de titanio biocompatibles de alta duración.',
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
      descripcion: 'Cuidado dental especializado para niños en un ambiente libre de estrés, enfocado en prevención y selladores.',
      precio: 'Desde $500',
      etiqueta: 'Trato Amigable 👶',
      imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredServicios = activeCategory === 'todos'
    ? servicios
    : servicios.filter(item => item.categoria === activeCategory);

  return (
    <div className="relative w-screen min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-cyan-600 selection:text-white overflow-x-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* BACKGROUND GLOW / GRADIENT EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">

        {/* HEADER / NAVIGATION */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 text-slate-900 shadow-sm">
          <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-500 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Dental<span className="text-cyan-600">Smile</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#servicios" className="hover:text-cyan-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="hover:text-cyan-600 transition-colors">¿Por qué elegirnos?</a>
              <a href="#promos" className="hover:text-cyan-600 transition-colors">Promociones</a>
              <a href="#contacto" className="hover:text-cyan-600 transition-colors">Ubicación y Citas</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/5213300000000?text=Hola!%20Me%20gustaría%20agendar%20una%20cita%20de%20valoración%20dental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 transition-all shadow-md shadow-cyan-600/20 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar por WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-slate-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-6 pt-2 pb-6 space-y-3 w-full">
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50">Servicios</a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50">¿Por qué elegirnos?</a>
              <a href="#promos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50">Promociones</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50">Ubicación y Citas</a>
              <a
                href="https://wa.me/5213300000000?text=Hola!%20Me%20gustaría%20agendar%20una%20cita%20de%20valoración%20dental"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 text-base font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-700"
              >
                Agendar por WhatsApp 📅
              </a>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 sm:px-12 lg:px-16 w-full text-center bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Especialistas Odontológicos con Tecnología Digital</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              Recupera la Salud y <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Brillo de tu Sonrisa
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
              Tratamientos dentales integrales, sin dolor y con tecnología de vanguardia. Cuidamos de ti y de tu familia en un ambiente cómodo y seguro.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Agendar Valoración
                <Calendar className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* BANNER / HIGHLIGHT CARDS */}
          <div className="mt-14 sm:mt-20 relative w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-800/90 border border-cyan-500/20 shadow-xl">
                <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-xl font-bold text-white">Sin Dolor ni Estrés</div>
                <div className="text-sm text-slate-300 mt-1">Técnicas de anestesia local avanzadas e instrumental ultra suave.</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/90 border border-cyan-500/20 shadow-xl">
                <Award className="w-8 h-8 text-teal-400 mb-3" />
                <div className="text-xl font-bold text-white">Dentistas Certificados</div>
                <div className="text-sm text-slate-300 mt-1">Equipo médico de especialistas capacitados continuamente.</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/90 border border-cyan-500/20 shadow-xl">
                <Activity className="w-8 h-8 text-emerald-400 mb-3" />
                <div className="text-xl font-bold text-white">Tecnología 3D & Digital</div>
                <div className="text-sm text-slate-300 mt-1">Diagnósticos precisos con radiografía digital e introral.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE SERVICIOS */}
        <section id="servicios" className="py-20 bg-slate-100 border-y border-slate-200 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
                Atención Médica Especializada
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Nuestros Tratamientos</h2>
              <p className="text-slate-600 text-base sm:text-lg">Ofrecemos soluciones personalizadas para mantener tus dientes fuertes, sanos y estéticos.</p>
            </div>

            {/* Filtros de Categoría */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { key: 'todos', label: 'Todos los Tratamientos 🦷' },
                { key: 'preventiva', label: 'Prevención y Limpieza 🛡️' },
                { key: 'estetica', label: 'Estética y Blanqueamiento ✨' },
                { key: 'ortodoncia', label: 'Ortodoncia / Brackets 📏' },
                { key: 'especializada', label: 'Implantes y Cirugía 🏥' }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.key
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid de Servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServicios.map(item => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-full">
                        {item.etiqueta}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.nombre}</h3>
                        <span className="text-sm font-black text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-100">
                          {item.precio}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <a
                      href={`https://wa.me/5213300000000?text=Hola!%20Me%20interesa%20información%20sobre:%20${encodeURIComponent(item.nombre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-white bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar para este servicio</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section id="nosotros" className="py-20 bg-slate-900 text-slate-100 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Por qué confiar tu sonrisa con nosotros?</h2>
              <p className="text-slate-400 text-base sm:text-lg">Nos distingue el compromiso ético, la calidez humana y la excelencia clínica.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60">
                <UserCheck className="w-8 h-8 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Diagnóstico Transparente</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Te explicamos con imágenes intraorales el estado real de tu boca antes de cualquier procedimiento. Sin cargos ocultos.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60">
                <CheckCircle2 className="w-8 h-8 text-teal-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Estesterilización Rigurosa</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cumplimos estrictos protocolos internacionales de bioseguridad y esterilización para la protección total de nuestros pacientes.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60">
                <Clock className="w-8 h-8 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Atención PUNTUAL y Citas Flexibles</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Respetamos tu tiempo. Contamos con horarios vespertinos y atención de urgencias dentales el mismo día.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROMO BANNER */}
        <section id="promos" className="py-16 bg-gradient-to-r from-cyan-600 to-teal-500 text-white w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <span className="bg-slate-950 text-cyan-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ¡Promoción de Nuevo Paciente! 🎉
              </span>
              <h3 className="text-3xl sm:text-4xl font-black mt-3 mb-2 text-white">
                Cita de Valoración + Radiografía Diagnóstica GRATIS
              </h3>
              <p className="text-cyan-50 font-medium text-sm sm:text-base">
                Válido para tu primera visita reservando esta semana. ¡Da el primer paso hacia una boca sana!
              </p>
            </div>
            <a
              href="https://wa.me/5213300000000?text=Hola!%20Quiero%20aprovechar%20la%20promo%20de%20Valoracion%20y%20Radiografia%20Gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-8 py-4 font-black rounded-2xl bg-slate-950 text-cyan-300 hover:bg-slate-900 shadow-xl transition-all"
            >
              Reclamar Cita Gratis ✨
            </a>
          </div>
        </section>

        {/* UBICACIÓN Y CITA */}
        <section id="contacto" className="py-20 bg-slate-950 border-t border-slate-800 text-slate-100 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Info de contacto */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Visítanos en la clínica</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">¿Listo para agendar tu consulta?</h2>
                <p className="text-slate-400 text-sm sm:text-base">
                  Estamos ubicados en una zona accesible con estacionamiento. Completa el formulario o contáctanos por teléfono/WhatsApp.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Dirección del Consultorio</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Av. Médica Principal #450, Consultorio 302, Col. Centro</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <Clock className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Horario de Consulta</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Lunes a Viernes: 9:00 AM – 8:00 PM | Sábados: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <PhoneCall className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Teléfono de Citas / Urgencias</h4>
                    <p className="text-xs text-slate-400 mt-0.5">+52 (33) 0000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario rápido de cita */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Solicita tu cita de valoración</h3>
              <p className="text-xs text-slate-400 mb-6">Te contactaremos a la brevedad para confirmar fecha y horario disponible.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Ana María García" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Teléfono / WhatsApp</label>
                  <input type="tel" placeholder="Ej. 33 1234 5678" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Motivo de la consulta o tratamiento deseado</label>
                  <textarea rows="3" placeholder="Ej. Quisiera información sobre alineadores o una limpieza general..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-colors">
                  <span>Solicitar Cita Dental</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950 py-8 px-6 text-center text-xs text-slate-500 w-full">
        <p>© {new Date().getFullYear()} DentalSmile Clínica Odontológica. Todos los derechos reservados. Cuidando tu salud bucal con pasión.</p>
      </footer>
    </div>
  );
}
