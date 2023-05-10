export const addComment = {

    // Método para criar comentário
    createCommentTextarea (commentValue) {
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
        return commentsBox;
    }
};

export const replyComment = {

    // Método para mostrar e esconder o conteiner de resposta
    containerStateToggle (form) {
        const replyContainer = document.getElementById(form);
        replyContainer.classList.toggle('comments-form-hide');
    },

    // * Método para criar resposta
    createRecoilDiv (userName, replyValue) {
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
        return recoilDiv;
    },

    // * Método para criar resposta
    createRecoilNestingDiv (userName, replyValue) {
        const recoilNestingDiv = document.createElement('div');
        recoilNestingDiv.classList.add('comments-containers', 'comments-recoil-nesting');
        recoilNestingDiv.innerHTML = `
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
        return recoilNestingDiv;
    }
}