export type Categoria = "eletronicos"|"alimentos"|"vestuario"|"cama,mesa e banho";

export type Produto ={
    id:number
    nome:string
    categoria:Categoria
    preco:number
    estoque:number
};