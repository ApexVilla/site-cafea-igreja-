
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Send,
  MapPin,
  Clock,
  Phone,
  ArrowLeft,
  Calendar,
  Share2,
  ExternalLink,
  Users,
  Star
} from 'lucide-react';
import { NAV_ITEMS, CHURCHES, EVENTS, MEDIA_FEED, TESTIMONIALS } from './constants';
import { Church } from './types';
import logoImg from './image/logo.jpeg';
import LogoParticleRain from './LogoParticleRain';

const Logo: React.FC<{ size?: number, className?: string }> = ({ size = 48, className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <div className="absolute inset-0 bg-church-purple rounded-full border-2 border-church-gold shadow-lg overflow-hidden flex items-center justify-center">
      <img src={logoImg} alt="Logo" className="w-full h-full object-cover object-center scale-[2.6]" />
    </div>
  </div>
);

const MainView: React.FC<{ onSelectChurch: (church: Church) => void }> = ({ onSelectChurch }) => (
  <>
    {/* Hero Institutional */}
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-church-purple/70 z-10 backdrop-blur-[1px]"></div>
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-6xl">
        <div className="relative inline-block mx-auto mb-10">
          <Logo size={140} className="logo-shadow animate-pulse relative z-20" />
          <LogoParticleRain />
        </div>
        <h1 className="text-5xl md:text-8xl text-white mb-6 leading-tight uppercase font-bold tracking-tight">
          CONVENÇÃO <span className="text-church-gold italic font-serif">CAFEA</span>
        </h1>
        <p className="text-xl md:text-2xl text-church-gold mb-10 font-light tracking-[0.3em] uppercase">
          Uma Rede de Igrejas Unindo Fé e Propósito
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#igrejas" className="w-full sm:w-auto bg-church-gold text-church-purple px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:-translate-y-1">
            Encontrar uma Igreja
          </a>
          <a href="#sobre" className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-church-purple transition-all">
            Sobre a Convenção
          </a>
        </div>
      </div>
    </section>

    {/* Church Directory */}
    <section id="igrejas" className="py-32 px-4 bg-church-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl text-church-purple font-serif mb-4 uppercase">Nossas <span className="text-church-gold">Igrejas</span></h2>
            <p className="text-slate-500 text-lg uppercase tracking-widest">Encontre a unidade mais próxima de você</p>
          </div>
          <div className="h-0.5 flex-1 mx-8 bg-church-gold/20 hidden md:block"></div>
          <div className="text-church-purple font-bold">Total: {CHURCHES.length} Unidades</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CHURCHES.map((church) => (
            <div key={church.id} className="group bg-white rounded-[40px] overflow-hidden shadow-xl border border-transparent hover:border-church-gold transition-all duration-500 flex flex-col">
              <div className={`h-64 relative overflow-hidden ${church.bannerFit === 'contain' ? 'bg-white p-4' : ''}`}>
                <img
                  src={church.banner}
                  alt={church.name}
                  className={`w-full h-full ${church.bannerFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute top-4 left-4 bg-church-purple/90 text-church-gold px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 backdrop-blur-md z-10">
                  <MapPin className="w-3 h-3" /> {church.city} - {church.state}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-church-purple mb-4 font-bold">{church.name}</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <Clock className="w-4 h-4 text-church-gold" />
                      <span>{church.schedule[0].day}: {church.schedule[0].time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <Users className="w-4 h-4 text-church-gold" />
                      <span>{church.pastors[0].name}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { onSelectChurch(church); window.scrollTo(0, 0); }}
                  className="w-full bg-church-purple text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-church-gold group-hover:text-church-purple transition-all"
                >
                  Ver Perfil da Igreja <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Media Feed (Social Style) */}
    <section id="midias" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-church-purple font-serif uppercase mb-4">Feed <span className="text-church-gold">CAFEA</span></h2>
          <p className="text-slate-400 tracking-[0.3em] uppercase text-xs font-bold">Acompanhe nossa jornada em tempo real</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {MEDIA_FEED.map((item) => (
            <div key={item.id} className="relative aspect-square rounded-[32px] overflow-hidden group cursor-pointer shadow-lg">
              <img src={item.url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-church-purple/80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-church-gold text-xs font-bold uppercase mb-2">@ {item.churchName}</span>
                <p className="text-sm line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 text-church-purple font-bold uppercase tracking-widest border-b-2 border-church-gold pb-2 hover:text-church-gold transition-colors">
            Ver mais no Instagram <Instagram className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

    {/* Agenda */}
    <section id="agenda" className="py-32 px-4 bg-church-purple relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-church-gold/5 blur-[100px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl text-white font-serif mb-16 uppercase italic">Agenda da <span className="text-church-gold">Convenção</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white/5 border border-white/10 p-10 rounded-[40px] flex flex-col md:flex-row items-center gap-8 hover:bg-white/10 transition-all group">
              <div className="bg-church-gold text-church-purple p-6 rounded-3xl text-center min-w-[120px]">
                <span className="block text-3xl font-bold font-serif">{event.date.split('/')[0]}</span>
                <span className="text-xs font-bold uppercase tracking-widest">{event.date.includes('/') ? 'OUT' : 'Fixa'}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-church-gold text-xs font-bold uppercase tracking-widest mb-2 block">{event.type}</span>
                <h3 className="text-2xl text-white font-serif mb-2">{event.title}</h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-sm">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>
              <button className="p-4 bg-white/10 rounded-full text-white group-hover:bg-church-gold group-hover:text-church-purple transition-all">
                <ChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="sobre" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-church-gold opacity-10 rounded-full blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1510511233900-1982d92bd835?auto=format&fit=crop&w=1200&q=80" alt="Convenção" className="rounded-[60px] shadow-2xl relative z-10 border-4 border-church-offwhite" />
            <div className="absolute -bottom-10 -right-10 bg-church-purple p-10 rounded-[40px] shadow-2xl z-20 hidden md:block border-2 border-church-gold">
              <Logo size={60} />
              <p className="text-white text-3xl font-serif mt-4 font-bold">+10 Unidades</p>
              <p className="text-church-gold uppercase tracking-widest text-xs">Em expansão nacional</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-5xl text-church-purple font-serif leading-tight">Uma Convenção focada no <span className="text-church-gold italic">Relacionamento</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A CAFEA não é apenas um grupo de igrejas, é uma família ministerial. Nossa missão é oferecer suporte, cobertura espiritual e treinamento para pastores e líderes, sempre focados no acolhimento e na transformação genuína.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-church-offwhite rounded-3xl">
              <h4 className="font-bold text-church-purple mb-2">Treinamento</h4>
              <p className="text-sm text-slate-500">Capacitação constante para lideranças.</p>
            </div>
            <div className="p-6 bg-church-offwhite rounded-3xl">
              <h4 className="font-bold text-church-purple mb-2">Comunhão</h4>
              <p className="text-sm text-slate-500">Eventos nacionais e regionais periódicos.</p>
            </div>
          </div>
          <button className="bg-church-purple text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-church-gold hover:text-church-purple transition-all shadow-xl">
            Saiba como se afiliar <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="py-24 px-4 bg-church-purple/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-church-purple font-serif uppercase mb-4">Testemunhos <span className="text-church-gold">Vivos</span></h2>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">O que dizem sobre nossa convenção</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[32px] shadow-xl border border-transparent hover:border-church-gold/30 transition-all group">
              <div className="flex items-center gap-1 mb-4 text-church-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-slate-200'}`} />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-church-purple text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-church-purple">{t.name}</h5>
                  <p className="text-xs uppercase tracking-widest text-slate-400">{t.role}</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6 ml-auto opacity-50 grayscale group-hover:grayscale-0 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const ChurchProfileView: React.FC<{ church: Church; onGoBack: () => void; onWhatsApp: (phone?: string) => void }> = ({ church, onGoBack, onWhatsApp }) => (
  <div className="animate-fade-in pt-20">
    <div className="bg-church-purple py-12 px-4 border-b-4 border-church-gold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <button
          onClick={onGoBack}
          className="flex items-center gap-2 text-church-gold font-bold uppercase tracking-widest text-sm hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para a Convenção
        </button>
        <div className="h-4 w-px bg-white/20 hidden md:block"></div>
        <h2 className="text-white text-xl uppercase tracking-widest font-bold">Unidade: {church.name}</h2>
      </div>
    </div>

    <section className="relative h-[60vh]">
      <img src={church.banner} alt={church.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 uppercase tracking-tight">{church.name}</h1>
          <div className="flex items-center justify-center gap-6 text-white/90">
            <span className="flex items-center gap-2 bg-church-purple/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-church-gold" /> {church.city}, {church.state}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h3 className="text-3xl text-church-purple font-serif mb-8 border-b border-church-gold/20 pb-4 uppercase">Nossos Pastores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {church.pastors.map((pastor, idx) => (
                <div key={idx} className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
                  <img src={pastor.image} alt={pastor.name} className="w-32 h-48 rounded-3xl object-cover object-top shadow-xl border-2 border-church-gold" />
                  <div>
                    <h4 className="text-xl font-bold text-church-purple">{pastor.name}</h4>
                    <p className="text-church-gold font-bold uppercase text-xs tracking-widest mb-3">{pastor.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{pastor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-church-purple font-serif mb-8 border-b border-church-gold/20 pb-4 uppercase">Agenda Semanal</h3>
            <div className="space-y-4">
              {church.schedule.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-8 bg-church-offwhite rounded-[32px] border-l-8 border-church-purple hover:border-church-gold transition-all">
                  <div>
                    <p className="text-church-gold font-bold uppercase text-xs tracking-widest mb-1">{s.day}</p>
                    <h4 className="text-xl font-serif text-church-purple">{s.label}</h4>
                  </div>
                  <p className="text-3xl font-serif text-church-purple font-bold">{s.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-church-purple p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <h4 className="text-2xl font-serif mb-6 flex items-center gap-3">Contato Direto <MessageCircle className="text-church-gold" /></h4>
            <p className="text-white/60 mb-8">Precisa de oração, aconselhamento ou deseja saber mais sobre nossa unidade?</p>
            <button
              onClick={() => onWhatsApp(church.whatsapp)}
              className="w-full bg-church-gold text-church-purple py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all transform active:scale-95"
            >
              Falar pelo WhatsApp <ChevronRight />
            </button>
            <div className="mt-8 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-church-gold shrink-0 mt-1" />
                <span className="text-sm opacity-80">{church.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-church-gold" />
                <span className="text-sm opacity-80">{church.instagram}</span>
              </div>
            </div>
          </div>

          <div className="p-10 border-4 border-dashed border-church-gold/20 rounded-[40px] text-center">
            <Share2 className="w-10 h-10 text-church-gold mx-auto mb-4" />
            <p className="text-church-purple font-bold mb-4 uppercase text-xs tracking-widest">Compartilhe esta Unidade</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {church.facebook && (
                <button onClick={() => window.open(`https://facebook.com/${church.facebook}`, '_blank')} className="p-3 bg-church-offwhite rounded-full hover:bg-church-purple hover:text-white transition-all" title="Facebook">
                  <Facebook />
                </button>
              )}
              <button onClick={() => window.open(`https://instagram.com/${church.instagram.replace('@', '')}`, '_blank')} className="p-3 bg-church-offwhite rounded-full hover:bg-church-purple hover:text-white transition-all" title="Instagram">
                <Instagram />
              </button>
              {church.tiktok && (
                <button onClick={() => window.open(`https://tiktok.com/@${church.tiktok}`, '_blank')} className="px-4 py-3 bg-church-offwhite rounded-full hover:bg-church-purple hover:text-white transition-all font-bold text-xs uppercase" title="TikTok">
                  TikTok
                </button>
              )}
              {church.kwai && (
                <button onClick={() => window.open(`https://kwai.com/@${church.kwai}`, '_blank')} className="px-4 py-3 bg-church-offwhite rounded-full hover:bg-church-purple hover:text-white transition-all font-bold text-xs uppercase" title="Kwai">
                  Kwai
                </button>
              )}
              <button className="p-3 bg-church-offwhite rounded-full hover:bg-church-purple hover:text-white transition-all" title="Compartilhar">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = (phone?: string) => {
    const target = phone || '5500000000000';
    window.open(`https://wa.me/${target}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-church-offwhite text-slate-800 relative">
      {/* Platform Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || selectedChurch ? 'bg-church-purple text-white shadow-xl py-2' : 'bg-transparent text-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => { setSelectedChurch(null); window.scrollTo(0, 0); }}
            >
              <Logo size={isScrolled ? 50 : 60} className="logo-shadow transition-all group-hover:rotate-12" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-[0.1em] uppercase leading-none text-church-gold">Convenção</span>
                <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-church-silver font-semibold">Cafea</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {!selectedChurch && NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-church-gold transition-colors font-medium text-xs uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleWhatsApp()}
                className="bg-church-gold hover:bg-yellow-600 text-church-purple px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg transform hover:scale-105"
              >
                CONTATO GERAL
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-church-purple absolute top-full left-0 w-full border-t border-church-gold/20 p-6 space-y-4 animate-fade-in-down shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white text-lg font-medium hover:text-church-gold border-b border-white/5 pb-2 uppercase tracking-widest text-sm"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => handleWhatsApp()}
              className="w-full bg-church-gold text-church-purple font-bold py-4 rounded-xl mt-4"
            >
              FALAR COM A CAFEA
            </button>
          </div>
        )}
      </nav>

      {/* Conditional View Rendering */}
      {selectedChurch ? (
        <ChurchProfileView
          church={selectedChurch}
          onGoBack={() => { setSelectedChurch(null); window.scrollTo(0, 0); }}
          onWhatsApp={handleWhatsApp}
        />
      ) : (
        <MainView
          onSelectChurch={setSelectedChurch}
        />
      )}

      {/* Platform Footer */}
      <footer className="bg-church-purple text-white pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-church-gold"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Logo size={80} className="logo-shadow" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold tracking-widest uppercase text-church-gold leading-none">Convenção</span>
                <span className="text-sm tracking-[0.5em] uppercase text-church-silver font-bold">Cafea</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed italic text-lg">
              "Fé profunda, suporte ministerial e expansão do Reino através do diálogo."
            </p>
          </div>

          <div>
            <h4 className="text-church-gold font-bold uppercase tracking-[0.3em] text-xs mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#inicio" className="hover:text-church-gold transition-all">Página Principal</a></li>
              <li><a href="#igrejas" className="hover:text-church-gold transition-all">Igrejas Afiliadas</a></li>
              <li><a href="#agenda" className="hover:text-church-gold transition-all">Calendário Nacional</a></li>
              <li><a href="#sobre" className="hover:text-church-gold transition-all">Filiar Minha Igreja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-church-gold font-bold uppercase tracking-[0.3em] text-xs mb-8">Acesso Rápido</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-church-gold transition-all">Portal do Pastor</a></li>
              <li><a href="#" className="hover:text-church-gold transition-all">Área de Mídias</a></li>
              <li><a href="#" className="hover:text-church-gold transition-all">Doações / Ofertas</a></li>
              <li><a href="#" className="hover:text-church-gold transition-all">Suporte Técnico</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-8">
            <h4 className="text-church-gold font-bold uppercase tracking-[0.3em] text-xs">Rede Oficial</h4>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-church-gold hover:text-church-purple transition-all duration-300 transform hover:-translate-y-2"><Instagram /></a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-church-gold hover:text-church-purple transition-all duration-300 transform hover:-translate-y-2"><Facebook /></a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-church-gold hover:text-church-purple transition-all duration-300 transform hover:-translate-y-2"><Youtube /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-[0.3em] font-bold">
          <p>© 2024 CONVENÇÃO CAFEA | PLATAFORMA INTEGRADA</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-church-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-church-gold transition-colors">Política de Dados</a>
          </div>
        </div>
      </footer>

      {/* Floating Network Support Button */}
      {!selectedChurch && (
        <button
          onClick={() => handleWhatsApp()}
          className="fixed bottom-10 right-10 bg-church-gold text-church-purple p-5 rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.4)] z-50 transition-all transform hover:scale-110 flex items-center gap-3 group border-4 border-church-purple"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-4 text-lg">Central da Convenção</span>
          <Phone className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default App;
