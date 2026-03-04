import { z } from 'zod';

export const createOrderSchema = z.object({
  customer: z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"), 
    email: z.string().email("Formato de e-mail inválido"), 
    phone: z.string().min(10, "Telefone inválido").max(15) 
  }),
  services: z.array(z.object({
    description: z.string(),
    quantity: z.number().int().positive(), 
    price: z.number()
  })).nonempty("Selecione pelo menos um serviço"),
  notes: z.string().optional(),
  lgpd: z.object({
    termsConsent: z.boolean().refine(val => val === true, {
      message: "Aceite os termos para prosseguir"
    })
  })
});

export type OrderFormData = z.infer<typeof createOrderSchema>;