let caracEspecial = ["(", ")", "*", "&", "%", "$", "#", "@", "!", ";", "-", "_"];


function validarSenha() {

    let senha = inputSenha.value;


    if (senha.length == 0) {
        spanSenha.innerHTML = "";
    } else if (senha.length > 0 && senha.length <= 4) {
        spanSenha.innerHTML = "Senha fraca.";
    } else if (senha.length > 4 && senha.length <= 8) {
        spanSenha.innerHTML = "Senha média.";
    } else {
    
        let contemSpecial = false;
    
        for (let i = 0; i <= 9; i++) {
            if (senha.indexOf(i) > -1) {
    
                caracEspecial.forEach(special => {
                    if (senha.indexOf(special) != -1) {
                        spanSenha.innerHTML = "Senha muito forte.";
                        contemSpecial = true;
                    }
                });
    
                if (contemSpecial == false) {
                    spanSenha.innerHTML = "Senha forte."
                }
            } 
        }  
    }  
}

function validarUsuario() {
    let nomeUsuario = inputUsuario.value;
    let contemNum;
    let contemSpec;
    
    if (nomeUsuario.length > 1) {
        
        for (let i = 0; i <= 9; i++) {
            // console.log("Entrei no for numero");
            if (nomeUsuario.indexOf(i) != -1) {
                spanUsuario.innerHTML = "Não são permitidos números.";
                contemNum = true;
                break;
            } else {
                console.log("Posicao do numero: " + nomeUsuario.indexOf(i));
                console.log("Numero: " + i);
                contemNum = false;
            }
        }

        console.log("Contem Numero: " + contemNum);

        for (let i = 0; i <= caracEspecial.length; i++) {
            if (nomeUsuario.indexOf(caracEspecial[i]) != -1) {
                spanUsuario.innerHTML = "Não são permitidos caracteres especiais."
                contemSpec = true;
                break;
            } else {
                contemSpec = false;
            }
        }

        console.log("Contem Special: " + contemSpec);

        if (contemNum == false && contemSpec == false) {
            spanUsuario.innerHTML = "";
        }

    } else {
        spanUsuario.innerHTML = "Nome de usuário inválido";
    }


}

function validarEmail() {
    let email = inputEmail.value;



    
}
