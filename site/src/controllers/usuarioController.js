/** @format */

var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  usuarioModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function getIdEmpresa(req, res) {
  let nome = req.params.nome;

  usuarioModel
    .getIdEmpresa(nome)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta do ID Empresa! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function entrar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .entrar(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarEmpresa(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nomeEmpresa = req.body.nomeServer;
  var telefone = req.body.telefoneServer;
  var cnpj = req.body.cnpjServer;

  // Faça as validações dos valores
  if (nomeEmpresa == undefined) {
    res.status(400).send("Seu nome está indefinido!");
  } else if (telefone == undefined) {
    res.status(400).send("Seu telefone está indefinido!");
  } else if (cnpj == undefined) {
    res.status(400).send("Seu CNPJ está indefinido!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrarEmpresa(nomeEmpresa, telefone, cnpj)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarManager(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeUsuarioServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var fkEmpresa = req.body.fkEmpresaServer;
  // console.log();
  console.log(nome, email, senha, fkEmpresa);

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está indefinido!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  }
  // else if (fkEmpresa == undefined) {
  //   res.status(400).send("Sua empresa está indefinida!");
  // }
  else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrarManager(nome, email, senha, fkEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarFuncionario(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeUsuarioServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var cargo = req.body.cargoServer;
  var fkEmpresa = req.body.fkEmpresaServer;

  console.log(nome, email, senha, cargo, fkEmpresa);

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está indefinido!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (fkEmpresa == undefined) {
    res.status(400).send("Sua empresa está indefinida!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else if (cargo == undefined) {
    res.status(400).send("Seu cargo está indefinida!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrarFuncionario(nome, email, senha, cargo, fkEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function adicionarServidor(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var cidade = req.body.cidadeServer;
  var nucleos = req.body.nucleosServer;
  var ram = req.body.ramServer;
  var disco1 = req.body.disco1Server;
  var disco2 = req.body.disco2Server;
  var idEmpresa = req.body.idEmpresaServer;

  nucleos = Number(nucleos);
  ram = Number(ram);
  disco1 = Number(disco1) * (1 * 10 ** 9);
  disco2 = Number(disco2) * (1 * 10 ** 9);

  console.log(disco1, disco2);

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está indefinido!");
  } else if (cidade == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (disco1 == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (disco2 == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .adicionarServidor(nome, cidade, nucleos, ram, disco1, disco2, idEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
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
  testar,
};
