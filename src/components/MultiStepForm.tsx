import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createOrderSchema, type OrderFormData } from '../types/order'; 
import { submitOrder } from '../services/orderService';
import { ChevronRight, Send, Plus, Minus, ChevronDown } from 'lucide-react';
import { TermsModal } from './TermsModal'; // Importação do componente externo corrigido

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const { register, control, handleSubmit, watch, trigger, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      customer: { name: '', email: '', phone: '' },
      services: [],
      notes: '',
      lgpd: { termsConsent: false }
    }
  });

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "services"
  });

  const watchedServices = watch("services") || [];
  const totalAmount = watchedServices.reduce((acc, curr) => {
    const qty = curr.quantity ?? 0;
    const prc = curr.price ?? 0;
    return acc + (qty * prc);
  }, 0);

  const handleNextStep = async (fieldsToValidate: any[]) => {
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((prev) => prev + 1);
  };

  const onSubmit = async (data: OrderFormData) => {
    try {
      await submitOrder(data);
      setIsSuccess(true);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const addService = (name: string, price: number) => {
    if (!fields.find(s => s.description === name)) {
      append({ description: name, quantity: 1, price });
    }
  };

  if (isSuccess) {
    return (
      <div 
        className="bg-[#1DEA4C] border-7 h-105 p-5 rounded-[20px] text-center text-[#202020] flex flex-col items-center justify-center  mx-auto shadow-2xl animate-in zoom-in bg-cover bg-top bg-no-repeat lg:p-15 lg:justify-end" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1773153039/BGpopup_kprljq.png')"}}
      >
        <h2 className="text-3xl font-black uppercase tracking-wider">Pedido Realizado!</h2>
        <p className="text-lg mx-5 font-bold">Em breve, entraremos em contato por e-mail.</p>
        <button onClick={() => window.location.reload()} className="mt-2 border-2 border-[#202020] hover:bg-[#202020] hover:text-[#F2F9FF] transition-all px-8 py-2 rounded-full font-bold uppercase">Fechar</button>
      </div>
    );
  }

  return (
    <div className="bg-[#202020] p-8 rounded-2xl border border-[#F2F9FF]/10 shadow-2xl flex overflow-hidden h-auto min-h-[500px] lg:h-[550px]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[290px] flex flex-col justify-between md:w-100 lg:w-130 h-auto">
        
        {/* PASSO 1: DADOS DO CLIENTE */}
        {step === 1 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 mx-auto md:w-100 lg:w-130">
            <div className="flex flex-col">
              <input {...register("customer.name")} placeholder="DIGITE SEU NOME" className="bg-[#F2F9FF] p-5 mb-2 rounded-2xl text-[#2322e3] font-bold placeholder:text-[#9A67FF] outline-none focus:ring-2 ring-[#2322E3] lg:h-15 lg:text-lg" />
              {errors.customer?.name && <span className="text-[#B58FFF] text-[10px] ml-2 uppercase lg:text-[12px]">{errors.customer.name.message}</span>}
            </div>
            
            <div className="flex flex-col">
              <input {...register("customer.email")} placeholder="SEU_EMAIL@EMAIL.COM" className="bg-[#F2F9FF] mb-2 p-5 rounded-2xl text-[#2322e3] font-bold placeholder:text-[#9A67FF] outline-none focus:ring-2 ring-[#2322E3] lg:h-15 lg:text-lg" />
              {errors.customer?.email && <span className="text-[#B58FFF] text-[10px] ml-2 uppercase lg:text-[12px]">{errors.customer.email.message}</span>}
            </div>
            
            <div className="flex flex-col">
              <input {...register("customer.phone")} placeholder="(00) 00000-0000" className="bg-[#F2F9FF] p-5 mb-1 rounded-2xl text-[#2322e3] font-bold placeholder:text-[#9A67FF] outline-none focus:ring-2 ring-[#2322E3] lg:h-15 lg:text-lg" />
              {errors.customer?.phone && <span className="text-[#B58FFF] text-[10px] ml-2 uppercase lg:text-[12px]">{errors.customer.phone.message}</span>}
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-3 text-[10px] text-[#C7CACC] font-bold cursor-pointer lg:text-[13px]">
                <input type="checkbox" {...register("lgpd.termsConsent")} className="w-5 h-5 rounded-full border-2 border-[#1DEA4C] appearance-none checked:bg-[#1DEA4C] transition-all cursor-pointer" />
                <span>
                  LI E CONCORDO COM OS{" "}
                  <button type="button" onClick={() => setIsTermsOpen(true)} className="underline text-[#F2F9FF] hover:text-[#9A67FF] transition-colors">TERMOS</button>
                  {" "}E{" "}
                  <button type="button" onClick={() => setIsTermsOpen(true)} className="underline text-[#F2F9FF] hover:text-[#9A67FF] transition-colors">PRIVACIDADE</button>
                </span>
              </label>
              {errors.lgpd?.termsConsent && <span className="text-[#B58FFF] ml-2 mt-1 text-[10px] uppercase">Aceite os termos para continuar</span>}
            </div>
            
            <button type="button" onClick={() => handleNextStep(["customer.name", "customer.email", "customer.phone", "lgpd.termsConsent"])} className="border-2 border-[#1DEA4C] text-[#F2F9FF] my-5 p-4 rounded-2xl font-black flex justify-center items-center gap-2 hover:bg-[#1DEA4C] hover:text-[#202020] transition-all uppercase">
              Avançar <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* PASSO 2: SERVIÇOS */}
        {step === 2 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
            <div className="relative w-full">
              <select 
                onChange={(e) => {
                  const [n, p] = e.target.value.split('|');
                  if(n) addService(n, Number(p));
                }}
                className="bg-[#F2F9FF] p-5 rounded-2xl text-[#9A67FF] font-black outline-none cursor-pointer w-full appearance-none pr-12 lg:text-[14px]"
              >
                <option value="">ESCOLHA O(S) SERVIÇO(S)</option>
                <option value="Landing Page|4000">Landing Page</option>
                <option value="Identidade Visual|1000">Identidade Visual</option>
                <option value="Logomarca|500">Logomarca</option>
                <option value="Ilustração|400">Ilustração</option>
                <option value="Edição de Imagem|50">Edição de Imagem</option>
                <option value="Post estático|100">Post estático</option>
                <option value="Post estático + Story  |150">Post estático + Story</option>
                <option value="Post carrossel|400">1 Post carrossel</option>
                <option value="Post carrossel + Stories|600">Post carrossel + Stories</option>
                <option value="Reels|300">Reels</option>
                <option value="Assinatura de Email|50">Assinatura de Email</option>
                <option value="Cartão de Visita|50">Cartão de Visita</option>
                <option value="Papel Timbrado|50">Papel Timbrado</option>
                <option value="Panfleto|150">Panfleto</option>
                <option value="Folder |200">Folder</option>
                <option value="Banner|100">Banner</option>
                <option value="Bandeira|100">Bandeira</option>
                <option value="Blusa|150">Blusa</option>
                <option value="Botton|50">Botton</option>
                <option value="Cartaz|100">Cartaz</option>
                <option value="Backdrop|80">Backdrop</option>
                <option value="Windbanner|50">Windbanner</option>
                <option value="Diagramação [Por Página]|50">Diagramação [Por Página]</option>
                <option value="Apresentação Profissional [Por Slide]|30">Apresentação Profissional [Por Slide]</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#9A67FF]">
                <ChevronDown size={24} strokeWidth={3} /> 
              </div>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {fields.map((field, index) => (
                <div key={field.id} className="border border-[#F2F9FF]/10 p-4 rounded-2xl flex justify-between items-center bg-[#F2F9FF]/5">
                    <div className="flex flex-col">
                      <span className="text-[#F2F9FF] font-black uppercase lg:text-[14px]">{field.description}</span>
                      <span className="text-[#636363] font-bold lg:text-[14px]">UN: R$ {field.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => field.quantity > 1 ? update(index, { ...field, quantity: field.quantity - 1 }) : remove(index)} className="text-[#F2F9FF] hover:text-[#B58FFF] transition-colors p-1">
                        <Minus size={14}/>
                      </button>
                      <span className="text-[#F2F9FF] font-bold w-4 text-center">{field.quantity}</span>
                      <button type="button" onClick={() => update(index, { ...field, quantity: field.quantity + 1 })} className="text-[#F2F9FF] hover:text-[#1DEA4C] transition-colors p-1 ">
                        <Plus size={14}/>
                      </button>
                    </div>
                </div>
              ))}
            </div>

            <div className="text-right border-t border-[#F2F9FF]/10 pt-2">
              <p className="text-[#F2F9FF] font-black text-sm uppercase">Total: <span className="text-[#1DEA4C] text-[18px]">R$ {totalAmount.toFixed(2)}</span></p>
              {errors.services && <span className="text-[#B58FFF] text-[10px] font-bold uppercase block mt-1">Selecione pelo menos um serviço</span>}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border-2 border-[#2322E3] text-[#F2F9FF] p-4 rounded-2xl font-black hover:bg-[#2322E3]/20 uppercase">Voltar</button>
              <button type="button" onClick={() => handleNextStep(["services"])} className="flex-1 border-2 border-[#1DEA4C] text-[#F2F9FF] p-4 rounded-2xl font-black hover:bg-[#1DEA4C] hover:text-[#202020] uppercase">Avançar</button>
            </div>
          </div>
        )}

        {/* PASSO 3: OBSERVAÇÕES */}
        {step === 3 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
            <textarea {...register("notes")} placeholder="ADICIONE OBSERVAÇÕES RELEVANTES..." className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] h-40 resize-none outline-none focus:ring-2 ring-[#2322E3] lg:text-lg" />
            <h3 className="text-[#1DEA4C] text-[13px] text-center my-3 mx-5 font-black uppercase md:mx-15 lg:text-lg">Clique em solicitar para oficializar o pedido do serviço. 😊</h3>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="flex-1 border-2 border-[#2322E3] text-[#F2F9FF] p-4 rounded-2xl font-black uppercase hover:bg-[#2322E3]/20 transition-all">Voltar</button>
              <button type="submit" className="flex-1 border-2 border-[#1DEA4C] text-[#F2F9FF] p-4 rounded-2xl font-black flex justify-center items-center gap-2 hover:bg-[#1DEA4C] hover:text-[#202020] transition-all uppercase">Solicitar <Send size={18} /></button>
            </div>
          </div>
        )}

        {/* INDICADOR DE ETAPAS */}
        <div className="flex justify-center gap-3 pt-4 mb-5">
          {[1, 2, 3].map(i => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step === i ? 'bg-[#9A67FF] scale-125 shadow-[0_0_10px_#9A67FF]' : 'bg-[#636363]'}`} />
          ))}
        </div>
      </form>
      
      {/* MODAL IMPORTADO - Controlado pelo estado local */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};