
# JavaScript

  

## Exercício do JavaScript

  

### 1. Resolva as operações:

  

#### 10 + 15

- 25

  

#### "10" + 2

- "102" (concatena o valor)

  

#### "10" * 2

- 20

#### "10" / 3

- 3.33333333333

  

#### "10" % 3

- 1

  

#### 10 + true

- 11 (true em binário é 1 / false é igual a 0)

  

#### 10 == "10"

- verdadeiro ("==" compara apenas valor)

  

#### 10 === "10"

- falso ("===" compara valor e tipo)

  

#### 10 < 11

- verdadeiro

  

#### 10 > 12

- falso

  

#### 10 <= 10.1

- verdadeiro

  

#### 10 > 9.99

- verdadeiro

  

#### 10 != "dez"

- verdadeiro

  

#### 10 + true

- 11 (10 + 1)

  

#### "dez" + true

- "deztrue"

  

#### 10 + false

- 10 (10 + 0)

  

#### 10 * false

- 0 (10 * 0)

  

#### true + true

- 2 (1 + 1)

  

#### 10++

- Nessa conta ocorrerá um incremento ao valor. No caso 10++, rodando apenas 1x, o resultado será 11. Porém esse calculo deve fazer com uma variável, exemplo:

>`a = 10;`
>
>`a++;`
> 11
> 
>  `a++;`
> 12

  

#### 10--

- Nessa conta ocorrerá um decremento do valor. No caso 10--, rodando apenas 1x, o resultado será 9. Porém esse calculo deve fazer com uma variável, exemplo:

>`b = 10;`
>
>`b--;`
> 9
> 
>  `b--;`
> 8

  

#### 1 & 1

- 1

  

#### 1 & 0

- 0

  

#### 0 & 0

- 0

  

#### 1 & 0

- 0

  

#### 0 / 1

- 0

  

#### 5 + 5 == 10

- verdadeiro

  

#### "5" + "5" == 10

- falso (A operação "5" + "5" irá concatenar ficando '55')

  

#### "5" * 2 > 9

- verdadeiro

  

#### (10 + 10) * 2

- 40 (resolve primeiro o que está nos parênteses e depois multiplica)

  

#### 10 + 10 * 2

- 30 (multiplicação resolve primeiro)

  

### 2. Responda as perguntas de acordo com as variáveis.

- var branco = "preto";

- var preto = "cinza";

- var cinza = "branco";

- var carro = "preto";

- var valor = 30000;

- var prestacao = 750;

  

#### branco == "branco"

- falso (a variável branco equivale a "preto")

  

#### branco == cinza

- falso (a variável branco equivale a "preto" e a variável cinza equivale a "branco")

  

#### carro === branco

- verdadeiro (a variável carro tem o mesmo valor que a variável branco)

  

#### var cavalo = carro == "preto" ? "cinza" : "marrom";

- "cinza"

  

#### Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.

>`resultado = (valor - 3000) / prestacao;`
>  `resultado;`
> 36

  

#### Somando as variáveis de cores é formada uma string de quantos caracteres?

- Pelo que entendi do exercício é para pegar as variáveis que contenham o valor de cor:
>  `let cores = (branco + preto + cinza + carro);`
> 'pretocinzabrancopreto'
>
>  `cores.length;`
> 21

- Se for apenas as variáveis com nome de cor:
>  `let cor = (branco + preto + cinza);`
>  'pretocinzabranco'
>
> `cor.length;`
> 16