import React from 'react';
// Substituição da Lucide pela Phosphor Icons
import { 
  EnvelopeSimple, 
  WhatsappLogo, 
  LinkedinLogo, 
  GithubLogo 
} from '@phosphor-icons/react'; 

export const About = () => {

  // Lista de habilidades baseada no seu perfil
  const skills = [
    "TYPESCRIPT", "REACT", "NODE",
    "JAVA", "PYTHON", "MONGODB",
    "POSTGRESQL", "WORDPRESS", "FIGMA", 
    "PHOTOSHOP", "ILLUSTRATOR"
  ];

  return (
    <section id="about" className="w-full bg-[#202020] py-10 lg:py-15 text-[#F2F9FF] font-sans">
      <div className="container mx-auto px-15 lg:px-30 max-w-[1000px]">
        
        {/* TÍTULO DA SEÇÃO */}
        <h2 className="text-center text-4xl tracking-[0.1em] lg:text-5xl mb-7 lg:mb-8 uppercase">
          SOBRE MIM
        </h2>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-5 items-start">
          
          {/* FOTO COM BORDA NEON */}
          <div className="relative group mx-auto lg:mx-0">
            <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] border-2 border-[#1DEA4C] rounded-[10px] overflow-hidden p-1">
              <img 
                src="https://res.cloudinary.com/dbgkgdeex/image/upload/v1774017024/Kaio_Nilo_qijhef.jpg" 
                alt="Kaio Nilo de Freitas Nobre" 
                className="w-full h-full object-cover rounded-[5px] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>

          {/* COLUNA DE TEXTO E REDES SOCIAIS */}
          <div className="flex flex-col gap-6 lg:mt-15">

            <div className="flex flex-col gap-2">
            
              {/* Linha Decorativa */}
              <div className="w-16 h-[3px] bg-[#1DEA4C] mb-2" />
              <h3 className="text-[18px] font-bold lg:text-2xl">
                Kaio Nilo de Freitas Nobre
              </h3>
              
              {/* ÍCONES SOCIAIS */}
              <div className="flex gap-6 my-3 items-center">
                {/* E-mail */}
                <a href="mailto:kaionilofreitas@gmail.com" className="hover:text-[#1DEA4C] transition-colors" title="E-mail">
                  <EnvelopeSimple size={32} />
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/5588992431192" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DEA4C] transition-colors" title="WhatsApp">
                  <WhatsappLogo size={32} />
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/kaionilofreitas" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DEA4C] transition-colors" title="LinkedIn">
                  <LinkedinLogo size={32} />
                </a>

                {/* GitHub */}
                <a href="https://github.com/KaioNilo" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DEA4C] transition-colors" title="GitHub">
                  <GithubLogo size={32} />
                </a>

                {/* Behance */}
                <a href="https://behance.net/KaioNiloFreitas" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DEA4C] transition-colors text-[28px] font-bold" title="Behance">
                  Bē
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* DESCRIÇÃO PROFISSIONAL */}
        <div className="text-[#F2F9FF] font-light text-sm mt-5 lg:text-base flex flex-col gap-3 lg:mt-10 lg:mr-15">
            <p>
                Com mais de oito anos de experiência como Designer e agora atuando também como Programador, meu foco é entender o que você precisa antes mesmo de começar a criar.
            </p>
            <p>
                Acredito que um bom projeto nasce de muita organização e planejamento, por isso uso métodos que garantem que tudo seja entregue no prazo e com a máxima qualidade.
            </p>
            <p>
                Eu trabalho para resolver as "dores" do seu dia a dia, transformando problemas complicados em soluções simples e fáceis de usar.
            </p>
            <p>
                No final, você terá um produto que não só tem um visual incrível, mas que também funciona perfeitamente para facilitar a sua vida e a dos seus clientes.
            </p>
        </div>

        {/* SEÇÃO DE SKILLS */}
        <div className="my-10">
          <h4 className="text-2xl font-black mb-5 uppercase tracking-widest">MINHAS SKILLS:</h4>
          
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-4 py-2 border border-[#1DEA4C] rounded-md text-xs lg:text-sm font-bold tracking-widest hover:bg-[#1DEA4C] hover:text-[#202020] transition-all cursor-default"
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