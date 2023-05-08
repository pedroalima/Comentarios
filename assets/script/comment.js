import { data } from './data.js';

export const replyComment = () => {

    document.addEventListener('click', (e) => {
        let eventTarget = e.target;
            
        if (eventTarget.id === "reply1") {
            const replyContainer1 = document.querySelector('#form1');
            replyContainer1.classList.toggle('comments-form-hide');
        }

        if (eventTarget.id === "send1") {
            const replyContainer1 = document.querySelector('#form1');
            replyContainer1.classList.toggle('comments-form-hide');
        }

        if (eventTarget.id === "reply2") {
            const replyContainer2 = document.querySelector('#form2');
            replyContainer2.classList.toggle('comments-form-hide');
        }

        if (eventTarget.id === "send2") {
            const replyContainer2 = document.querySelector('#form2');
            replyContainer2.classList.toggle('comments-form-hide');
        }

        if (eventTarget.id === "reply3") {
            const replyContainer3 = document.querySelector('#form3');
            replyContainer3.classList.toggle('comments-form-hide');
        }

        if (eventTarget.id === "send3") {
            const replyContainer3 = document.querySelector('#form3');
            replyContainer3.classList.toggle('comments-form-hide');
        }
    });

    document.addEventListener('submit', (e) => {
        e.preventDefault();

        let eventTarget = e.target;
        let replyValue = eventTarget[0].value;
        let parentElement = eventTarget.parentNode // Div class="comments-box"
        let userName = parentElement.children[0].children[0].children[1].innerHTML;

        const createDivRecoil = document.createElement('div');
        createDivRecoil.setAttribute('class', 'comments-recoil');
        createDivRecoil.innerHTML = `
            <div class="comments-containers comments-recoil-nesting">
                <div class="comments-containers-user">
                    <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
                    <h2 class="comments-containers-user-name">juliusomo</h2>
                    <span class="comments-containers-user-post-date">2 days ago</span>
                </div>
                <div class="comments-containers-text">
                    <p class="comments-containers-text-content"><strong>@${userName}</strong> ${replyValue}</p>
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

        const createDivRecoilNesting = document.createElement('div');
        createDivRecoilNesting.classList.add('comments-containers', 'comments-recoil-nesting');
        createDivRecoilNesting.innerHTML = `
            <div class="comments-containers-user">
                <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
                <h2 class="comments-containers-user-name">juliusomo</h2>
                <span class="comments-containers-user-post-date">2 days ago</span>
            </div>
            <div class="comments-containers-text">
                <p class="comments-containers-text-content"><strong>@${userName}</strong> ${replyValue}</p>
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

        if (eventTarget.classList.contains('comments-form-reply')) {

            if (parentElement.children[2]) {
                parentElement.children[2].appendChild(createDivRecoilNesting);
            } else {
                parentElement.appendChild(createDivRecoil);
            };
        };
    });
};

export const addComment = () => {

    document.addEventListener('submit', (e) => {
        let eventTarget = e.target;
        let commentsForm = eventTarget;
        let commentValue = eventTarget.children[0].value

        const commentTextarea = document.querySelector('.comments-form-text');
        const commentsSection = document.querySelector('.comments');
        const commentsBox = document.createElement('div');
        commentsBox.classList.add('comments-box');
        commentsBox.innerHTML = `
        <div class="comments-containers">
            <div class="comments-containers-user">
                <img class="comments-containers-user-image" src="/assets/image/image-juliusomo.png" alt="Profile image">
                <h2 class="comments-containers-user-name">juliusomo</h2>
                <span class="comments-containers-user-post-date">2 days ago</span>
            </div>
            <div class="comments-containers-text">
                <p class="comments-containers-text-content">${commentValue}</p>
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

        if (commentsForm) {
            commentsSection.appendChild(commentsBox);
            commentTextarea.value = "";
        };
    });
};