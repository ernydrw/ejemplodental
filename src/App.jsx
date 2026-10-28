import React, { useState } from 'react';
import { siteConfig } from './siteConfig';
import {
  Menu, X, Smile, Sparkles, ShieldCheck, Clock, MapPin,
  Calendar, Award, Activity, PhoneCall, CheckCircle2,
  UserCheck, Send, Star, HelpCircle
} from 'lucide-react';

// Mapper para renderizar íconos dinámicamente desde el siteConfig.js
const IconMap = ({ name, className }) => {
  const icons = {
    ShieldCheck, Award, Activity, UserCheck, CheckCircle2,
    Clock, MapPin, PhoneCall, Calendar, Sparkles, Star
  };
  const IconComponent = icons[name] || HelpCircle;
  return <IconComponent className={className} />;
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });

  // Filtrado de servicios por categoría
  const filteredServicios = activeCategory === 'todos'
    ? siteConfig.services
    : siteConfig.services.filter(item => item.categoria === activeCategory);

  // Helper para generar enlaces de WhatsApp formateados
  const getWhatsAppLink = (customText) => {
    const text = customText || `Hola! Me gustaría agendar una cita en ${siteConfig.brand.name}${siteConfig.brand.nameHighlight}`;
    return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Enviar el formulario de contacto directamente por WhatsApp
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mensajeWA = `Hola! Mi nombre es *${formData.nombre}*.\nMi teléfono de contacto es: *${formData.telefono}*.\n*Motivo de consulta:* ${formData.mensaje}`;
    window.open(getWhatsAppLink(mensajeWA), '_blank');
  };

  return (
    <div className="relative w-screen min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-cyan-600 selection:text-white overflow-x-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* EFECTOS DE FONDO */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">

        {/* HEADER / NAVEGACIÓN */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 text-slate-900 shadow-sm">
          <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">

            {/* Logo Dinámico */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-500 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                {siteConfig.brand.name}<span className="text-cyan-600">{siteConfig.brand.nameHighlight}</span>
              </span>
            </div>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#servicios" className="hover:text-cyan-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="hover:text-cyan-600 transition-colors">¿Por qué elegirnos?</a>
              {siteConfig.promo.active && <a href="#promos" className="hover:text-cyan-600 transition-colors">Promociones</a>}
              <a href="#contacto" className="hover:text-cyan-600 transition-colors">Ubicación y Citas</a>
            </nav>

            {/* CTA WhatsApp Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 transition-all shadow-md shadow-cyan-600/20 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar por WhatsApp
              </a>
            </div>

            {/* Botón Menú Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menú Drawer Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-6 pt-2 pb-6 space-y-3 w-full">
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600">Servicios</a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600">¿Por qué elegirnos?</a>
              {siteConfig.promo.active && <a href="#promos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600">Promociones</a>}
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600">Ubicación y Citas</a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 text-base font-bold rounded-xl text-white bg-cyan-600"
              >
                Agendar por WhatsApp 📅
              </a>
            </div>
          )}
        </header>

        {/* SECCIÓN HERO */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 sm:px-12 lg:px-16 w-full text-center bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">

            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{siteConfig.brand.slogan}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              {siteConfig.hero.titleLine1} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {siteConfig.hero.titleHighlight}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
              {siteConfig.hero.description}
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                {siteConfig.hero.ctaPrimaryText}
                <Calendar className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
              >
                {siteConfig.hero.ctaSecondaryText}
              </a>
            </div>
          </div>

          {/* Tarjetas Informativas Destacadas */}
          <div className="mt-14 sm:mt-20 relative w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {siteConfig.hero.highlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-800/90 border border-cyan-500/20 shadow-xl">
                  <IconMap name={item.icon} className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-xl font-bold text-white">{item.title}</div>
                  <div className="text-sm text-slate-300 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS Y FILTROS */}
        <section id="servicios" className="py-20 bg-slate-100 border-y border-slate-200 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
                Catálogo de Soluciones
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Nuestros Servicios</h2>
              <p className="text-slate-600 text-base sm:text-lg">Soluciones profesionales adaptadas a tus necesidades.</p>
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {siteConfig.categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServicios.map(item => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
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
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.descripcion}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <a
                      href={getWhatsAppLink(`Hola! Me interesa información y agendar sobre: ${item.nombre}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-white bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Solicitar este servicio</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{siteConfig.whyUs.title}</h2>
              <p className="text-slate-400 text-base sm:text-lg">{siteConfig.whyUs.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.whyUs.cards.map((card, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60">
                  <IconMap name={card.icon} className="w-8 h-8 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMOCIÓN DESTACADA */}
        {siteConfig.promo.active && (
          <section id="promos" className="py-16 bg-gradient-to-r from-cyan-600 to-teal-500 text-white w-full px-6 sm:px-12 lg:px-16">
            <div className="max-w-5xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <span className="bg-slate-950 text-cyan-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {siteConfig.promo.badge}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black mt-3 mb-2 text-white">
                  {siteConfig.promo.title}
                </h3>
                <p className="text-cyan-50 font-medium text-sm sm:text-base">
                  {siteConfig.promo.subtitle}
                </p>
              </div>
              <a
                href={getWhatsAppLink(`Hola! Quiero aprovechar la promo: ${siteConfig.promo.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-8 py-4 font-black rounded-2xl bg-slate-950 text-cyan-300 hover:bg-slate-900 shadow-xl transition-all"
              >
                {siteConfig.promo.buttonText}
              </a>
            </div>
          </section>
        )}

        {/* CONTACTO Y FORMULARIO A WHATSAPP */}
        <section id="contacto" className="py-20 bg-slate-950 border-t border-slate-800 text-slate-100 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Contacto Directo</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">¿Listo para agendar?</h2>
                <p className="text-slate-400 text-sm sm:text-base">Contáctanos directamente o déjanos un mensaje en el formulario para agendar por WhatsApp.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Ubicación</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{siteConfig.brand.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <Clock className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Horario de Atención</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{siteConfig.brand.schedule}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <PhoneCall className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Teléfono Directo</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{siteConfig.brand.phoneDisplay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Solicita tu cita o informe</h3>
              <p className="text-xs text-slate-400 mb-6">Al dar clic en enviar, se abrirá tu WhatsApp con el mensaje estructurado.</p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ana María García"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 33 1234 5678"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Motivo o servicio deseado</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Ej. Quisiera información sobre una limpieza o presupuesto..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Enviar mensaje por WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER DINÁMICO */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950 py-8 px-6 text-center text-xs text-slate-500 w-full">
        <p>© {new Date().getFullYear()} {siteConfig.brand.name}{siteConfig.brand.nameHighlight}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
