import {
  adicionarAoCarrinho,
  atualizarCarrinho,
  calcularTotalCarrinho,
  carrinho,
  checarCarrinho,
} from "./carrinho";
import {
  atualizarCliente,
  cadastrarCliente,
  deletarCliente,
  listarClientes,
} from "./clientes";
import { consultarPedidoPorId, finalizarPedido, novoPedido } from "./pedidos";
import {
  atualizarProduto,
  cadastrarProduto,
  deletarProduto,
  listarProdutos,
} from "./produtos";
import { Cliente, ItemCarrinho, Pedido, Produto } from "./types";

console.log("=== Ecommerce SCTEC ===");

console.log("\n** Produtos **");

console.log("\nProdutos cadastrados:");
listarProdutos();
console.log("------------------------------------------------------");
console.log("\nCadastrando novo produto:");

const novoProduto1: Produto = {
  id: 6,
  nome: "Calça jeans",
  categoria: "Vestuario",
  preco: 299.9,
  estoque: 30,
};
const novoProduto2: Produto = {
  id: 6,
  nome: "Calça jeans",
  categoria: "Vestuario",
  preco: 299.9,
  estoque: 30,
};
cadastrarProduto(novoProduto1);
listarProdutos();
console.log("\n");
cadastrarProduto(novoProduto2); //Erro: cadastrar produto com mesmo ID
console.log("------------------------------------------------------");
console.log("\nAtualizando produto:");
atualizarProduto(6, { estoque: 20, preco: 239.9 });
listarProdutos();
console.log("------------------------------------------------------");
console.log("\n Deletando produto:");
deletarProduto(6);
listarProdutos();
console.log("------------------------------------------------------");

console.log("** Clientes **");

console.log("\nClientes cadastrados:");
listarClientes();
console.log("------------------------------------------------------");
console.log("\nCadastrando cliente:");
const novoCliente1: Cliente = {
  id: 4,
  nome: "Julio Cesar",
  email: "cesarJ@gmail.com",
};
cadastrarCliente(novoCliente1);
listarClientes();
console.log("------------------------------------------------------");
console.log("\nAtualizar cliente:");
atualizarCliente(4, { nome: "Julio" }); //Erro: nome incompleto.
atualizarCliente(4, { email: "cesarJ.com" }); //Erro: e-mail inválido.
console.log("------------------------------------------------------");
console.log("\nDeletar cliente:");
deletarCliente(4);
listarClientes();
console.log("------------------------------------------------------");

console.log("** Carrinho **");
console.log("\n");
checarCarrinho();
console.log("\nAdicionar ao carrinho:");
adicionarAoCarrinho(1, 10);
adicionarAoCarrinho(2, 5);
adicionarAoCarrinho(50, 9); //Erro: ID n existente.
checarCarrinho();
console.log("------------------------------------------------------");
console.log("\nAtualizar carrinho:");
atualizarCarrinho(2, 20);
checarCarrinho();
console.log("------------------------------------------------------");

console.log("** Pedido **");

novoPedido(1);
finalizarPedido(1);