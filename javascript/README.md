# JavaScript

## Iniciando com JS

### VARIAVEIS

- Usa-se o "//" para fazer comentários
- Tipagem: numero ou string
- Depois que se define uma variável não precisa colocar o "var", "const" ou "let" novamente, só prosseguir a partir do nome da variável.
-  Como boa pratica sempre terminar um código com ";"

#### var
$ `var a = 10;`

$ `a;`

#### const: fica com valor imutável
$ `const b = 15`

$ `b;`

#### let
$ `let c = 20;`

$ `c;`

// string: tipo de variavel para conjunto de caracteres
// Quando armazena uma variavel como tipo "string" e quiser somar as variaveis existentes ao inves de somar irá concatenar. Ex: 
	> a = 'texto qualquer';
	> a + b + c;
	  'texto qualquer1520'

array // recebe um conjunto de valores
	$ let d = [10, "texto", 5, 6, 10.5];
	  [ 10, 'texto', 5, 6, 10.5 ]

	$ d[0]; // retorna o resultado da posição que esta entre []. Ou seja o "zero" representa a primeira posição no caso acima retorna o valor "10". Caso coloque uma posição que não exista no array, da erro.
	  10

	$ d.length; //retorna quantos itens tem no array. o "d" se refere ao nome da variavel
	$ a.length;
	
console.clear(); // limpa o terminal

// OPERADORES

// Soma: +
// Subtração: -
// Multiplicação: *
// Divisão: /
// Módulo (resto de divisão): %
// Math: random() (Numero randomico), round() (Arredondar), sqrt() (Gerar raiz quadrada)

// Atribuição
	$ a = b;
	
	$ a += b; // Seria o mesmo que: a = a + b. Pode haver concatenação caso uma variavel seja tipo string
	$ a -= b;
	$ a *= b;
	$ a /= b;
	$ a %= b;
	
// Math: Operações matematicas. Lembrando que para fazer as operações com math, deve colocar a primeira letra em maiuscula seguido por ponto e depois a operação matematica desejada. Ex: Math.random(), Math.round(), Math.floor()
	// Para fazer uma operação matematica de round. Arredonda pra cima se for >= .5 e arredonda para baixo se for < .5
		$ Math.round(40/3);
		  13
		$ Math.round(40/5.5);
		  7
		$ Math.round(40+5.5);
		  46
// Operadores de comparação 
// Igual: "==" (valor) ou "===" (valor e tipo)
	$ a == b;
	  false
	$ a === b;
	  false
	$ a == a;
	  true
	  
// Diferente: != (valor) ou !== (valor e tipo)
	$ a != b;
	  true
	$ a !== a;
	  false
	  
// Adiciona 1: ++
	$ c = 100;
	
	$ c++;
	  101
// Subtrai 1: --
	$ c--;
	  100
	  
// Maior que: >
	$ a = 5;
	$ b = 15;
	$ c = 100;
	
	$ a > b;
	  false
	  
// Maior ou igual que: >=
	$ a >= b;
	  false
	  
// Menor que: <
	$ a < c;
	  true
	  
// Menor ou igual que: <=
	$ a <= b;
	  true
	  
// Mostrar tipo da variavel
	$ typeof a;
	  number
	$ typeof d;
	  string 
	  
// Operadores de logica e junção logica
// não (not): ! (exlclui o valor)
	$ a == !5;
	  true
	
// E (and): && (Precisa que todas as condições sejam verdadeiras)
	$ a == c && b == a;
	  false
	  
// Ou (or): || (Precisa que apenas uma das condições sejam verdadeiras)
	$ a == c || b == a;
	  false
	
// Se (Caso simples de trabalhar apenas com uma variavel, economiza IFs)
	$ let cor = "cinza";
	$ let meuCarro = cor == "preto" ? "preto" : "branco";
	
	$ cor = "cinza";
	$ meuCarro = cor == "preto" ? "preto" : "branco";
	
// If (modo mais completo)
	// Caso a variavel cor seja igual a preto entao retorna preto. No caso retornou "preto"
	$ if (cor == "preto") meuCarro = "preto"
	  
	// Caso a variavel cor seja diferente de preto entao retorna cinza. No caso retornou "preto", pois a cor não é diferente de preto.
	$ if (cor != "preto") meuCarro = "cinza"
	
	// Exemplo de usar {} é para mais de uma variavel
	if (cor == "cinza") {
		meuCarro = "branco";
		console.log(meuCarro);
	}
	
// else
	if (cor == "preto") {
		meuCarro = "preto";
	} else {
		meuCarro = "cinza";
	}
	
// else if
	if (cor == "preto") {
		meuCarro = "preto";
	} else if (cor == "vermelho") {
		meuCarro = "cinza";
	} else if (cor == "azul") {
		meuCarro = "branco";
	} else if (cor == "branco") {
		meuCarro = "verde";
	}
	
// if, else if e else
	if (cor == "preto") {
		meuCarro = "preto";
	} else if (cor == "vermelho") {
		meuCarro = "cinza";
	} else if (cor == "azul") {
		meuCarro = "branco";
	} else if (cor == "branco") {
		meuCarro = "verde";
	} else {
		meuCarro = "amarelo";
	}
	
// Converter para tudo minusculo: [nome da variavel].toLowerCase()
	$ cor = "VERMELHO";
	
	$ cor == "vermelho";
	  false
	$ cor.toLowerCase() == "vermelho"
	  true
	  
// switch (quando encontra a condição verdadeira ele continua a execução. Para que não faça isso deve executar o break)
	$ switch (cor) {
		case 'branco' : 
			meuCarro = 'branco';
			break;
		case 'vermelho' :
			meuCarro = 'vermelho';
			break;
		case 'amarelo' :
			meuCarro = 'amarelo';
			break;
		default :
			console.log('não temos a cor desejada');
	}
	
// media
	$ var nota1 = 10;
	$ var nota2 = 8;
	$ var nota3 = 9;
	$ var nota4 = 7.5;
	
	$ var media = (nota1 + nota2 + nota3 + nota4) / 4;
	
	$ if (media > 8) {
		console.log("Aluno aprovado");
	} else if (media >= 5 && media < 8) {
		console.log("Aluno em recuperação");
	} else {
		console.log("Aluno reprovado");
	}
	
// loops - laços de repetição

// for ([expressaoInicial]; [condicao]; [incremento]) (Ate chegar na condição estabelecida executa o codigo)
	// fazer a revisao do carro aos 10km
	$ var km;
	$ var revisao = 10;
	
	$ for(km = 0; km < revisao; km++){
		console.log("apenas " + km + "kms então pode rodar");		
	}
	
// while (Enquanto a condição for verdadeira executa o codigo)
	$ var contador = 0;
	$ while (c < 10){
		contador++
	}
	
	$ var hora = 23;
	$ while (hora > 0){
		
		console.log(hora);
		hora--;
	}
	$ console.log("Total de horas: " + hora);
	
// do
	$ var resultado = '';
	$ var i = 0;
	$ do {
		i += 1;
		resultado += i + ' ';
	} while (i < 5);
	
	$ console.log(resultado);

// Cálculo de média de alunos
	var alunos = [
		[6, 7, 8, 6],
		[8, 5, 6, 8],
		[10, 6, 8, 7],
		[8, 8, 8, 8],
		[6, 6, 6, 6, 6]
	];
	
	var  nota = 0;
	
	for (var i = 0; i < alunos.length; i++){
		
		nota = 0;
		notasAluno = alunos[i];
		
		console.log("Aluno: " + parseInt(i+1));
		console.log("Notas: " + notasAluno);
		
		for(c = 0; c < notasAluno.length; c++){
			nota += notasAluno[c];
		}
		
		media = nota / 4;
		
		if(media >= 7){
			resultado = "aprovado";
		} else {
			resultado = "reprovado";
		}
		
		console.log("Media: " + media + " - " + resultado);
	}
	
// Funções
// Evitar a repetição de codigo e realizar chamadas dinamicas de algoritmos
	// Decobrir media do aluno
	function calcularMedia(notas) {
		
		var soma = 0;
		
		for( c = 0; c < notas.length; c++) {
			soma += notas[c];
		}
		
		media = soma / notas.length;
		
		return media;
	}
  
	console.log("Média: " + calcularMedia([8, 8]));
	
	// Descobrir se o aluno foi aprovado, a partir de outra função
	function aprovacao(media) {
		
		let condicao = media >= 7 ? "aprovado" : "reprovado";
		
		return condicao;
	}
	
	console.log(aprovacao(calcularMedia([8, 8])));
	
		// ou
		function aprovacao(notas) {
			
			let media = calcularMedia(notas);
		
			let condicao = media >= 7 ? "aprovado" : "reprovado";
		
			return 'Média: ' + media + ' - Resultado: ' + condicao;
		}
	
		console.log(aprovacao([8, 8, 9, 4]));
		
// Funções recursivas
	function contagemRegressiva(numero){

            console.log(numero);

            let proximoNumero = numero - 1;

            if(proximoNumero > 0 )
                contagemRegressiva(proximoNumero);
        }

### DOM (Document Object Model)
- Significa Modelo de Documento do Objeto; trata-se da modelagem de todo o HTML.


#### Estrutura
- O DOM é como uma árvore genealógica, porém, de forma invertida. O elemento que antecede o document é o window (janela do navegador). Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs).
- A tag html, objeto pai, apresenta dois objetos filhos: o head e o body (o cabeçalho e o corpo). Os objetos que seguem nas ramificações de baixo são denominados como child, e os de cima, parent. A tag head é parent da tag title, e a body é parent das tags a e h1, e assim sucessivamente, de acordo com a hierarquia. Das tags, derivam os atributos, e destes, seus valores.


#### Onde o DOM está inserido
- O DOM é gerado pelo browser. Ao carregar a página, o navegador cria o documento, a interface, e o Javascript usa o DOM para se conectar ao HTML.
- Para realizar a comunicação entre eles é necessário inserir a tag script no arquivo HTML, e como boa prática, ela deve estar antes do fechamento da tag body para que os scripts sejam carregados após o código base.
- É possível realizar de duas formas: escrevendo o código em JavaScript dentro da própria tag script, ou inserindo o caminho relativo do arquivo externo. Também como boa prática, a segunda opção é a mais recomendada para a separação de responsabilidades e melhor manutenção do código.

#### Como manipular
- No DevTools do navegador, na aba Console, ao digitar console.dir (diretório) e passar o parâmetro document, é exibida uma lista com propriedades e funcionalidades do documento.
- São várias as formas de navegação dentro do DOM, no JavaScript utilizamos o objeto document e através do ponto acessamos as propriedades e métodos, possibilitando selecionar, alterar, deletar, e criar elementos aos componentes do website.
##### Exemplos
-  Seleciona o objeto e disponibiliza (metodos/funções).callback
	- Faz uma seleção a partir do id
	> document.getElementById(id)

	- Faz uma seleção a partir do nome da tag, exemplo pegar um elemento div
	> document.getElementsByTagName('div')

	- Pode criar um elemento, exemplo criar uma div
	> document.createElement('div')

	- Irá inserir um novo elemento a partir do parent node, que é elemento pai
	> parentNode.appendChild('body') // Cria um novo elemento de body 

	- Define ou retorna o conteúdo HTML de um elemento. O innerHTML pode ser usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele.
	> element.innerHTML

	- Alterar o estilo
	> element.style

	- Setar atributos à uma tag html
	> element.setAttribute('name')
	
	- Buscar atributos
	> element.getAttribute('name')
	
	- Permite configurar funções a serem chamadas quando um evento especificado acontece, como quando um usuário clica em um botão. Sintaxe: target.addEventListener(event, function, useCapture)
	> element.addEventListener()
	
	- Saber a url de uma pagina
	> window.location // Exemplo: recarregar a pagina: window.location.reload()
	
	- O onload é um atributo que usamos quando queremos disparar um evento quando qualquer elemento tenha sido carregado.
	> window.onload
	
	- Exivbir funções no console
	> console.log()
	
	- Rola para um determinado conjunto de coordenadas no documento.
	> window.scrollTo() // Exemplo: window.scrollTo(0,500)

#### Referencias
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript || https://developer.mozilla.org/pt-BR/docs/Web/JavaScriptJavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderização
