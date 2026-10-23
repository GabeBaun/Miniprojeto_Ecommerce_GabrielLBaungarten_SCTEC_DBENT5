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
    return false;
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

  if (existente !== undefined) {
    console.log("Esse produto já existe");
    return false;
  }

  if (
    (produto.id !== undefined && produto.id < 0) ||
    (produto.preco !== undefined && produto.preco < 0) ||
    (produto.estoque !== undefined && produto.estoque < 0)
  ) {
    console.log("Erro: Id, preço ou estoque não podem ter valores negativos.");
    return false;
  }

  if (produto.nome !== undefined) {
    const nomeLimpo = produto.nome.trim();

    if (nomeLimpo.length < 2) {
      console.log("Erro: O nome do produto deve ter pelo menos 2 caracteres.");
      return false;
    }

    produto.nome = nomeLimpo;
  }

  produtos.push(produto);
  console.log("Seu produto foi cadastrado");
  return true;
}

export function deletarProduto(id: number): boolean | undefined {
  const produto = buscarProdutoPorId(id);

  if (produto === undefined) {
    console.error(`Erro: Produto com ID ${id} não foi encontrado.`);
    return false;
  }
  const index = produtos.indexOf(produto);
  produtos.splice(index, 1);
  console.log(`Produto "${produto.nome}"(ID ${id} deletado com sucesso)`);
}


export function filtrarCategoria(categoria: Categoria): void {
  const produtosFiltrados = produtos.filter(
    produto => produto.categoria === categoria
  );

  if (produtosFiltrados.length === 0) {
    console.log(`Nenhum produto encontrado na categoria "${categoria}".`);
    return;
  }

  console.log(`--- Produtos da categoria: ${categoria} ---`);
  for (const produto of produtosFiltrados) {
    console.log(`${produto.id} | ${produto.nome} | R$ ${produto.preco} | Estoque: ${produto.estoque}`);
  }
}

