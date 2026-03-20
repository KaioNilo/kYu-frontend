import React from 'react';
import { Mail, Instagram, Linkedin, Github, Monitor } from 'lucide-react'; 

export const About = () => {

    // Lista de habilidades
  const skills = [
    "TYPESCRIPT", "REACT", "NODE", "GIT",
    "JAVA", "DJANGO", "PYTHON", "MONGODB",
    "POSTGRESQL", "FIGMA", "PHOTOSHOP"
  ];

  return (
    <section className="w-full bg-[#202020] py-16 lg:py-24 text-[#F2F9FF] font-sans">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1000px]">
        
        {/* TÍTULO DA SEÇÃO: Centralizado e em caixa alta */}
        <h2 className="text-center text-4xl tracking-[0.01em] lg:text-5xl mb-12 lg:mb-16 tracking-tighter uppercase">
          SOBRE MIM
        </h2>

        {/* GRID PRINCIPAL: Foto à esquerda e Info à direita no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          
          {/* CONTAINER DA FOTO: Com borda verde neon */}
          <div className="relative group mx-auto lg:mx-0">
            <div className="w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] border-2 border-[#1DEA4C] rounded-[20px] overflow-hidden p-1">
              <img 
                src="https://res.cloudinary.com/dbgkgdeex/image/upload/v1773800420/sua_foto.png" 
                alt="Kaio Nilo de Freitas Nobre" 
                className="w-full h-full object-cover rounded-[15px] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* COLUNA DE TEXTO E REDES SOCIAIS */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {/* Linha decorativa horizontal */}
              <div className="w-16 h-[2px] bg-[#1DEA4C] mb-2" />
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                Kaio Nilo de <br /> Freitas Nobre
              </h3>
              
              {/* ÍCONES SOCIAIS: Alinhados horizontalmente */}
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-[#1DEA4C] transition-colors"><Mail size={24} /></a>
                <a href="#" className="hover:text-[#1DEA4C] transition-colors"><Monitor size={24} /></a>
                <a href="#" className="hover:text-[#1DEA4C] transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-[#1DEA4C] transition-colors"><Github size={24} /></a>
                <a href="#" className="hover:text-[#1DEA4C] transition-colors text-xl font-bold">Bē</a>
              </div>
            </div>

            {/* DESCRIÇÃO PROFISSIONAL: Justificada e com espaçamento */}
            <div className="text-[#F2F9FF]/80 text-sm lg:text-base leading-relaxed flex flex-col gap-4 max-w-[600px]">
              <p>
                Sou Designer Sênior, atuante desde 2018, e Desenvolvedor Full Stack Júnior, atuante desde 2024.
              </p>
              <p>
                Trabalho na produção de materiais digitais com foco em usabilidade, design responsivo, performance digital e em conversão.
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO DE SKILLS: Grid de tags com bordas neon */}
        <div className="mt-16 lg:mt-20">
          <h4 className="text-2xl font-black mb-8 uppercase tracking-widest">MINHAS SKILLS:</h4>
          
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-4 py-2 border border-[#1DEA4C] rounded-lg text-xs lg:text-sm font-bold tracking-widest hover:bg-[#1DEA4C] hover:text-[#202020] transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};