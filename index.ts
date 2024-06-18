interface Estoque<TItems extends Record<string, any>> {
  items: TItems[];
}

interface Produto {
  id: number;
  nome: string;
}

console.log("Estoque de Produtos:");

const estoque: Estoque<Produto> = {
  items: [],
};

console.log(estoque);

function addProduto(novoProduto: Produto): number {
  console.log(novoProduto);

  const novoTamanho = estoque.items.push(novoProduto);
  return novoTamanho;
}

const produto: Produto = {
  id: 1,
  nome: "Torneira",
};

addProduto(produto);

console.log(estoque);

console.log("Console de usuários:");

interface Usuario {
  id: number;
  cpf: string;
}

const estoqueDeUsuarios: Estoque<Usuario> = {
  items: [],
};

function addUsuario(novoUsuario: Usuario): number {
  return estoqueDeUsuarios.items.push(novoUsuario);
}

addUsuario({ id: 1, cpf: "234145125" });

console.log(estoqueDeUsuarios);
