const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: ")); 

function comparaNumeros () {
    const primeiraFrase = criaPrimeiraFrase ()
    const segundaFrase = criaSegundaFrase ()

    alert (`${primeiraFrase}${segundaFrase}`);

}

function criaPrimeiraFrase () {
    let saoIguais = '';

    if (n1 != n2) {
        saoIguais = 'não';
    }

    return(`Os números ${n1} e ${n2} ${saoIguais} são iguais. `); 
}

function criaSegundaFrase () {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return(`Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`);

}

comparaNumeros();   
