/** @format */

let cargo = document.querySelector("#sltCargo");
let servidores = document.querySelector(".cadastro-servidor");

if (sessionStorage.getItem("cargo") == "gerente") {
  cargo[0].classList.add("invisivel");
  // cargo[1].classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "tecnico") {
  cargo[0].classList.add("invisivel");
  cargo[1].classList.add("invisivel");
  cargo[2].classList.add("invisivel");
  servidores.classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "suporte") {
  cargo[0].classList.add("invisivel");
}
