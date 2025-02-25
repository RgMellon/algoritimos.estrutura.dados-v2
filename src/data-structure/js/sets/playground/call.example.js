function imprimeNomeEmail(tipoCliente) {
  console.log(this);
  console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`);
}

const cliente1 = {
  nome: "Carlos",
  email: "c@email.com",
};

const cliente2 = {
  nome: "Fred",
  email: "f@email.com",
};

imprimeNomeEmail.call("cliente especial");
