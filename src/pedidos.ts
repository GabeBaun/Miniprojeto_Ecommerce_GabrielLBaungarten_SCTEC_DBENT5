import { Pedido } from "./types";
import { buscarClientePorId } from "./clientes";
import { carrinho, calcularTotalCarrinho } from "./carrinho";

export const pedidos: Pedido[] = [];

export function novoPedido(clienteId: number): Pedido | undefined {

  const cliente = buscarClientePorId(clienteId);
  if (cliente === undefined) {
    console.log(`Erro: Cliente com ID ${clienteId} não foi encontrado.`);
    return undefined;
  }

  if (carrinho.length === 0) {
    console.log("Erro: Não é possível criar um pedido com o carrinho vazio.");
    return undefined;
  }

  for (const item of carrinho) {
    item.produto.estoque -= item.quantidade;
  }

  const novoPedido: Pedido = {
    id: pedidos.length + 1,
    clienteId: clienteId,
    itens: [...carrinho], 
    total: calcularTotalCarrinho(),
    data: Date.now() 
  };

  pedidos.push(novoPedido);
  carrinho.length = 0;

  console.log(`Pedido #${novoPedido.id} criado com sucesso para o cliente ${cliente.nome}!`);
  return novoPedido;
}

