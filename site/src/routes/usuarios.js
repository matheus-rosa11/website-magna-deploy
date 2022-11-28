/** @format */

var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
  usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
  usuarioController.listar(req, res);
});

router.get("/getIdEmpresa/:nome", function (req, res) {
  usuarioController.getIdEmpresa(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
  usuarioController.cadastrarEmpresa(req, res);
});

router.post("/cadastrarManager", function (req, res) {
  usuarioController.cadastrarManager(req, res);
});

router.post("/cadastrarFuncionario", function (req, res) {
  usuarioController.cadastrarFuncionario(req, res);
});

router.post("/autenticar", function (req, res) {
  usuarioController.entrar(req, res);
});

router.post("/add-server", function (req, res) {
  usuarioController.adicionarServidor(req, res);
});

module.exports = router;
