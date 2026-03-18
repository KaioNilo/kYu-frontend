import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Services = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { title: "SITES & LANDING PAGES", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773800420/Servi%C3%A7o_1_v6jpf9.png" },
    { title: "IDENTIDADE VISUAL", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773758581/mockup_service_2.png" },
    { title: "SISTEMAS WEB", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773758581/mockup_service_3.png" },
    { title: "UI/UX DESIGN", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773758581/mockup_service_4.png" },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      // Cálculo do index baseado na largura visível do container
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-[#2322E3] py-16 relative overflow-hidden bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1773798998/BG_Servi%C3%A7os_gsilhr.png')" }}
>
      <div className="container mx-auto px-5 lg:px-20 relative z-10 flex flex-col items-center">
        
        <div className="w-full flex justify-between items-end mb-10 lg:mb-10 max-w-[1200px]">
          <h2 className="text-[#F2F9FF] text-4xl lg:text-6xl uppercase">SERVIÇOS</h2>
          <button className="text-[#F2F9FF] text-md font-bold uppercase hover:text-[#1dea4c] hover:scale-110 active:text-[#202020] transition-all lg:text-lg lg:tracking-widest">
            VER TUDO
          </button>
        </div>

        <div className="relative w-full max-w-[1200px] group">
          {/* Setas de Navegação */}
          <button 
            onClick={() => scrollTo(activeIndex - 1)}
            className="absolute -left-16 top-1/2 -translate-y-1/2 text-[#F2F9FF] hover:text-[#1DEA4C] transition-all z-20 hidden active:text-[#202020] lg:flex disabled:opacity-10"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={56} strokeWidth={1} />
          </button>

          {/* CARDS */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Esconde no IE e Firefox
            className="flex gap-6 lg:overflow-x-auto snap-x snap-mandatory w-full pb-4 [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="
                  min-w-full             /* 1 card mobile */
                  lg:min-w-[calc(50%-20px)] /* 2 cards desktop */
                  snap-center bg-[#202020] p-5 lg:rounded-[20px] shadow-1xl flex flex-col gap-3
                  transition-all duration-300 group cursor-grab active:cursor-grabbing
                "
              >
                {/* Mockup Area */}
                <div className="bg-[#F2F9FF] rounded-[10px] h-[230px] lg:h-[280px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={service.mockup} 
                    alt={service.title} 
                    className="h-[80%] w-[80%] object-contain transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  />
                </div>
                
                {/* Título */}
                <div className="ml-1 text-center lg:text-left">
                  <h3 className="text-[#1DEA4C] text-base lg:text-xl tracking-[0.25em] uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scrollTo(activeIndex + 1)}
            className="absolute -right-16 top-1/2 -translate-y-1/2 text-[#F2F9FF] hover:text-[#1DEA4C] transition-all z-20 hidden active:text-[#202020] lg:flex disabled:opacity-10"
            disabled={activeIndex >= services.length - 2}
          >
            <ChevronRight size={56} strokeWidth={1} />
          </button>
        </div>

        {/* Paginação Estilizada */}
        <div className="flex justify-center gap-3 mt-8 lg:mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === i ? 'w-10 bg-[#1DEA4C]' : 'w-2.5 bg-[#F2F9FF]/20'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};