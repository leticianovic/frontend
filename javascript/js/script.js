function calcularMedia(notas) {
		
    var soma = 0;

    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

function aprovacao(notas) {
    
    let media = calcularMedia(notas);

    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

document.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();
   
    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {

        objeto[key] = dados.get(key);

        // adicionando itens no array
        notas.push(parseInt(dados.get(key)));

    }

    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;
});