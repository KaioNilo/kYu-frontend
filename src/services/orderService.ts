import api from './api';
import type { OrderFormData } from '../types/order';

// Interface de resposta do backend
export interface OrderResponse {
  success: boolean;
  message: string;
  order?: {
    token: string; // Token gerado pelo backend
    totalAmount: number; // Valor calculado pelo servidor
    status: string;
  };
}

// Função enviar orçamento ao back
export const submitOrder = async (data: OrderFormData): Promise<OrderResponse> => {
  try {
    const response = await api.post<OrderResponse>('/orcamentos', {
      customer: {
        name: data.customer.name,
        email: data.customer.email,
        phone: data.customer.phone
      },
      services: data.services.map(s => ({
        description: s.description,
        quantity: s.quantity
      })),
      notes: data.notes,
      lgpd: {
        termsConsent: data.lgpd.termsConsent
      }
    });

    return response.data;
  } catch (error: any) {
    // Tratamento de erro
    const errorMessage = error.response?.data?.message || "Erro ao processar sua solicitação.";
    console.error("Erro no envio do formulário:", errorMessage);
    throw new Error(errorMessage);
  }
};