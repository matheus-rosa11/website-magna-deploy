/** @format */
let cadastro = document.querySelector(".cadastro-usuario");
let arrayLinhas = Array.from(document.querySelectorAll(".linhaArray"));
let servidores = document.querySelector(".cadastro-servidor");
console.log(arrayLinhas);

if (sessionStorage.getItem("cargo") == "suporte") {
  cadastro.classList.add("invisivel");
  cadastro.classList.add("invisivel");
  arrayLinhas[0].classList.add("invisivel");
  arrayLinhas[2].classList.add("invisivel");
  servidores.classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "tecnico") {
  arrayLinhas[1].classList.add("invisivel");
  arrayLinhas[2].classList.add("invisivel");
  servidores.classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "gerente") {
  arrayLinhas[1].classList.add("invisivel");
  arrayLinhas[0].classList.add("invisivel");
}
