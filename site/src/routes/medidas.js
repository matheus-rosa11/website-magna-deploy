/** @format */

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas-media/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidasMedia(req, res);
});

router.get("/ultimasSuporte/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidasSuporte(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-real-suporte/:idAquario", function (req, res) {
  medidaController.buscarMedidasEmTempoRealSuporte(req, res);
});

router.get("/servidor/:idEmpresa", function (req, res) {
  medidaController.buscarServidores(req, res);
});

router.get("/servidor/deletar/:idLinha", function (req, res) {
  medidaController.deletarServidor(req, res);
});

router.put("/servidor/atualizar/:idLinha", function (req, res) {
  medidaController.atualizarServidor(req, res);
});

router.get("/usuarios/:idEmpresa", function (req, res) {
  medidaController.buscarUsuarios(req, res);
});

router.get("/usuarios/deletar/:idLinha", function (req, res) {
  medidaController.deletarUsuario(req, res);
});

router.put("/usuarios/atualizar/:idLinha", function (req, res) {
  medidaController.atualizarUsuario(req, res);
});

router.get("/dados/:idAquario", function (req, res) {
  medidaController.coletarDadosMedia(req, res);
});

module.exports = router;
