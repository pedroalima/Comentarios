# COMMENT SECTION

Projeto para criação de uma seção de comentários interativa, com o objetivo de consolidar meus conhecimentos em JavaScript, SASS e HTML.

## Índice

- [Visão geral](#visao-geral)
  - [O Desafio](#o-desafio)
  - [Screenshot](#screenshot)
- [Resultado](#resultado)
- [Minha caminhada](#minha-caminhada)
  - [Propriedades](#propriedades)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos](#recursos)
- [Autor](#autor)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Visualizar os estados de foco para todos os elementos interativos na página
- Responder, editar, criar, excluir e avaliar comentários

### Screenshots

<html>
  <h4>Layout mobile</h4>
  <img src="./assets/image/mobile.png" width="300px">

  <h4>Layout desktop </h4>
  <img src="./assets/image/desktop.png" width="920px">

</html>

## Resultado: [Veja como ficou!](https://comentarios-tawny.vercel.app/)

## Minha caminhada

1º dia

- [x] Planejamento
- [x] Preparativos

2º dia

- [x] Mobile layout

3º dia

- [x] Desktop layout

4º dia

- [x] Desktop layout
- [x] Estados de foco

5º dia

- [x] Feature de resposta

6º dia

- [x] Feature de criar comentário

7º dia

- [x] Feature de avaliação

8º dia

- [x] Correção de bugs

9º dia

- [x] Feature de edição

10º dia

- [x] Feature de armazenamento local

11º dia

- [x] Reconstrução da página com Handlebars

12º dia

- [x] Correção de bugs

13º dia

- [x] Feature de remoção de elementos do armazenamento local

14º dia

- [x] Feature de remoção de comentário do armazenamento local

### Propriedades

- Mobile-first
- Semântica HTML
- SASS
- Manipulação do DOM
- Local Storage
- Handlebars

### Meu aprendizado

No decorrer da primeira semana, além de reforçar os conceitos base de JavaScript, implementei módulos com a sintaxe ES6, objetos com abreviação do valor da propriedade e atribuição desestruturada, e como em qualquer conceito, é uma boa habilidade aprender a usar a documentação.

JS

```js
...
// Imports index.js
import { addComment, replyComment } from './functions.js';

// Export module/functions.js
export const addComment = {...
export const replyComment = {...
...
```

O exemplo acima demonstra a modulação. Ao isolar o código em arquivos separados, podemos encontrar, corrigir e depurar o código com mais facilidade, reutilizar e reciclar a lógica definida em diferentes partes da aplicação, e muitas outras vantagens.

A segunda semana foi dedicada a explorar a biblioteca externa Handlebars, que auxilia na construção da estrutura HTML, utilizando expressões que possibilitam aplicar condicionais ou até iterar sobre arrays, com o objetivo de reduzir código criando modelos de template. Abaixo vemos a forma de aplicação da ferramenta.

JS

```js
...
// Build page structure with Handlebars
const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const data = {...
}
const compiledHtml = template(data);
document.getElementById('information').innerHTML = compiledHtml;
...
```

Outro aspecto abordado na segunda semana é a propriedade local storage, que permite o armazenamento de dados, mesmo após o usuário fechar ou recarregar a página. Utilizado para a permanência dos comentários inseridos pelo usuário.

JS

```js
...
// Local storage
const commentsItems = JSON.parse(localStorage.getItem("commentsItems")) || [];
// Creating comments stored in local storage
commentsItems.forEach( element => {
    commentsSection.insertBefore(createCommentTextarea(element), commentsSection.children[2]);
});
...
const currentItem = {
  "commentValue": commentValue,
}
commentsSection.insertBefore(createCommentTextarea(currentItem), commentsSection.children[2]);
commentsItems.push(currentItem);
localStorage.setItem("commentsItems", JSON.stringify(commentsItems));
...
```

### Recursos

- [HANDLEBARS - Introdução](https://handlebarsjs.com/guide/#what-is-handlebars) - Conheça uma biblioteca externa muito útil para reduzir retrabalhos.

- [JAVASCRIPT - Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Aprenda os diversos métodos da propriedade.

- [SASS - Documentação](https://sass-lang.com/documentation/) - Nesse site você saberá tudo sobre o mundo SASS.

- [O desafio da Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9) - Neste link você encontrará o desafio solucionado aqui.

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
