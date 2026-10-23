import { produtos } from "./banco-de-dados";
import { Categoria, Produto } from "./types";
import { formatarMoeda } from "./utils";

export function listarProdutos(): void {
  for (const produto of produtos) {
    console.log(
      `${produto.id}|` +
        `${produto.categoria}: ${produto.nome}|` +
        `${formatarMoeda(produto.preco)}|` +
        `Em estoque:${produto.estoque}`,
    );
  }
}

export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find((produto) => produto.id == id);
}

export function buscarProdutoNome(nome: string): Produto | undefined {
  return produtos.find((produto) => produto.nome == nome);
}

export function atualizarProduto(
  id: number,
  dadosAtualizados: Partial<Produto>,
): boolean {
  const produto = buscarProdutoPorId(id);

  if (!produto) {
    console.log("Produto inexistente.");
    return false;
  }

  if (
    (dadosAtualizados.preco !== undefined && dadosAtualizados.preco < 0) ||
    (dadosAtualizados.estoque !== undefined && dadosAtualizados.estoque < 0)
  ) {
    console.log("Erro: Preço ou estoque não podem ter valores negativos.");
  }

  if (dadosAtualizados.nome !== undefined) {
    const nomeLimpo = dadosAtualizados.nome.trim();
  }

  Object.assign(produto, dadosAtualizados);
  console.log("Produto atualizado com successo!");
  return true;
}
export function cadastrarProduto(produto: Produto): boolean {
  const existente = buscarProdutoPorId(produto.id);

  if (existente != undefined) {
    console.log("Esse produto ja existe");
    return false;
  }
  if (
    (produto.id !== undefined && produto.id < 0) ||
    (produto.preco !== undefined && produto.preco < 0) ||
    (produto.estoque !== undefined && produto.estoque < 0)
  ) {
    console.log("Erro: Id, preço ou estoque não podem ter valores negativos.");
    return false
  }

  if (produto.nome !== undefined) {
    const nomeLimpo = produto.nome.trim();
    return false
  }

  produtos.push(produto);
  console.log("Seu produto foi cadastrado");
  return true;
}

listarProdutos();

const novoProduto: Produto = {
  id: 6,
  nome: "  ",
  categoria: "Alimentos",
  preco: -3,
  estoque: 200,
};


