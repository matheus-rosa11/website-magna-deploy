var btn = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", entrar);

function validarEmail() {
  let email = inputEmail.value;

  if (email.indexOf("@") <= -1 || email.indexOf(".com") <= -1) {
    spanEmail.innerHTML = "E-mail inválido.";
  } else {
    spanEmail.innerHTML = "";
  }
}

function entrar(e) {
  e.preventDefault();
  var emailVar = inputEmail.value;
  var senhaVar = inputSenha.value;

  if (emailVar == "" || senhaVar == "") {
    alert("Preencha todos os campos.");
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json.id_usuario);

          sessionStorage.setItem("idUser", json.id_usuario);
          sessionStorage.setItem("idEmpresa", json.fk_empresa);
          sessionStorage.setItem("user", json.nome_usuario);
          sessionStorage.setItem("email", json.email);
          sessionStorage.setItem("cargo", json.tipo_usuario);

          window.location = "./dashboard/dashboard.html";
        });
      } else {
        alert("Login ou senha inválidos.");
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}
