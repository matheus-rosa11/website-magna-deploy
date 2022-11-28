/** @format */

var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getIdEmpresa(nome) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        select id_empresa from Empresa where nome_empresa = '${nome}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT id_usuario, fk_empresa, nome_usuario, email, tipo_usuario FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarEmpresa(nomeEmpresa, telefone, cnpj) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nomeEmpresa,
    telefone,
    cnpj
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        insert into Empresa(nomeEmpresa, CNPJ, telefone) values ("${nomeEmpresa}", "${cnpj}", "${telefone}");
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarEmpresa(nomeEmpresa, telefone, cnpj) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nomeEmpresa,
    telefone,
    cnpj
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Empresa(nome_empresa, CNPJ, telefone) values ('${nomeEmpresa}', '${cnpj}', '${telefone}');
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarManager(nome, email, senha, fkEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha,
    fkEmpresa
  );
  console.log("aaa");
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Usuario(nome_usuario, fk_empresa, email, senha, tipo_usuario) values ('${nome}', ${fkEmpresa}, '${email}', '${senha}', 'gerente');
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarFuncionario(nome, email, senha, cargo, fkEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha,
    cargo,
    fkEmpresa
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        insert into Usuario(nome_usuario, fk_empresa, email, senha, tipo_usuario) values ('${nome}', ${fkEmpresa}, '${email}', '${senha}', '${cargo}');
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function adicionarServidor(
  nome,
  cidade,
  nucleos,
  ram,
  disco1,
  disco2,
  idEmpresa
) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    INSERT INTO Servidor
        (nome_servidor, cidade, qtd_memoria_ram, 	
          qtd_nucleos_fisicos, total_armazenamento_disco_1, total_armazenamento_disco_2, fk_empresa) values ('${nome}', '${cidade}', ${ram}, ${nucleos}, ${disco1}, ${disco2}, ${idEmpresa})`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  entrar,
  cadastrar,
  cadastrarEmpresa,
  cadastrarManager,
  cadastrarFuncionario,
  adicionarServidor,
  listar,
  getIdEmpresa,
};
