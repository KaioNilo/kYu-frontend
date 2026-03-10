import { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, MessageCircle } from 'lucide-react'; 
import logoKyu from '../assets/logo.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const navItems = ['SOBRE MIM', 'PORTFÓLIO', 'SERVIÇOS', 'ORÇAMENTO'];

  return (
    <header className="w-full bg-[#F2F9FF] py-3 px-6 md:px-10 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      <div className="flex items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
        <img src={logoKyu} alt="Logo K&U" className="h-10 w-auto" />
      </div>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[#2322E3] text-lg font-bold active:text-[#1CB940] hover:scale-110 transition-all duration-300 tracking-widest"
          >
            {item}
          </a>
        ))}
      </nav>

      <button 
        className="md:hidden text-[#2322E3] hover:scale-110 transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-full right-6 mt-2 w-48 bg-[#F2F9FF] shadow-xl rounded-[40px] border border-gray-100 py-6 flex flex-col items-center animate-in slide-in-from-top-5 md:hidden">
          {navItems.reverse().map((item, index) => (
            <div key={item} className="w-full flex flex-col items-center">
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="py-3 text-[#2322E3] font-black text-sm tracking-widest hover:scale-110 active:text-[#1CB940] transition-transform uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
              <div className="w-3/4 h-[1px] bg-gray-300 mb-1" />
            </div>
          ))}

          {/* Ícones Sociais do Dropdown */}
          <div className="flex flex-col items-center gap-4 mt-2">

            {/* Ícone de Email */}
            <Mail className="text-[#2322E3] cursor-pointer hover:scale-125 active:text-[#1CB940] transition-transform" size={28} />
            <div className="w-3/4 h-[1px] bg-gray-300" />
            
            {/* Ícone do WhatsApp */}
            <a href="https://wa.me/seu-numero" target="_blank" rel="noreferrer" className="flex items-center justify-center">
              <MessageCircle 
                className="text-[#2322E3] cursor-pointer hover:scale-125 active:text-[#1CB940] transition-transform" 
                size={28} 
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};