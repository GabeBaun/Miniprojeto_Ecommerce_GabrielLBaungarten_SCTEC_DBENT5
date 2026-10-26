import { clientes } from "./banco-de-dados";
import { Cliente } from "./types";

export function listarClientes(): void {
  for (const cliente of clientes) {
    console.log(`${cliente.id}|` + `${cliente.nome}|` + `${cliente.email}`);
  }
}

export function buscarClientePorId(id: number): Cliente | undefined {
  return clientes.find((cliente) => cliente.id == id);
}
export function buscarClientePorNome(nome: string): Cliente | undefined {
  return clientes.find((cliente) => cliente.nome == nome);
}
export function buscarClientePorEmail(email: string): Cliente | undefined {
  return clientes.find((cliente) => cliente.email == email);
}

export function cadastrarCliente(cliente: Cliente): boolean {
  const existente = buscarClientePorId(cliente.id);

  if (existente !== undefined) {
    console.log("Erro: cliente já cadastrado");
    return false;
  }

  if (cliente.nome !== undefined) {
    const nomeLimpo = cliente.nome.trim();

    if (nomeLimpo.length < 3) {
      console.log("Erro: O nome do cliente deve ter pelo menos 3 caracteres.");
      return false;
    }

    if (!nomeLimpo.includes(" ")) {
      console.log("Erro: Digite o nome completo do cliente.");
      return false;
    }
    if (buscarClientePorNome(nomeLimpo) !== undefined) {
      console.log(
        `Erro: Já existe um cliente cadastrado com o nome "${nomeLimpo}".`,
      );
      return false;
    }

    cliente.nome = nomeLimpo;
  }
  if (cliente.email !== undefined) {
    const emailLimpo = cliente.email.trim().toLowerCase();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailLimpo)) {
      console.log("Erro: Formato do e-mail inválido.");
      return false;
    }
    if (buscarClientePorEmail(emailLimpo) !== undefined) {
      console.log(`Erro: O e-mail "${emailLimpo}" já está em uso.`);
      return false;
    }

    cliente.email = emailLimpo;
  }

  clientes.push(cliente);
  console.log("Cadastro realizado com sucesso");
  return true;
}

export function atualizarCliente(
  id: number,
  dadosAtualizados: Partial<Cliente>,
): boolean {
  const cliente = buscarClientePorId(id);

  if (cliente === undefined) {
    console.log(`Erro: Cliente com ID ${id} não foi encontrado.`);
    return false;
  }

  if (dadosAtualizados.nome !== undefined) {
    const nomeLimpo = dadosAtualizados.nome.trim();

    if (nomeLimpo.length < 3) {
      console.log("Erro: O nome do cliente deve ter pelo menos 3 caracteres.");
      return false;
    }
    if (buscarClientePorNome(nomeLimpo) !== undefined) {
      console.log(
        `Erro: Já existe um cliente cadastrado com o nome "${nomeLimpo}".`,
      );
      return false;
    }

    cliente.nome = nomeLimpo;
  }

  if (dadosAtualizados.email !== undefined) {
    const emailLimpo = dadosAtualizados.email.trim().toLowerCase();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailLimpo)) {
      console.log("Erro: Formato do e-mail inválido.");
      return false;
    }
    if (buscarClientePorEmail(emailLimpo) !== undefined) {
      console.log(`Erro: O e-mail "${emailLimpo}" já está em uso.`);
      return false;
    }

    cliente.email = emailLimpo;
  }

  console.log(`Cliente "${cliente.nome}" (ID ${id}) atualizado com sucesso.`);
  return true;
}
export function deletarCliente(id: number): boolean {
  const index = clientes.findIndex((cliente) => cliente.id === id);

  if (index === -1) {
    console.log(`Erro: Cliente com ID ${id} não foi encontrado.`);
    return false;
  }

  const clienteRemovido = clientes[index];

  clientes.splice(index, 1);

  console.log(
    `Cliente "${clienteRemovido.nome}" (ID ${id}) deletado com sucesso.`,
  );
  return true;
}
