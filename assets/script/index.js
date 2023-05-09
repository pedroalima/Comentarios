// Imports
import { addComment, replyComment } from './functions.js';

"use strict";

// Eventos
document.addEventListener('click', (e) => {
    let eventTarget = e.target;
    let parentElement = eventTarget.parentNode;
    const modal = document.getElementById("deleteModal");

    // Para mostrar e esconder o conteiner de resposta
    if (eventTarget.id === "reply1") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    } else if (eventTarget.id === "send1") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    } else if (eventTarget.id === "reply2") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    } else if (eventTarget.id === "send2") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    } else if (eventTarget.id === "reply3") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    } else if (eventTarget.id === "send3") {
        let form = eventTarget.parentNode.parentNode.parentNode.children[1].id;
        replyComment.containerStateToggle(form);
    }

    // Para deletar respostas ou comentários
    if (eventTarget.id === "deleteButton") {
        parentElement.parentNode.remove();
    }
})

// * Evento para criar container de resposta e comentario* //
document.addEventListener('submit', (e) => {
    e.preventDefault();

    let eventTarget = e.target;
    let replyValue = eventTarget[0].value;
    let parentElement = eventTarget.parentNode; // Div class="comments-box"
    let userName = parentElement.children[0].children[0].children[1].innerHTML;

    if (eventTarget.classList.contains('comments-form-reply')) {

        if (parentElement.children[2]) {
            parentElement.children[2].appendChild(replyComment.createRecoilNestingDiv(userName, replyValue));
        } else {
            parentElement.appendChild(replyComment.createRecoilDiv(userName, replyValue));
        }
    };

    let commentValue = eventTarget.children[0].value;
    const commentTextarea = document.querySelector('.comments-form-text');
    const commentsSection = document.querySelector('.comments');

    if (eventTarget.classList.contains('comments-form')) {
        commentsSection.appendChild(addComment.createCommentTextarea(commentValue));
        commentTextarea.value = "";
    };

});