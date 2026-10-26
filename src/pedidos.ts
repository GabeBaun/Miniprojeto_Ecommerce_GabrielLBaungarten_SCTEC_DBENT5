import { Pedido } from "./types";
import { buscarClientePorId } from "./clientes";
import { carrinho, calcularTotalCarrinho } from "./carrinho";

export const pedidos: Pedido[] = [];

export function exibirResumoPedido(pedido: Pedido): void {
  const dataFormatada = new Date(pedido.data).toLocaleString("pt-BR");

  console.log("\n========================================");
  console.log(`        RESUMO DO PEDIDO #${pedido.id}`);
  console.log("========================================");
  console.log(`Data: ${dataFormatada}`);
  console.log(`ID do Cliente: ${pedido.clienteId}`);
  console.log("----------------------------------------");
  console.log("ITENS COMPRADOS:");

  for (const item of pedido.itens) {
    const subtotal = item.produto.preco * item.quantidade;
    console.log(
      `   - ${item.quantidade}x ${item.produto.nome.padEnd(18)} | Un: R$ ${item.produto.preco.toFixed(2)} | Subtotal: R$ ${subtotal.toFixed(2)}`
    );
  }

  console.log("----------------------------------------");
  console.log(`TOTAL DO PEDIDO: R$ ${pedido.total.toFixed(2)}`);
  console.log("========================================\n");
}

export function novoPedido(clienteId: number): Pedido | undefined {
  if (typeof clienteId !== "number" || clienteId <= 0) {
    console.log("Erro: O ID do cliente deve ser um número válido.");
    return undefined;
  }

  const cliente = buscarClientePorId(clienteId);
  if (cliente === undefined) {
    console.log(`Erro: Cliente com ID ${clienteId} não foi encontrado.`);
    return undefined;
  }

  if (carrinho.length === 0) {
    console.log("Erro: Não é possível criar um pedido com o carrinho vazio.");
    return undefined;
  }

  const pedidoGerado: Pedido = {
    id: pedidos.length + 1,
    clienteId: clienteId,
    itens: [...carrinho],
    total: calcularTotalCarrinho(),
    data: Date.now()
  };

  pedidos.push(pedidoGerado);
  carrinho.length = 0;

  console.log(`Pedido #${pedidoGerado.id} registrado para o cliente ${cliente.nome}.`);
  return pedidoGerado;
}

export function consultarPedidoPorId(idPedido: number): Pedido | undefined {
  if (typeof idPedido !== "number" || idPedido <= 0) {
    console.log("Erro: Informe um ID de pedido válido.");
    return undefined;
  }

  const pedido = pedidos.find(p => p.id === idPedido);

  if (pedido === undefined) {
    console.log(`Erro: Pedido com ID #${idPedido} não foi encontrado.`);
    return undefined;
  }

  console.log(`\nDetalhes do Pedido #${pedido.id}:`);
  exibirResumoPedido(pedido);

  return pedido;
}

export function finalizarPedido(pedidoId: number): Pedido | undefined {
  if (typeof pedidoId !== "number" || pedidoId <= 0) {
    console.log("Erro: O ID do pedido fornecido é inválido.");
    return undefined;
  }

  const pedido = pedidos.find(p => p.id === pedidoId);

  if (pedido === undefined) {
    console.log(`Erro: Pedido com ID #${pedidoId} não foi encontrado para finalização.`);
    return undefined;
  }

  if (!pedido.itens || pedido.itens.length === 0) {
    console.log(`Erro: O Pedido #${pedidoId} não possui itens para ser finalizado.`);
    return undefined;
  }

  for (const item of pedido.itens) {
    if (item.quantidade > item.produto.estoque) {
      console.log(
        `Erro: Não foi possível finalizar. Estoque insuficiente para "${item.produto.nome}". Solicitado: ${item.quantidade} | Em Estoque: ${item.produto.estoque}`
      );
      return undefined;
    }
  }
  for (const item of pedido.itens) {
    item.produto.estoque -= item.quantidade;
  }

  console.log(`\nPedido #${pedido.id} finalizado e confirmado com sucesso!`);
  exibirResumoPedido(pedido);

  return pedido;
}