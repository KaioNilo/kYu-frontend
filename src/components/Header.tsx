import logoKyu from '../assets/logo.svg';
export const Header = () => {
  return (
    <header className="w-full bg-[#F2F9FF] py-3 px-10 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <img src={logoKyu} alt="Logo K&U" className="h-10 w-auto" />
      </div>
      
      <nav className="flex gap-8">
        {['SOBRE MIM', 'PORTFÓLIO', 'SERVIÇOS', 'ORÇAMENTO'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[#2322E3] text-lg hover:text-[#1CB940] font-bold transition-colors tracking-widest"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};