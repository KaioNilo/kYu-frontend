export interface OrderRequest {
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  services: {
    description: string;
    quantity?: number;
  }[];
  notes?: string;
  lgpd: {
    agreed: boolean;
  };
}
