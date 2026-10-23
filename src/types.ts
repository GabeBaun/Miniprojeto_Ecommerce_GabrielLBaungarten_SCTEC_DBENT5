export type Categoria =
  | "Eletronicos"
  | "Alimentos"
  | "Vestuario"
  | "Cama, mesa e banho";

export type Produto = {
  id: number;
  nome: string;
  categoria: Categoria;
  preco: number;
  estoque: number;
};

export type Cliente = {
  id: number;
  nome: string;
  email: string;
};

export type itemCarrinho = {
  produto: Produto;
  quantidade: number;
};
