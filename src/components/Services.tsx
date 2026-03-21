import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

const services = [
    { title: "Site & Landing Page", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773963827/Servi%C3%A7o_1_v6jpf9.png" },
    { title: "Identidade Visual", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774026579/Servi%C3%A7o_2_entpqr.png" },
    { title: "Logomarca", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774028793/Servi%C3%A7o_3_q8iphj.png" },
    { title: "Ilustração", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774029715/Servi%C3%A7o_4_bpwbvp.png" },
    { title: "Posts Estáticos", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774035334/Servi%C3%A7o_5_hiwp3p.png" },
    { title: "Material Impresso", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774038751/Servi%C3%A7o_7_zqhdbg.png" },
    { title: "Diagramação", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774038751/Servi%C3%A7o_7_zqhdbg.png" },
    { title: "Apresentações", mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1774099768/63927702_95663771_sl5cjp.png" },
  ];

  // Sincroniza a paginação com o scroll manual
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      // Ajuste para par de cards
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  // Navega para o par de cards específico
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
    <section id='services' 
      className="w-full bg-[#2322E3] py-8 lg:py-14 relative overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1774024173/BG_Servi%C3%A7os_gsilhr.png')" }}
    >
      <div className="container mx-auto px-5 lg:px-20 relative z-10 flex flex-col items-center">
        
        {/* Cabeçalho */}
        <div className="w-full flex justify-between items-end mb-5 max-w-[1200px]">

          <h2 className="text-[#F2F9FF] text-4xl lg:text-6xl uppercase">SERVIÇOS</h2>

          <button className="text-[#F2F9FF] text-[15px] tracking-[0.1em] 
           uppercase hover:text-[#1dea4c] transition-all active:text-[#202020] mb-3 lg:text-[17px] lg:mb-3">
            VER TUDO
          </button>

        </div>

        <div className="relative w-full max-w-[1200px]">
          {/* Setas */}
          <button 
            onClick={() => scrollTo(activeIndex - 1)}
            className="absolute -left-16 top-1/2 -translate-y-1/2 text-[#F2F9FF] hover:text-[#1DEA4C] z-20 hidden active:text-[#202020] lg:flex disabled:opacity-10"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={64} strokeWidth={1} />
          </button>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="
                  min-w-full 
                  lg:min-w-[calc(50%-40px)] 
                  snap-start bg-[#202020] h-70 p-6 rounded-[15px] flex flex-col gap-4
                  transition-all duration-300 group cursor-grab active:cursor-grabbing lg:h-90
                "
              >
                <div className="bg-[#F2F9FF] rounded-[10px] h-[210px] lg:h-[320px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={service.mockup} 
                    alt={service.title} 
                    className="h-[80%] w-[80%] object-contain transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  />
                </div>
                
                <div className="text-center lg:text-left ml-2">
                  <h3 className="text-[#1DEA4C] text-xl  uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scrollTo(activeIndex + 1)}
            className="absolute -right-16 top-1/2 -translate-y-1/2 text-[#F2F9FF] hover:text-[#1DEA4C] z-20 hidden lg:flex disabled:opacity-10 active:text-[#202020]"
            disabled={activeIndex >= Math.ceil(services.length / 2) - 1}
          >
            <ChevronRight size={64} strokeWidth={1} />
          </button>
        </div>

        {/* Paginação */}
        <div className="flex justify-center gap-3 mt-8 lg:mt-12">
          {Array.from({ length: Math.ceil(services.length / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === i ? 'w-14 bg-[#1DEA4C]' : 'w-2.5 bg-[#F2F9FF]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};