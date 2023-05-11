// Imports
import { addComment, replyComment } from './functions.js';

"use strict";

// Variáveis
const { containerStateToggle } = replyComment;
const replyButton = document.querySelectorAll(".comments-containers-reacts-reply-button");
const replyFormButton = document.querySelectorAll(".comments-form-reply-button-send");

// Funções

// Define botão para mostrar formulário de resposta
replyButton.forEach(button => {
    button.addEventListener('click', (e) => {
        let eventTarget = e.target;
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;

        containerStateToggle(form);
    })
});

// Define botão para esconder formulário de resposta
replyFormButton.forEach(button => {
    button.addEventListener('click', (e) => {
        let eventTarget = e.target;
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;

        containerStateToggle(form);
    })
});

// Eventos
document.addEventListener('click', (e) => {
    let eventTarget = e.target;
    let parentElement = eventTarget.parentNode;

    // Para deletar respostas ou comentários
    if (eventTarget.id === "deleteButton") {
        parentElement.parentNode.remove();
    }

    // Para avaliar comentários
    if (eventTarget.classList.contains("plus")) {   
        parentElement.parentNode.children[1].innerHTML++;
    }

    if (eventTarget.classList.contains("minus")) {
        parentElement.parentNode.children[1].innerHTML--;
    }

    // Variáveis do botão editar
    const createTextarea = document.createElement("textarea");
    createTextarea.setAttribute("class", "comments-form-text");
    createTextarea.setAttribute("rows", "4");
    
    // Condição ao clicar no botão de editar
    if (eventTarget.classList.contains("comments-containers-reacts-edit-button")) {
        let editButton = eventTarget.parentNode.children[2];
        let updateButton = eventTarget.parentNode.children[3];
        let replyContainer = eventTarget.parentNode.parentNode;

        // Função de esconder botão editar e mostrar botão atualizar
        editButton.style.display = "none";
        updateButton.style.display = "block";

        // Função para inserir área de texto
        replyContainer.insertBefore(createTextarea, replyContainer.children[1]);
        createTextarea.innerHTML = replyContainer.children[2].textContent.trim();
        replyContainer.children[2].remove();
    }

    // Variáveis do botão atualizar
    const createTextDiv = document.createElement("div");
    createTextDiv.setAttribute("class", "comments-containers-text");
    const createP = document.createElement("p");
    createP.setAttribute("class", "comments-containers-text-content");
    createTextDiv.appendChild(createP);

    // Condição ao clicar no botão de atualizar
    if (eventTarget.classList.contains("comments-containers-reacts-update-button")) {
        let editButton = eventTarget.parentNode.children[2];
        let updateButton = eventTarget.parentNode.children[3];
        let replyContainer = eventTarget.parentNode.parentNode;

        // Função de esconder botão atualizar e mostrar botão editar
        updateButton.style.display = "none";
        editButton.style.display = "block";

        // Função para inserir parágrafo
        replyContainer.insertBefore(createTextDiv, replyContainer.children[1]);
        createP.innerHTML = replyContainer.children[2].value;
        replyContainer.children[2].remove();
    }
})

// Evento  
document.addEventListener('submit', (e) => {
    e.preventDefault();

    let eventTarget = e.target;
    let parentElement = eventTarget.parentNode;

    // Para criar container de resposta
    let replyValue = eventTarget[0].value;
    let userName = parentElement.children[0].children[0].children[1].innerHTML;

    if (eventTarget.classList.contains('comments-form-reply')) {
        let textForm = parentElement.children[1].children[0];

        if (parentElement.children[2]) {
            parentElement.children[2].appendChild(replyComment.createRecoilNestingDiv(userName, replyValue));
            textForm.value = "";
        } else {
            parentElement.appendChild(replyComment.createRecoilDiv(userName, replyValue));
            textForm.value = "";
        }
    };

    // Para criar container de comentários
    let commentValue = eventTarget.children[0].value;
    const commentTextarea = document.querySelector('.comments-form-text');
    const commentsSection = document.querySelector('.comments');
    
    if (eventTarget.classList.contains('comments-form')) {
        commentsSection.insertBefore(addComment.createCommentTextarea(commentValue), commentsSection.children[2]);
        commentTextarea.value = "";
    };
});