import { Produto } from "./types";

//Banco de dados-------------------------------------------------------
export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Smartphone Galaxy S23",
    categoria: "eletronicos",
    preco: 3499.9,
    estoque: 15,
  },
  {
    id: 2,
    nome: "Arroz Integral 1kg",
    categoria: "alimentos",
    preco: 7.5,
    estoque: 120,
  },
  {
    id: 3,
    nome: "Camiseta Algodão Básica",
    categoria: "vestuario",
    preco: 49.9,
    estoque: 45,
  },
  {
    id: 4,
    nome: "Jogo de Lençol Casal 100% Algodão",
    categoria: "cama,mesa e banho",
    preco: 189.9,
    estoque: 8,
  },
  {
    id: 5,
    nome: "Fone de Ouvido Bluetooth sem Fio",
    categoria: "eletronicos",
    preco: 199.0,
    estoque: 30,
  },
];
