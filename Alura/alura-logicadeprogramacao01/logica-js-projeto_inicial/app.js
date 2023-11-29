alert('Boas Vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1

// Enquanto
while(chute!=numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute==numeroSecreto){
        alert(`Isso ai você acertou o numero secreto! ${numeroSecreto} com ${tentativas} tentativas`);
    }
    else{
        if(chute<numeroSecreto){
            alert(`O Número Secreto é maior que ${chute}`);
        }else{
            alert(`O Numero Secreto é menor que ${chute}`);
        }
        tentativas++
    }    
}





