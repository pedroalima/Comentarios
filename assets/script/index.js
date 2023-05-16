const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const data = {
    "currentUser": {
        "image": { 
            "png": "/assets/image/image-juliusomo.png",
            "webp": "/assets/image/image-juliusomo.webp"
        },
        "username": "juliusomo"
    },
    "comments": [
        {
            "id": 1,
            "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            "createdAt": "1 month ago",
            "score": 12,
            "user": {
                "image": { 
                    "png": "/assets/image/image-amyrobson.png",
                    "webp": "/assets/image/image-amyrobson.webp"
                },
                "username": "amyrobson"
            },
            "replies": []
        },
        {
            "id": 2,
            "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            "createdAt": "2 weeks ago",
            "score": 5,
            "user": {
                "image": { 
                    "png": "/assets/image/image-maxblagun.png",
                    "webp": "/assets/image/image-maxblagun.webp"
                },
                "username": "maxblagun"
            },
            "replies": [
                {
                    "id": 3,
                    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    "createdAt": "1 week ago",
                    "score": 4,
                    "replyingTo": "maxblagun",
                    "user": {
                        "image": { 
                            "png": "/assets/image/image-ramsesmiron.png",
                            "webp": "/assets/image/image-ramsesmiron.webp"
                        },
                        "username": "ramsesmiron"
                    }
                },
                {
                    "id": 4,
                    "author": true,
                    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    "createdAt": "2 days ago",
                    "score": 2,
                    "replyingTo": "ramsesmiron",
                    "user": {
                        "image": { 
                            "png": "/assets/image/image-juliusomo.png",
                            "webp": "/assets/image/image-juliusomo.webp"
                        },
                        "username": "juliusomo"
                    }
                }
            ]
        }
    ]
}

const compiledHtml = template(data);
document.getElementById('information').innerHTML = compiledHtml;

"use strict";

// Variáveis
const replyButton = document.querySelectorAll(".comments-containers-reacts-reply-button");
const replyFormButton = document.querySelectorAll(".comments-form-reply-button-send");
const commentsSection = document.querySelector('.comments');
const commentsItems = JSON.parse(localStorage.getItem("commentsItems")) || [];
const replyItems = JSON.parse(localStorage.getItem("replyItems")) || [];

commentsItems.forEach( element => {
    commentsSection.insertBefore(createCommentTextarea(element), commentsSection.children[2]);
});

// Funções

 // Função para mostrar e esconder o conteiner de resposta
const containerStateToggle = (form) => {
    const replyContainer = document.getElementById(form);
    replyContainer.classList.toggle('comments-form-hide');
}

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

// * Método para criar resposta
function createRecoilDiv(item) {
    const recoilDiv = document.createElement('div');
    recoilDiv.setAttribute('class', 'comments-recoil');
    recoilDiv.innerHTML = `
        <div class="comments-containers comments-recoil-nesting">
            <div class="comments-containers-user">
                <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
                <h2 class="comments-containers-user-name">juliusomo</h2>
                <span class="comments-containers-user-post-date">2 days ago</span>
            </div>
            <div class="comments-containers-text">
                <p class="comments-containers-text-content"><strong>@${item.userName}</strong> ${item.replyValue}</p>
            </div>
            <div class="comments-containers-reacts comments-containers-reacts-user">
                <div class="comments-containers-reacts-rating">
                    <button class="comments-containers-reacts-rating-button"><i class="plus"></i></button>
                    <span class="comments-containers-reacts-rating-score">2</span>
                    <button class="comments-containers-reacts-rating-button"><i class="minus"></i></button>
                </div>
                <button class="comments-containers-reacts-delete-button" id="deleteButton"><i class="delete"></i> Delete</button>
                <button class="comments-containers-reacts-edit-button"><i class="edit"></i> Edit</button>
                <button class="comments-containers-reacts-update-button">Update</button>
            </div>
        </div>
    `;

    return recoilDiv;
}

// * Método para criar resposta
function createRecoilNestingDiv(item) {
    const recoilNestingDiv = document.createElement('div');
    recoilNestingDiv.classList.add('comments-containers', 'comments-recoil-nesting');
    recoilNestingDiv.innerHTML = `
        <div class="comments-containers-user">
            <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
            <h2 class="comments-containers-user-name">juliusomo</h2>
            <span class="comments-containers-user-post-date">2 days ago</span>
        </div>
        <div class="comments-containers-text">
            <p class="comments-containers-text-content"><strong>@${item.userName}</strong> ${item.replyValue}</p>
        </div>
        <div class="comments-containers-reacts comments-containers-reacts-user">
            <div class="comments-containers-reacts-rating">
                <button class="comments-containers-reacts-rating-button"><i class="plus"></i></button>
                <span class="comments-containers-reacts-rating-score">2</span>
                <button class="comments-containers-reacts-rating-button"><i class="minus"></i></button>
            </div>
            <button class="comments-containers-reacts-delete-button" id="deleteButton"><i class="delete"></i> Delete</button>
            <button class="comments-containers-reacts-edit-button"><i class="edit"></i> Edit</button>
            <button class="comments-containers-reacts-update-button">Update</button>
        </div>
    `;

    return recoilNestingDiv;
}

// Método para criar comentário
function createCommentTextarea(item) {
    const commentsBox = document.createElement('div');
    commentsBox.classList.add('comments-box');
    commentsBox.innerHTML = `
        <div class="comments-containers">
            <div class="comments-containers-user">
                <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
                <h2 class="comments-containers-user-name">juliusomo</h2>
                <span class="comments-containers-user-post-date">Now</span>
            </div>
            <div class="comments-containers-text">
                <p class="comments-containers-text-content">${item.commentValue}</p>
            </div>
            <div class="comments-containers-reacts comments-containers-reacts-user">
                <div class="comments-containers-reacts-rating">
                    <button class="comments-containers-reacts-rating-button"><i class="plus"></i></button>
                    <span class="comments-containers-reacts-rating-score">0</span>
                    <button class="comments-containers-reacts-rating-button"><i class="minus"></i></button>
                </div>
                <button class="comments-containers-reacts-delete-button" id="deleteButton"><i class="delete"></i> Delete</button>
                <button class="comments-containers-reacts-edit-button"><i class="edit"></i> Edit</button>
                <button class="comments-containers-reacts-update-button">Update</button>
            </div>
        </div>
    `;
    return commentsBox;
}

function deleteElement(tag, id) {
    tag.remove()

    console.log(id)
}

// Eventos
document.addEventListener('click', (e) => {
    let eventTarget = e.target;
    let parentElement = eventTarget.parentNode;

    // Para deletar respostas ou comentários
    if (eventTarget.id === "deleteButton") {
        deleteElement(parentElement.parentNode, e.target.id);

        // localStorage.setItem("commentsItems", JSON.stringify(commentsItems));
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

        const currentItem = {
            "replyValue": replyValue,
            "userName": userName
        }

        if (parentElement.children[2]) {
            parentElement.children[2].appendChild(createRecoilNestingDiv(currentItem));
        } else {
            parentElement.appendChild(createRecoilDiv(currentItem));
        }

        replyItems.push(currentItem);
    
        localStorage.setItem("replyItems", JSON.stringify(replyItems));

        textForm.value = "";
    };

    // Para criar container de comentários
    let commentValue = eventTarget.children[0].value;
    const commentTextarea = document.querySelector('.comments-form-text');
    
    if (eventTarget.classList.contains('comments-form')) {
        const currentItem = {
            "commentValue": commentValue,
        }

        commentsSection.insertBefore(createCommentTextarea(currentItem), commentsSection.children[2]);

        commentsItems.push(currentItem);
    
        localStorage.setItem("commentsItems", JSON.stringify(commentsItems));

        commentTextarea.value = "";
    };
});