var numeroPensado = 0;
var tentativas = 0;

function atualiza() {
    numeroPensado = Math.floor(Math.random () * 100);

    console.log(numeroPensado)
}

function verificaNumero(){
    
    var palpite = document.getElementById("palpite").value;

    if(palpite < 1 || palpite > 100){
        alert("Seu palpite foi inválido!");
        return;
    }

    if(palpite > numeroPensado){
        tentativas++;
        alert("🚨 O número que você pensou está acima do número pensado.");
    }

    else if (palpite < numeroPensado){
        tentativas++;
        alert("🚨 O número que você pensou está abaixo do número pensado"); 
    }
    else{
        alert ("✅ Parabéns, você acertou! Com " + tentativas + " erros." )
    }
}

atualiza();