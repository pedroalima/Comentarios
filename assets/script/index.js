// Imports
import { addComment, replyComment } from './functions.js';

"use strict";

// Eventos
document.addEventListener('click', (e) => {
    let eventTarget = e.target;
    let parentElement = eventTarget.parentNode;

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

    // Para avaliar comentários
    if (eventTarget.classList.contains("plus")) {
        parentElement.parentNode.children[1].innerHTML++;
    }

    if (eventTarget.classList.contains("minus")) {
        parentElement.parentNode.children[1].innerHTML--;
    }

    // Para editar respostas ou comentários
    // const createTextarea = document.createElement('textarea');
    // createTextarea.setAttribute("class", "comments-form-text");

    // if (eventTarget.classList.contains("comments-containers-reacts-edit-button")) {
    //     eventTarget.parentNode.children[2].style.display = "none";
    //     eventTarget.parentNode.children[3].style.display = "block";
    //     console.log(eventTarget.parentNode.parentNode.children[1].style.display = "none");
    //     createTextarea.innerHTML = eventTarget.parentNode.parentNode.children[1].textContent;
    //     eventTarget.parentNode.parentNode.appendChild(createTextarea);
        
    // }

    // if (eventTarget.classList.contains("comments-containers-reacts-update-button")) {
    //     eventTarget.parentNode.children[3].style.display = "none";
    //     eventTarget.parentNode.children[2].style.display = "block";
    //     // eventTarget.parentNode.parentNode.children[1].style.display = "block";
    // }
})

// Evento  
document.addEventListener('submit', (e) => {
    e.preventDefault();

    let eventTarget = e.target;
    let replyValue = eventTarget[0].value;
    let parentElement = eventTarget.parentNode; // Div class="comments-box"
    let userName = parentElement.children[0].children[0].children[1].innerHTML;

    // Para criar container de resposta
    if (eventTarget.classList.contains('comments-form-reply')) {

        if (parentElement.children[2]) {
            parentElement.children[2].appendChild(replyComment.createRecoilNestingDiv(userName, replyValue));
        } else {
            parentElement.appendChild(replyComment.createRecoilDiv(userName, replyValue));
        }
    };

    // Para criar container de comentários
    let commentValue = eventTarget.children[0].value;
    const commentTextarea = document.querySelector('.comments-form-text');
    const commentsSection = document.querySelector('.comments');
    
    // Para criar container de comentário
    if (eventTarget.classList.contains('comments-form')) {
        commentsSection.appendChild(addComment.createCommentTextarea(commentValue));
        commentTextarea.value = "";
    };

});