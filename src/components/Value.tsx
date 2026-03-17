export const Value = () => {
  const values = [
    {
      title: "DESIGN AVANÇADO & EXCLUSIVO:",
      description: "Materiais e conteúdos com soluções criativas, focando na experiência do usuário.",
      color: "bg-[#1DEA4C]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773702736/BG_Value_1_udrdsb.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/Mockup_Design_Exclusivo.png"
    },
    {
      title: "PROGRAMAÇÃO & SEGURANÇA:",
      description: "Sites e Landing Pages com estética refinada, seguros e adaptados ao seu negócio.",
      color: "bg-[#2322E3]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/BG_Card2_Mobile.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/Mockup_Programacao.png"
    },
    {
      title: "FOCO EM CONVERSÃO & RESULTADOS:",
      description: "Estrutura pensada para transformar observadores em oportunidades concretas.",
      color: "bg-[#A855F7]",
      background: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/BG_Card3_Mobile.png",
      mockup: "https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/Mockup_Conversao.png"
    }
  ];

  return (
    <section className="w-full bg-[#F2F9FF] py-16 px-7 md:py-24 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h3 className="text-[#202020] font-black uppercase text-1xl mb-2 mx-7 md: text-2xl lg:text-3xl">Te ajudamos com soluções digitais que</h3>
        <h2 className="text-[#202020] text-1xl uppercase font-display md: text-4xl lg: text-6xl">
          geram resultados concretos
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[400px] md:max-w-6xl justify-center">
        {values.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#202020] rounded-[35px] overflow-hidden flex flex-col w-full md:w-1/3 shadow-2xl transition-all hover:scale-105 duration-300 group"
          >
            {/* Mockup */}
            <div className={`relative h-[220px] md:h-[300px] ${item.color} flex items-center justify-center p-6 overflow-hidden`}>
              
              {/* Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.background})` }}
              />
              
              {/* Mockup */}
              <img 
                src={item.mockup} 
                alt={item.title} 
                className="relative z-10 h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-8 flex flex-col gap-4 flex-grow justify-center">
              <h3 className="text-[#F2F9FF] font-black text-sm md:text-base tracking-[0.2em] leading-tight uppercase">
                {item.title}
              </h3>
              <p className="text-[#F2F9FF] text-xs md:text-sm font-light leading-relaxed tracking-wider">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};