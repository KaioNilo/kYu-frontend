export const Value = () => {
  const values = [
    {
      title: "DESIGN AVANÇADO & EXCLUSIVO:",
      description: "Materiais e conteúdos com soluções criativas, focando na experiência do usuário.",
      color: "bg-[#1DEA4C]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773702736/BG_Value_1_udrdsb.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773758581/mockup_1_lf5r2q.png"
    },
    {
      title: "PROGRAMAÇÃO & SEGURANÇA:",
      description: "Sites e Landing Pages com estética refinada, seguros e adaptados ao seu negócio.",
      color: "bg-[#2322E3]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773752813/BG_Value_2_bcqxol.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773753261/mockup_2_nqkmd4.png"
    },
    {
      title: "FOCO EM CONVERSÃO & RESULTADOS:",
      description: "Estrutura pensada para transformar observadores em oportunidades concretas.",
      color: "bg-[#A855F7]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773752812/BG_Value_3_kmfrdw.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773764473/mockup_3_wyszr2.png"
    }
  ];

  return (
    <section className="w-full bg-[#F2F9FF] py-16 px-5 md:py-24 flex flex-col items-center overflow-hidden bg-cover bg-top bg-no-repeat" style={{backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1773752813/BG_Value_npvsge.png')" }}>
      <div className="text-center mx-3 mb-12 md:mb-16">
        <h3 className="text-[#202020] text-2xl font-black uppercase mb-2 md:text-3xl lg:text-4xl">Te ajudamos com soluções digitais que</h3>
        <h3 className="text-[#202020] text-5xl uppercase font-display lg:text-7xl">
          geram resultados concretos
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-[1300px] md:max-w-9xl justify-between">
        {values.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#202020] rounded-[20px] overflow-hidden flex flex-col w-full md:w-full shadow-2xl transition-all hover:scale-105 duration-300 group"
          >
            {/* CARD */}
            <div className={`relative h-[220px] w-full ${item.color} flex items-center justify-center overflow-hidden lg:h-[300px]`}>
              
              {/* Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.background})` }}
              />
              
              {/* Mockup */}
              <img 
                src={item.mockup} 
                alt={item.title} 
                className="relative z-10 h-100% w-100% object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-8 flex flex-col gap-4 flex-grow justify-center">
              <h3 className="text-[#F2F9FF] text-1xl font-black tracking-[0.2em] leading-tight uppercase xl:text-lg">
                {item.title}
              </h3>
              <h4 className="text-[#F2F9FF] font-light leading-relaxed tracking-wider xl:text-md">
                {item.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};