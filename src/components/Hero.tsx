import { useState, useEffect } from 'react';

export const Hero = () => {
  const fullText = "DESIGN INTELIGENTE.\nDESENVOLVIMENTO EFICAZ.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: any; // Ou let timeout: number;

    if (displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 100); // Velocidade de digitação (100ms)
    } else {
      // reinicia estado
      timeout = setTimeout(() => {
        setDisplayedText("");
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText]); 

  return (
    <section 
      className="flex items-center justify-center flex-col bg-[#202020] w-full h-[350px] bg-cover bg-top bg-no-repeat relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1773183723/BG_Hero_pova6b.png')" 
      }}
    >
      <div className="text-center px-6 max-w-4xl z-10 space-y-6">
        <h3 className="text-[#F2F9FF] md:text-3xl font-black tracking-widest leading-tight min-h-[2.4em] whitespace-pre-line">
          {displayedText}
          <span className="animate-pulse border-r-4 border-[#1DEA4C] ml-1"></span>
        </h3>

        <p className="text-[#F2F9FF] tracking-widest uppercase opacity-90">
          Transformamos sua ideia em resultados <br className="hidden md:block" /> 
          concretos e experiências digitais únicas.
        </p>

        <a 
        href="#orcamento"
        className="border-2 border-[#1DEA4C] text-[#1DEA4C] px-10 py-3 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-[#1DEA4C] hover:text-[#202020] transition-all duration-300 inline-block text-center"
        >
        Solicitar Serviço
        </a>
      </div>
    </section>
  );
};