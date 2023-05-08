export const comment = {

    replyComment() {

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

            const commentsSection = document.querySelector('.comments');

            const createDivRecoil = document.createElement('div');
            createDivRecoil.setAttribute('class', 'comments-recoil');
            createDivRecoil.innerHTML = `
            <div class="comments-containers comments-recoil-nesting">
                <div class="comments-containers-user">
                    <img class="comments-containers-user-image" src="/assets/image/image-ramsesmiron.png" alt="Profile image">
                    <h2 class="comments-containers-user-name">ramsesmiron</h2>
                    <span class="comments-containers-user-post-date">1 week ago</span>
                </div>
                <div class="comments-containers-text">
                    <p class="comments-containers-text-content"><strong>@maxblagun</strong> ${replyValue}</p>
                </div>
                <div class="comments-containers-reacts">
                    <div class="comments-containers-reacts-rating">
                        <button class="comments-containers-reacts-rating-button"><i class="plus"></i></button>
                        <span class="comments-containers-reacts-rating-score">4</span>
                        <button class="comments-containers-reacts-rating-button"><i class="minus"></i></button>
                    </div>
                    <button id="reply3" class="comments-containers-reacts-reply-button"><i class="arrow"></i> Reply</button>
                </div>
            </div>
            `;

            commentsSection.appendChild(createDivRecoil);
        })


    }










}