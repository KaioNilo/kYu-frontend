import { z } from 'zod';

export const createOrderSchema = z.object({
  customer: z.object({
    name: z.string()
      .min(3, "O nome deve ter pelo menos 3 caracteres"), 
    email: z.string()
      .email("Formato de e-mail inválido"), 
    phone: z.string()
      .min(10, "Telefone inválido") 
      .max(15, "Telefone muito longo"),
  }),
  
  // Lista de serviços
  services: z.array(
    z.object({
      description: z.string(), 
      quantity: z.number()
        .int()
        .positive()
        .default(1), 
      price: z.number().optional(), // Exibição no front
    })
  ).nonempty("A lista de serviços não pode estar vazia"), 

  notes: z.string().optional(),

  lgpd: z.object({
    termsConsent: z.boolean()
      .refine(val => val === true, {
        message: "Você deve aceitar os termos da LGPD para prosseguir"
      })
  })
});


// Definir as propriedades das funções do Axios e States.
export type OrderFormData = z.infer<typeof createOrderSchema>;

// Interface para preencher Dropdown
export interface IService {
  _id: string;
  name: string; 
  price: number;
}