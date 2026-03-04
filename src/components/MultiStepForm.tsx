import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createOrderSchema, type OrderFormData } from '../types/order'; 
import { submitOrder } from '../services/orderService';
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Plus, Minus } from 'lucide-react';

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      customer: { name: '', email: '', phone: '' },
      services: [],
      notes: '',
      lgpd: { termsConsent: false }
    }
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: "services"
  });

  // Monitora serviços para cálculo total
  const watchedServices = watch("services") || [];
  const totalAmount = watchedServices.reduce((acc, curr) => {
    const qty = curr.quantity ?? 0;
    const prc = curr.price ?? 0;
    return acc + (qty * prc);
  }, 0);

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
      <div className="bg-[#1DEA4C] p-10 rounded-[40px] text-center text-[#202020] flex flex-col items-center gap-6 max-w-sm mx-auto shadow-2xl animate-in zoom-in">
        <CheckCircle2 size={80} strokeWidth={1.5} />
        <div className="space-y-2">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Pedido Realizado!</h2>
          <p className="text-sm font-bold">Em breve, entraremos em contato por e-mail.</p>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 border-2 border-[#202020] hover:bg-[#202020] hover:text-[#F2F9FF] transition-all px-8 py-2 rounded-full font-bold uppercase"
        >
          Fechar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#202020] p-8 rounded-[32px] w-full max-w-md border border-[#F2F9FF]/10 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* STEP 1: DADOS DO CLIENTE */}
        {step === 1 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
            <input {...register("customer.name")} placeholder="DIGITE SEU NOME" className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] font-bold placeholder:text-[#636363] outline-none focus:ring-2 ring-[#2322E3]" />
            <input {...register("customer.email")} placeholder="DIGITE SEU E-MAIL" className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] font-bold placeholder:text-[#636363] outline-none focus:ring-2 ring-[#2322E3]" />
            <input {...register("customer.phone")} placeholder="DIGITE SEU TELEFONE" className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] font-bold placeholder:text-[#636363] outline-none focus:ring-2 ring-[#2322E3]" />
            
            <label className="flex items-center gap-3 text-[10px] text-[#F2F9FF]/60 font-bold cursor-pointer group">
              <input type="checkbox" {...register("lgpd.termsConsent")} className="w-5 h-5 rounded-full border-2 border-[#1DEA4C] appearance-none checked:bg-[#1DEA4C] transition-all cursor-pointer" />
              <span>LI E CONCORDO COM OS <span className="underline text-[#F2F9FF]">TERMOS DE USO</span>.</span>
            </label>
            
            <button type="button" onClick={() => setStep(2)} className="border-2 border-[#1DEA4C] text-[#F2F9FF] p-4 rounded-2xl font-black flex justify-center items-center gap-2 hover:bg-[#1DEA4C] hover:text-[#202020] transition-all uppercase">
              Avançar <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* STEP 2: SERVIÇOS */}
        {step === 2 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
            <select 
              onChange={(e) => {
                const [n, p] = e.target.value.split('|');
                if(n) addService(n, Number(p));
              }}
              className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] font-bold outline-none cursor-pointer"
            >
              <option value="">ESCOLHA O(S) SERVIÇO(S)</option>
              <option value="Landing Page|500">Landing Page</option>
              <option value="Site Custom|900">Site Custom</option>
              <option value="Identidade Visual|300">Identidade Visual</option>
            </select>
            
            <div className="space-y-3 max-h-52 overflow-y-auto pr-2">
               {fields.map((field, index) => (
                 <div key={field.id} className="border border-[#F2F9FF]/10 p-4 rounded-2xl flex justify-between items-center bg-[#F2F9FF]/5">
                    <div className="flex flex-col">
                      <span className="text-[#F2F9FF] text-xs font-black uppercase">{field.description}</span>
                      <span className="text-[#636363] text-[10px] font-bold">UN: R$ {field.price.toFixed(2)}</span>
                    </div>
                    <div className="bg-[#202020] border border-[#F2F9FF]/20 flex items-center gap-4 px-3 py-1.5 rounded-xl text-[#F2F9FF]">
                      <button type="button" onClick={() => update(index, {...field, quantity: Math.max(1, field.quantity - 1)})} className="hover:text-[#1DEA4C]"><Minus size={14}/></button>
                      <span className="font-bold text-sm">{field.quantity}</span>
                      <button type="button" onClick={() => update(index, {...field, quantity: field.quantity + 1})} className="hover:text-[#1DEA4C]"><Plus size={14}/></button>
                    </div>
                 </div>
               ))}
            </div>

            <div className="text-right border-t border-[#F2F9FF]/10 pt-2">
              <p className="text-[#F2F9FF] font-black text-sm uppercase">Total: <span className="text-[#1DEA4C]">R$ {totalAmount.toFixed(2)}</span></p>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border-2 border-[#6261F6] text-[#F2F9FF] p-4 rounded-2xl font-black hover:bg-[#6261F6]/10">VOLTAR</button>
              <button type="button" onClick={() => setStep(3)} className="flex-1 border-2 border-[#1DEA4C] text-[#F2F9FF] p-4 rounded-2xl font-black hover:bg-[#1DEA4C] hover:text-[#202020]">AVANÇAR</button>
            </div>
          </div>
        )}

        {/* STEP 3: OBSERVAÇÕES */}
        {step === 3 && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
            <textarea 
              {...register("notes")} 
              placeholder="ADICIONE OBSERVAÇÕES..." 
              className="bg-[#F2F9FF] p-5 rounded-2xl text-[#202020] font-bold h-40 resize-none outline-none focus:ring-2 ring-[#2322E3]" 
            />
            <p className="text-[#1DEA4C] text-[10px] text-center font-black uppercase">
              Clique em solicitar para oficializar o pedido.
            </p>
            <div className="flex gap-3">
              <button 
                type="button" 
                onClick={() => setStep(2)} 
                className="flex-1 border-2 border-[#6261F6] text-[#F2F9FF] p-4 rounded-2xl font-black uppercase hover:bg-[#6261F6]/10 transition-all"
              >
                Voltar
              </button>

              <button 
                type="submit" 
                className="flex-1 border-2 border-[#1DEA4C] text-[#F2F9FF] p-4 rounded-2xl font-black flex justify-center items-center gap-2 hover:bg-[#1DEA4C] hover:text-[#202020] transition-all uppercase"
              >
                Solicitar <Send size={18} />
              </button>
            </div>
          </div>
        )}

        {/* INDICADOR DE ETAPAS */}
        <div className="flex justify-center gap-3 pt-4">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                step === i ? 'bg-[#9A67FF] scale-125 shadow-[0_0_10px_#9A67FF]' : 'bg-[#636363]'
              }`} 
            />
          ))}
        </div>
      </form>
    </div>
  );
};