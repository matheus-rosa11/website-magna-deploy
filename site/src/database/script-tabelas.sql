-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database magna;
use magna;

-- MySQL
CREATE TABLE Empresa(
    id_empresa int primary key auto_increment,
    nome_empresa varchar(50),
    CNPJ char(14),
    telefone varchar(20)
);

CREATE TABLE Usuario(
    id_usuario int primary key auto_increment,
    fk_empresa int,
    foreign key (fk_empresa) references Empresa(id_empresa),
    tipo_usuario varchar(50)
    check(tipo_usuario in("admin", "gerente", "suporte")),
    nome_usuario varchar(50),
    email varchar(50),
    senha varchar(50),
    primeiro_acesso tinyint
);

CREATE TABLE Servidor(
    id_servidor int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references Empresa(id_empresa),
    qtd_armazenamento double,
    max_utilizacao_disco double,
    qtd_nucleos int,
    clock double,
    max_utilizacao_processador double,
    qtd_ram double,
    max_utilizacao_ram double
);

CREATE TABLE RegistroServer(
    id_registro int primary key auto_increment,
    fk_servidor int,
    foreign key(fk_servidor) references Servidor(id_servidor),
    ram_em_uso double,
    disco_em_uso double,
    processador_em_uso double,
    data_registro datetime
);

INSERT INTO usuario (email, senha, tipo_usuario) VALUES ("a@a.com", "123", "admin");
INSERT INTO usuario (email, senha, tipo_usuario) VALUES ("@.com", "456", "gerente");
INSERT INTO usuario (email, senha, tipo_usuario) VALUES ("@.com", "789", "suporte");
