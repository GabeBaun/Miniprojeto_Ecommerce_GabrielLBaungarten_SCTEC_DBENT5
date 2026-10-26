import { Cliente, Produto, } from "./types";

//Banco de dados-------------------------------------------------------
export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Smartphone Galaxy S23",
    categoria: "Eletronicos",
    preco: 3499.9,
    estoque: 15,
  },
  {
    id: 2,
    nome: "Arroz Integral 1kg",
    categoria: "Alimentos",
    preco: 7.5,
    estoque: 120,
  },
  {
    id: 3,
    nome: "Camiseta Algodão Básica",
    categoria: "Vestuario",
    preco: 49.9,
    estoque: 45,
  },
  {
    id: 4,
    nome: "Jogo de Lençol Casal 100% Algodão",
    categoria: "Cama, mesa e banho",
    preco: 189.9,
    estoque: 8,
  },
  {
    id: 5,
    nome: "Fone de Ouvido Bluetooth sem Fio",
    categoria: "Eletronicos",
    preco: 199.0,
    estoque: 30,
  },
];

export const clientes: Cliente[] = [
  { id: 1, nome: "Carlos da Costa", email: "carlinhos2324@gmail.com" },
  { id: 2, nome: "Victor Souza", email: "vitinho2526@gmail.com" },
  { id: 3, nome: "Bruno Henrique", email: "bruninho2728@gmail.com" },
];
