import { useState, useEffect } from 'react';

export const Hero = () => {
  const fullText = "DESIGN INTELIGENTE.\nDESENVOLVIMENTO EFICAZ.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: any; 

    if (displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 150); // Velocidade de digitação (100ms)
    } else {
      // reinicia estado
      timeout = setTimeout(() => {
        setDisplayedText("");
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText]); 

  return (
    <section 
      className="flex items-center justify-center flex-col bg-[#202020] w-full h-[450px] bg-cover bg-top bg-no-repeat relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1773710269/BG_Hero_rzwdun.png')" 
      }}
    >
      <div className="text-center px-6 mx-10 max-w-4xl z-10 space-y-6">
        <h3 className="text-[#F2F9FF] text-2xl font-black tracking-widest leading-tight min-h-[2.4em] whitespace-pre-line md:text-4xl">
          {displayedText}
          <span className="animate-pulse border-r-4 border-[#1DEA4C] ml-1"></span>
        </h3>

        <div className="text-center mx-3">
          <p className="text-[#F2F9FF] mb-5 tracking-widest uppercase font-light lg:text-2xl">
            Transformamos a sua ideia em resultados <br className="hidden md:block" /> 
            concretos e experiências digitais únicas.
          </p>

          <a 
          href="#orçamento"
          className="border-2 mt-2 border-[#1DEA4C] text-[#1DEA4C] px-10 py-3 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-[#1DEA4C] hover:text-[#202020] transition-all duration-300 inline-block text-center md:text-2xl"
          >
          Solicitar Serviço
          </a>
        </div>

        
      </div>
    </section>
  );
};