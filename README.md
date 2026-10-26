
# Miniprojeto E-commerce

## 👤 Identificação
* **Estudante:** Gabriel Luz Baungarten
* **Turma:** Desenvolvimento Backend Node turma 5

---

## 🎯 Objetivo da Aplicação
O objetivo desta aplicação é fornecer um sistema em Node.js e TypeScript para gerenciamento de um e-commerce em ambiente de terminal/console[cite: 1]. O sistema simula um fluxo de e-commerce permitindo o cadastro de clientes e produtos, controle de estoque, gerenciamento de carrinho de compras e finalização de pedidos[cite: 1].

---

## ✨ Funcionalidades Implementadas
- [x] **Gerenciamento de Clientes:** Cadastro e listagem de clientes[cite: 1].
- [x] **Gerenciamento de Produtos:** Cadastro, listagem e atualização de estoque de produtos[cite: 1].
- [x] **Gerenciamento do Carrinho:** Adição, remoção, alteração de quantidade e visualização de itens no carrinho de compras[cite: 1].
- [x] **Processamento de Pedidos:** Finalização de compras, cálculo de total do pedido e atualização automática de estoque[cite: 1].
- [x] **Simulação de Banco de Dados:** Persistência dos dados em memória durante a execução do programa[cite: 1].

---

## 🛠️ Tecnologias Utilizadas
- **Linguagem:** TypeScript / JavaScript (Node.js)[cite: 1]
- **Compilador:** TypeScript Compiler (`tsc`)[cite: 1]
- **Módulos & Configurações:** CommonJS / `tsconfig.json`[cite: 1]

---

## 📁 Estrutura dos Arquivos
```text
├── dist/                     # Código JavaScript compilado (gerado após o build)
├── src/
│   ├── banco-de-dados.ts     # Estrutura de armazenamento de dados em memória
│   ├── carrinho.ts           # Lógica do carrinho de compras
│   ├── clientes.ts           # Operações e gerenciamento de clientes
│   ├── main.ts               # Ponto de entrada da aplicação e menu/execução principal
│   ├── pedidos.ts            # Criação e histórico de pedidos
│   ├── produtos.ts           # Operações e controle de estoque de produtos
│   ├── types.ts              # Definição de interfaces e tipos de dados
│   └── utils.ts              # Funções utilitárias e auxiliares
├── .gitignore                # Arquivos ignorados pelo Git
├── tsconfig.json             # Configurações do compilador TypeScript
└── README.md                 # Documentação do projeto

```

---

## 🚀 Instruções de Compilação e Execução

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* `npm` ou `npx` para gerenciamento e execução dos scripts TypeScript

### Passo a Passo

1. **Instalar as dependências do projeto:**
```bash
npm install

```


2. **Compilar o código TypeScript:**
```bash
npx tsc

```


3. **Executar a aplicação:**
```bash
node dist/main.js

```



> *Dica:* Caso possua o `ts-node` instalado globalmente ou no projeto, é possível rodar diretamente o código TypeScript sem compilar previamente:
> ```bash
> npx ts-node src/main.ts
> 
> ```
> 
> 

---

## 📖 Exemplos das Principais Operações

### 1. Adicionar Produto ao Carrinho

```typescript
import { adicionarAoCarrinho } from './carrinho';

// Adiciona 2 unidades do produto ID 1 ao carrinho do cliente ID 1
adicionarAoCarrinho(clienteId, produtoId, quantidade);

```

### 2. Finalizar Pedido

```typescript
import { finalizarPedido } from './pedidos';

// Converte o carrinho do cliente em um pedido finalizado e abate o estoque
const novoPedido = finalizarPedido(clienteId);
console.log(novoPedido);

```

---

## 📐 Regras de Negócio Implementadas

1. **Validação de Estoque:** Um produto só pode ser adicionado ao carrinho se houver quantidade suficiente em estoque.
2. **Atualização Automática de Estoque:** Ao finalizar o pedido, a quantidade dos produtos em estoque é deduzida automaticamente de acordo com os itens do carrinho.
3. **Limpeza do Carrinho:** Após a finalização bem-sucedida de um pedido, o carrinho do cliente é esvaziado.
4. **Cálculo de Totais:** O valor total do pedido é calculado dinamicamente multiplicando o preço unitário da época da compra pela quantidade de cada item.

---

## ⚠️ Limitações Conhecidas do Sistema

* **Armazenamento em Memória:** Os dados (clientes, produtos, pedidos) são mantidos apenas durante a execução. Reiniciar o programa limpa todos os registros cadastrados.
* **Interface de Usuário:** A aplicação não possui interface gráfica (GUI) nem API REST/HTTP, sendo executada e visualizada diretamente via CLI/console.
* **Autenticação:** Não há controle de acesso, senhas ou autenticação de usuários.

```

```