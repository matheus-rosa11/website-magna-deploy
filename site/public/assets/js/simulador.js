/** @format */

let btn = document.querySelector(".algo");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

function bt1() {
  let mensalPositivo = document.querySelector(".gasto-mensal-positivo");
  let mensalNegativo = document.querySelector(".gasto-mensal-negativo");

  let provaPositivo = document.querySelector(".gasto-prova-positivo");
  let provaNegativo = document.querySelector(".gasto-prova-negativo");

  var ax_alunos = Number(document.getElementById("alunos").value);
  var ax_so = document.getElementById("so").value;
  ax_so = ax_so.toLowerCase();
  if (
    ax_alunos == "" ||
    ax_so == "" ||
    ax_alunos == null ||
    ax_so == null 
  ) {
    alert("Insira numeros validos");
    //  resultSimulador.innerHTML = ""
  } else {
    

    
    if (ax_so == "linux") {

      if (ax_alunos < 1000) {
        let gastoMensal = 2801.33;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 2000 && ax_alunos >= 1000){
        let gastoMensal = 2900.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 3000 && ax_alunos >= 2000){
        let gastoMensal = 3200.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if( ax_alunos < 5000 && ax_alunos >= 3000){
        let gastoMensal = 4000.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 7000 && ax_alunos >= 5000){
        let gastoMensal = 5100.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 10000 && ax_alunos >= 7000){
        let gastoMensal = 6500.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 15000 && ax_alunos >= 10000){
        let gastoMensal = 8500.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 20000 && ax_alunos >= 15000){
        let gastoMensal = 11300.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 30000 && ax_alunos >= 20000){
        let gastoMensal = 15300.2331;
        let gastoMensalDesconto = gastoMensal * 0.8;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
        let gastoMensal = 20300.2331;
        let gastoMensalDesconto = gastoMensal * 0.82;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
        let gastoMensal = 26300.2331;
        let gastoMensalDesconto = gastoMensal * 0.83;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      }else{
        let gastoMensal = 35300.2331;
        let gastoMensalDesconto = gastoMensal * 0.83;
        let gastoProva = gastoMensal * 1.1;
        let gastoProvaDesconto = gastoProva * 0.90;
        mensalNegativo.innerHTML = gastoMensal.toFixed(2);
        mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
        provaNegativo.innerHTML = gastoProva.toFixed(2);
        provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
      }
  } else if (ax_so == "windowns") {

      
    if (ax_alunos < 1000) {
      let gastoMensal = 2801.33 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 2000 && ax_alunos >= 1000){
      let gastoMensal = 2900.2331 + 564; 
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 3000 && ax_alunos >= 2000){
      let gastoMensal = 3200.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if( ax_alunos < 5000 && ax_alunos >= 3000){
      let gastoMensal = 4000.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 7000 && ax_alunos >= 5000){
      let gastoMensal = 5100.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 10000 && ax_alunos >= 7000){
      let gastoMensal = 6500.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 15000 && ax_alunos >= 10000){
      let gastoMensal = 8500.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 20000 && ax_alunos >= 15000){
      let gastoMensal = 11300.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 30000 && ax_alunos >= 20000){
      let gastoMensal = 15300.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.8;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
      let gastoMensal = 20300.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.82;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
      let gastoMensal = 26300.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.83;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
    }else{
      let gastoMensal = 35300.2331 + 564;
      let gastoMensalDesconto = gastoMensal * 0.83;
      let gastoProva = gastoMensal * 1.1;
      let gastoProvaDesconto = gastoProva * 0.90;
      mensalNegativo.innerHTML = gastoMensal.toFixed(2);
      mensalPositivo.innerHTML = gastoMensalDesconto.toFixed(2);
      provaNegativo.innerHTML = gastoProva.toFixed(2);
      provaPositivo.innerHTML = gastoProvaDesconto.toFixed(2);
  } 
}
}
}
