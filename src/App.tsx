import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ThermometerSun, 
  EyeOff, 
  Star, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  SunMedium,
  Instagram,
  Clock,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "5511980347367"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleWhatsApp = (type: 'automotivo' | 'residencial') => {
    const message = type === 'automotivo' 
      ? "Olá! Gostaria de um orçamento para Insulfilm Automotivo." 
      : "Olá! Gostaria de um orçamento para Insulfilm Residencial.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-500/30 selection:text-red-200">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/logo.webp" 
              alt="Logo Bianchi Insulfilm" 
              className="h-8 md:h-10 object-contain transition-transform group-hover:scale-105" 
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Diferenciais', href: '#diferenciais' },
              { name: 'Portfólio', href: '#portfolio' },
              { name: 'Avaliações', href: '#avaliacoes' },
              { name: 'Localização', href: '#localizacao' },
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleWhatsApp('automotivo')}
              className="hidden sm:flex px-6 py-2.5 bg-emerald-500 text-zinc-950 font-bold rounded-xl text-sm hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              Orçamento
            </button>
            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {[
              { name: 'Diferenciais', href: '#diferenciais' },
              { name: 'Portfólio', href: '#portfolio' },
              { name: 'Avaliações', href: '#avaliacoes' },
              { name: 'Localização', href: '#localizacao' },
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-red-500 transition-colors py-2 border-b border-zinc-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                handleWhatsApp('automotivo');
                setIsMenuOpen(false);
              }}
              className="w-full py-4 bg-emerald-500 text-zinc-950 font-bold rounded-2xl mt-2"
            >
              Solicitar Orçamento
            </button>
          </motion.div>
        )}
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f3ca99a832d?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Car Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-8 relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-2xl">
            Estética, Privacidade e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Proteção de Elite
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Películas de alta performance que não desbotam. Visibilidade cristalina por dentro, privacidade absoluta por fora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => handleWhatsApp('automotivo')}
              className="group w-full sm:w-auto px-10 py-5 bg-emerald-500 text-zinc-950 font-black rounded-2xl transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle className="w-6 h-6" />
              ORÇAMENTO VIA WHATSAPP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleWhatsApp('residencial')}
              className="w-full sm:w-auto px-10 py-5 bg-zinc-100/10 backdrop-blur-md text-white font-bold rounded-2xl border border-zinc-700 transition-all hover:bg-zinc-100/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              LINHA RESIDENCIAL
            </button>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-700 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* --- 2. DIFFERENTIALS SECTION --- */}
      <section id="diferenciais" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher a Bianchi?</h2>
          <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
              title: "Alta Durabilidade",
              desc: "Trabalhamos apenas com materiais premium que não ficam roxos e possuem garantia estendida contra desbotamento."
            },
            {
              icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
              title: "Antivandalismo (PS4)",
              desc: "Segurança máxima. Películas que aumentam a resistência do vidro contra impactos e tentativas de quebra."
            },
            {
              icon: <ThermometerSun className="w-12 h-12 text-red-500" />,
              title: "Conforto Térmico",
              desc: "Bloqueio real de raios UV e redução drástica de calor. Dirija com conforto mesmo sob o sol mais forte."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-red-500/30 transition-all group hover:bg-zinc-900/60"
            >
              <div className="mb-8 p-4 bg-zinc-950 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- NEW: PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-32 bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Trabalhos</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Confira o padrão de acabamento Bianchi em projetos reais.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { label: 'Haval - Visão Externa', tipo: 'imagem', arquivo: '/haval-fora.webp', categoria: 'Película Nano Cerâmica' },
              { label: 'Haval - Visão Interna', tipo: 'video', arquivo: '/haval-dentro.mp4', categoria: 'Película Nano Cerâmica' },
              { label: 'BMW Premium - Externa', tipo: 'imagem', arquivo: '/bmw-fora.webp', categoria: 'Alta Performance' },
              { label: 'BMW Premium - Interna', tipo: 'video', arquivo: '/bmw-dentro.mp4', categoria: 'Alta Performance' },
              { label: 'Projeto Residencial - Externa', tipo: 'imagem', arquivo: '/residencial-fora.webp', categoria: 'Linha Residencial' },
              { label: 'Projeto Residencial - Interna', tipo: 'imagem', arquivo: '/residencial-dentro.webp', categoria: 'Linha Residencial' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-4"
              >
                <div className="aspect-[9/16] bg-zinc-800 rounded-3xl overflow-hidden relative group cursor-pointer border border-zinc-800">
                  {item.tipo === 'imagem' ? (
                    <img 
                      src={item.arquivo} 
                      alt={item.label}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <video 
                      src={item.arquivo} 
                      title={item.label}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    />
                  )}
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {item.categoria}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 font-medium text-sm md:text-base text-center uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. ORÇAMENTO (CTA) SECTION --- */}
      <section className="py-32 px-6 bg-emerald-500/5 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl font-bold mb-8 leading-tight">Pronto para elevar o nível do seu projeto?</h2>
            <p className="text-zinc-400 mb-10 text-xl leading-relaxed">
              Não aceite películas de baixa qualidade que ficam roxas em poucos meses. Escolha a Bianchi Insulfilm para estética impecável e proteção real.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-zinc-200">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-lg">Vila Matilde, São Paulo</p>
                  <p className="text-zinc-500">Rua Moacir Álvaro, 20 - 03510-010</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-200">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Star className="w-6 h-6 text-emerald-500" />
                </div>
                <p className="font-bold text-lg">Nota 5.0 no Google (+184 avaliações)</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-zinc-900 p-10 md:p-14 rounded-[40px] border border-zinc-800 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center">Solicite seu orçamento</h3>
            <div className="grid grid-cols-1 gap-5">
              <button 
                onClick={() => handleWhatsApp('automotivo')}
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-6 h-6" />
                ORÇAMENTO AUTOMOTIVO
              </button>
              <button 
                onClick={() => handleWhatsApp('residencial')}
                className="w-full py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all border border-zinc-700 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                ORÇAMENTO RESIDENCIAL
              </button>
            </div>
            <p className="text-center text-xs text-zinc-500 mt-8 uppercase tracking-[0.2em]">Resposta imediata via WhatsApp</p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: GOOGLE REVIEWS SECTION --- */}
      <section id="avaliacoes" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que nossos clientes dizem</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
            </div>
            <span className="font-bold text-xl">5.0</span>
          </div>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          className="bg-zinc-900/40 rounded-[40px] border border-zinc-800 p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 min-h-[200px] flex items-center justify-center">
            {/* Google Reviews Widget Placeholder */}
            <div id="google-reviews-widget" className="w-full">
              {/* Google Reviews Widget */}
            </div>
          </div>
          
          <p className="text-center text-zinc-500 mt-12 text-sm uppercase tracking-[0.2em]">Avaliações reais via Google Business</p>
        </motion.div>
      </section>

      {/* --- 4. MAPA (LOCATION) SECTION --- */}
      <section id="localizacao" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Venha nos visitar</h2>
          <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full mb-8" />
          <p className="text-zinc-400 text-xl max-w-xl mx-auto leading-relaxed">
            Estamos localizados na Vila Matilde. Venha conferir a qualidade de nossas películas pessoalmente.
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          className="w-full aspect-square sm:aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.854659837941!2d-46.5245464!3d-23.537739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e690f38f9f7%3A0x8f8c8f8c8f8c8f8c!2sRua%20Moacir%20%C3%81lvaro%2C%2020%20-%20Vila%20Matilde%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Bianchi Insulfilm"
          />
        </motion.div>
      </section>

      {/* --- 5. RODAPÉ (FOOTER) --- */}
      <footer className="bg-zinc-950 pt-10 pb-8 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-8">
            
            {/* Coluna 1: Sobre */}
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <img 
                src="/logo.webp" 
                alt="Logo Bianchi Insulfilm" 
                className="h-10 md:h-12 object-contain self-start" 
              />
              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                Estética automotiva e residencial de alta performance. Proteção real para você e sua família.
              </p>
            </div>

            {/* Coluna 2: Contato */}
            <div className="flex flex-col gap-3 text-xs">
              <a href="https://wa.me/5511980347367" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors">
                <MessageCircle className="w-4 h-4 shrink-0" />
                (11) 98034-7367
              </a>
              <a href="https://instagram.com/bianchi.film" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
                <Instagram className="w-4 h-4 shrink-0" />
                @bianchi.film
              </a>
            </div>

            {/* Coluna 3: Endereço */}
            <div className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <a 
                href="https://maps.google.com/?q=Rua+Moacir+Álvaro,+20+-+Vila+Matilde,+São+Paulo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 hover:underline underline-offset-4 transition-colors"
              >
                R. Moacir Álvaro, 20<br/>Vila Matilde, SP<br/>03518-000
              </a>
            </div>

            {/* Coluna 4: Horários */}
            <div className="flex flex-col gap-2 text-xs text-zinc-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Seg - Sex: 07:30 às 18:00</p>
                  <p>Sáb: 07:30 às 14:00</p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Bianchi Insulfilm. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-500 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-red-500 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleWhatsApp('automotivo')}
          className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 text-zinc-950 rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.4)] flex items-center justify-center relative group"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 group-hover:opacity-0" />
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
          <span className="absolute right-full mr-4 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800 pointer-events-none">
            Falar com Especialista
          </span>
        </motion.button>
      </div>

    </div>
  );
}
