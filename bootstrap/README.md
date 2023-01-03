# BOOTSTRAP

## Introdução

### Bootstrap
- Framework ou biblioteca desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile-first
- Amplamente utilizada
- Cross browser

### Bootstrap x Framework
- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas
- Biblioteca: recurso para trabalhar
- Framework: metodologia de trabalho
- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

### Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negócio
- Ciclos evolutivos
- Não se repita (Não repetir código)
- Separar grandes projetos em pequenas entregas
- MVP - Mínimo Produto Viável
- Estar envolvido x comprometido

### Vantagens
- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

### Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
 <a class="btn btn-lg">Botão</a>
```

### Sem Bootstrap
```
 <a class="botao botao-grande">Botão</a>

 <style>
 html {
     font-size: 62.5% 
 }

 .botao {
    background-color: #ccc; 
    border-radius: 2px; 
    display: block;
    font-family: sans-serif;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin: 5px auto;
    ...
 }

 .botao.grande {
    font-size: 2rem;
 }

 .botao:hover { ... }
 .botao:active { ... }
 .botao:visited { ... }
 
 </style>
 ```

 ## Visão Geral | Instalar bootstrap no projeto e aplicar conceitos no grid layout
 - Inserir o codigo no arquivo html, na área do "head": 
 ```
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
 ```
 - Inserir o codigo no arquivo html, na área do "body":
 ```
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 ```
 ### Rodando o pacote no seu local
 - Verificar a versão do seu bootstrap. No meu caso a versão é a 5.3
 1. Para melhorar a performance do seu projeto, o recomendado é baixar o pacote do bootstrap e rode local: https://getbootstrap.com/docs/5.3/getting-started/download/ (É baixado um arquivo zipado: "bootstrap-5.3.0-alpha1-dist")
 2. Para inserir o codigo do pacote, basta inserir a pasta da qual foi extraida (quando fez o download) no projeto a qual você esta trabalhando (quando você extrai a pasta, irá vir com o nome: "bootstrap-5.3.0-alpha1-dist", você pode renomear para facilitar sua vida. Eu renomeei para "bootstrap");
 3. No meu caso inseri no caminho: frontend > bootstrap > projeto > **bootstrap**;
 4. Inserir o codigo css no arquivo html, na área do "head": 
 ```
 <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">
 ```
 5. Inserir o codigo js no arquivo html, na área do "body":
 ```
 <script src="./bootstrap/js/bootstrap.bundle.min.js"></script>
 ```
## Layout | Criar layouts responsivos com bootstrap
 - "container-fluid": Para adaptar a largura da tela
 - "btn btn-lg": Criar botão grande 
 - "btn-success": montar o botão de sucesso. É criado um botão verde

## Elementos | Como utilizar elementos DO em páginas web
 - Unidade: Largura da área dividido por 12
 - ".row>.col*3": criar uma linha com 3 colunas
 - "(li.nav-item>a)*4": Criando uma lista com 4 itens e links
 - "img-fluid": Torna a imagem responsiva, de acordo com a largura da tela
 - ".container>.row>.col": Criar uma div de nome conatainer com uma linha e uma coluna
 - "button:submit.btn.btn-lg.btn-success": Criar um botao com as caracteristica de botao grande e na cor verde