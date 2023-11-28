alert('Boas Vindas ao jogo do número secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (numeroSecreto==chute){
    alert(`Isso ai você acertou o numero secreto! ${numeroSecreto}`);
}
else{
    alert(`Você errou o número secreto era: ${numeroSecreto}`)

}


