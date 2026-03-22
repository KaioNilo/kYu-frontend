import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#202020] border border-[#F2F9FF]/20 w-full max-w-3xl max-h-[85vh] rounded-[25px] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CABEÇALHO */}
        <div className="flex-none flex justify-between items-center p-6 border-b border-[#F2F9FF]/10 bg-[#252525] rounded-t-[25px]">
          <h2 className="text-[#1DEA4C] uppercase tracking-[0.15em] text-xl lg:text-2xl">
            Termos & Privacidade
          </h2>
          <button onClick={onClose} className="text-[#F2F9FF] hover:text-[#9A67FF] transition-all p-2">
            <X size={32} strokeWidth={2.5} />
          </button>
        </div>

        {/* CONTEÚDO CORRIDO */}
        <div className="flex-1 min-h-0 p-8 overflow-y-auto text-[#F2F9FF]/90 font-sans text-sm lg:text-base leading-relaxed custom-scrollbar">
          <p>
            Como profissional de sério, valorizo a transparência em todas as etapas de projeto, garantindo a proteção de suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD). Ao preencher o formulário para solicitar um orçamento de serviços como Landing Pages, Sites Customizados ou quaisquer outros produtos ou serviços, você fornece voluntariamente dados como Nome, E-mail e Telefone, que são utilizados exclusivamente como contato direto para alinhar detalhes técnicos e envio de atualizações sobre o serviço. A segurança técnica dos seus dados é prioridade, sendo processados por APIs seguras e armazenados em banco de dados MongoDB com práticas modernas de criptografia e acesso restrito apenas pelo tempo necessário. Todo o material desenvolvido é protegido por direitos autorais e, em conformidade com a LGPD, você possui o direito de solicitar a correção, exclusão definitiva ou revogação do consentimento a qualquer momento. Ao selecionar o campo de aceite no formulário, você autoriza este processamento para fins de orçamento, ciente de que suas informações nunca serão compartilhadas com terceiros para fins publicitários.
          </p>
        </div>

        {/* RODAPÉ */}
        <div className="flex-none p-6 bg-[#252525] border-t border-[#F2F9FF]/10 flex justify-end rounded-b-[25px]">
          <button 
            onClick={onClose}
            className="px-10 py-3 bg-[#1DEA4C] text-[#202020] rounded-full font-black uppercase tracking-widest hover:bg-[#F2F9FF] transition-all transform hover:scale-105"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};