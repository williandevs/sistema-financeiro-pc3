export interface ProdutoModel {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  nome: string;
  valorCompra: number;
  valorVenda: number;
  estoque: number;
  descricao?: string;
  }