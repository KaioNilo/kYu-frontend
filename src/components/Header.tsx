import { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, MessageCircle } from 'lucide-react'; 
import logoKyu from '../assets/logo.svg';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = ['SOBRE', 'PORTFOLIO', 'SERVIÇOS', 'ORÇAMENTO'];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-[#F2F9FF] h-14 py-3 px-6 md:px-10 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      {/* LOGO */}
      <a 
        href="#" 
        onClick={scrollToTop}
        className="flex items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <img src={logoKyu} alt="Logo K&U" className="h-10 w-auto" />
      </a>

      {/* NAVEGAÇÃO DESKTOP */}
      <nav className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[#2322E3] font-bold hover:text-[#9A67FF] active:text-[#1CB940] hover:scale-105 transition-all duration-300 tracking-widest"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* BOTÃO MOBILE */}
      <button 
        className="md:hidden text-[#2322E3] hover:scale-110 transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MENU DROPDOWN MOBILE */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-full right-6 mt-2 w-40 bg-[#F2F9FF] shadow-xl rounded-[20px] border border-gray-100 py-3 flex flex-col items-center animate-in slide-in-from-top-5 md:hidden">
          {navItems.map((item) => (
            <div key={item} className="w-full flex flex-col items-center">
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="py-3 text-[#2322E3] font-black text-sm tracking-widest hover:scale-105 hover:text-[#9A67FF] active:text-[#1CB940] transition-transform uppercase"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              >
                {item}
              </a>
              <div className="w-3/4 h-[1px] bg-gray-300 mb-1" />
            </div>
          ))}

          {/* REDES SOCIAIS NO MOBILE */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <a href="mailto:kaionilofreitas@gmail.com">
              <Mail className="text-[#2322E3] hover:text-[#9A67FF] transition-colors" size={28} />
            </a>
            <div className="w-3/4 h-[1px] bg-gray-300" />
            <a href="https://wa.me/5588992431192" target="_blank" rel="noreferrer">
              <MessageCircle className="text-[#2322E3] mb-3 hover:text-[#9A67FF] transition-colors" size={28} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};