function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; // Fazendo com que ao clicar no numero matenha ele na tela mesmo clicando em outro
}

function clean() {
    document.getElementById('resultado').innerHTML = ''
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) // Diminuir um substring()
}

function calcular()  {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado ) {
        document.getElementById('resultado').innerHTML = eval(resultado) // Ja vai computador todas as operaçoe
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
}