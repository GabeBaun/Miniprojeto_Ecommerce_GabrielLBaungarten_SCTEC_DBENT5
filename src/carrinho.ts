import { buscarProdutoPorId } from "./produtos";
import { ItemCarrinho } from "./types";

export const carrinho: ItemCarrinho[] = [];

export function adicionarAoCarrinho(id: number, quantidade: number): boolean {
  if (quantidade <= 0) {
    console.log("Erro: A quantidade deve ser maior que zero.");
    return false;
  }

  const produto = buscarProdutoPorId(id);

  if (produto === undefined) {
    console.log(`Erro: Produto com ID ${id} não foi encontrado.`);
    return false;
  }

  if (quantidade > produto.estoque) {
    console.log(
      `Erro: Estoque insuficiente para "${produto.nome}". Disponível: ${produto.estoque}`,
    );
    return false;
  }

  const itemExistente = carrinho.find((item) => item.produto.id === id);

  if (itemExistente !== undefined) {
    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({ produto, quantidade });
  }

  console.log(
    `${quantidade}x "${produto.nome}" ID ${id} foram adicionado(s) ao carrinho com sucesso.`,
  );
  return true;
}
export function calcularTotalCarrinho(): number {
  return carrinho.reduce((total, item) => {
    return total + item.produto.preco * item.quantidade;
  }, 0);
}
export function checarCarrinho(): void {
  if (carrinho.length === 0) {
    console.log("Seu carrinho está vazio.");
    return;
  }

  console.log("----Seus itens----");
  for (const item of carrinho) {
    const subtotal = item.produto.preco * item.quantidade;
    console.log(
      `ID: ${item.produto.id} | ${item.produto.nome} | Qtd: ${item.quantidade} x R$ ${item.produto.preco.toFixed(2)} = Subtotal: R$ ${subtotal.toFixed(2)}`,
    );
  }
}

export function atualizarCarrinho(
  idProduto: number,
  novaQuantidade: number,
): boolean {
  if (novaQuantidade <= 0) {
    console.log("Erro: A quantidade não pode ser negativa ou 0.");
    return false;
  }

  const itemNoCarrinho = carrinho.find((item) => item.produto.id === idProduto);

  if (itemNoCarrinho === undefined) {
    console.log(
      `Erro: Produto com ID ${idProduto} não foi encontrado no carrinho.`,
    );
    return false;
  }

  if (novaQuantidade === 0) {
    const index = carrinho.indexOf(itemNoCarrinho);
    carrinho.splice(index, 1);
    console.log(`"${itemNoCarrinho.produto.nome}" foi removido do carrinho.`);
    return true;
  }

  const produtoCatalogo = buscarProdutoPorId(idProduto);

  if (
    produtoCatalogo !== undefined &&
    novaQuantidade > produtoCatalogo.estoque
  ) {
    console.log(
      `Erro: Estoque insuficiente para "${produtoCatalogo.nome}". Disponível: ${produtoCatalogo.estoque}`,
    );
    return false;
  }

  itemNoCarrinho.quantidade = novaQuantidade;
  console.log(
    `Quantidade de "${itemNoCarrinho.produto.nome}" atualizada para ${novaQuantidade}.`,
  );
  return true;
}
export function removerDoCarrinho(idProduto: number): boolean {
  const produto = buscarProdutoPorId(idProduto);

  const index = carrinho.findIndex((item) => item.produto.id === idProduto);

  if (index === -1) {
    const nomeProduto = produto ? `"${produto.nome}"` : `ID ${idProduto}`;
    console.log(`Erro: O produto ${nomeProduto} não está no carrinho.`);
    return false;
  }

  const itemRemovido = carrinho[index];
  carrinho.splice(index, 1);

  console.log(
    `"${itemRemovido.produto.nome}" foi removido do carrinho com sucesso.`,
  );
  return true;
}

