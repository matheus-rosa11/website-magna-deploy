/** @format */

var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
  const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarUltimasMedidas(idAquario, limite_linhas)
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
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasMedia(req, res) {
  const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarUltimasMedidasMedia(idAquario, limite_linhas)
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
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasSuporte(req, res) {
  const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarUltimasMedidasSuporte(idAquario, limite_linhas)
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
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
  var idAquario = req.params.idAquario;

  console.log(`Recuperando medidas em tempo real`);

  medidaModel
    .buscarMedidasEmTempoReal(idAquario)
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
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealSuporte(req, res) {
  var idAquario = req.params.idAquario;

  console.log(`Recuperando medidas em tempo real (Suporte)`);

  medidaModel
    .buscarMedidasEmTempoRealSuporte(idAquario)
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
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarServidores(req, res) {
  let idEmpresa = req.params.idEmpresa;
  console.log(`Buscando servidores`);

  medidaModel
    .buscarServidores(idEmpresa)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function deletarServidor(req, res) {
  var idLinha = req.params.idLinha;
  console.log(`Deletando servidor`);

  medidaModel
    .deletarServidor(idLinha)
    .then(function (resultado) {
      if (resultado) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarServidor(req, res) {
  var idLinha = req.params.idLinha;
  var nome = req.body.nomeServer;
  var cidade = req.body.cidadeServer;
  var nucleos = req.body.nucleosServer;
  var ram = req.body.ramServer;
  var disco1 = req.body.disco1Server;
  var disco2 = req.body.disco2Server;
  console.log(`Deletando servidor`);
  console.log(idLinha);

  medidaModel
    .atualizarServidor(idLinha, nome, cidade, nucleos, ram, disco1, disco2)
    .then(function (resultado) {
      if (resultado) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarUsuarios(req, res) {
  let fkEmpresa = req.params.idEmpresa;
  console.log(`Buscando servidores`);
  console.log(fkEmpresa);
  medidaModel
    .buscarUsuarios(fkEmpresa)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function deletarUsuario(req, res) {
  var idLinha = req.params.idLinha;
  console.log(`Deletando servidor`);

  medidaModel
    .deletarUsuario(idLinha)
    .then(function (resultado) {
      if (resultado) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarUsuario(req, res) {
  var idLinha = req.params.idLinha;
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var cargo = req.body.cargoServer;

  console.log(`Atualizando usuário`);
  console.log(idLinha);

  medidaModel
    .atualizarUsuario(idLinha, nome, email, senha, cargo)
    .then(function (resultado) {
      if (resultado) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function coletarDadosMedia(req, res) {
  var idLinha = req.params.idAquario;
  // console.log(`Buscando servidores`);

  medidaModel
    .coletarDadosMedia(idLinha)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar servidor.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarUltimasMedidas,
  buscarUltimasMedidasSuporte,
  buscarMedidasEmTempoReal,
  buscarMedidasEmTempoRealSuporte,
  buscarServidores,
  deletarServidor,
  atualizarServidor,
  buscarUsuarios,
  deletarUsuario,
  atualizarUsuario,
  coletarDadosMedia,
  buscarUltimasMedidasMedia,
};
