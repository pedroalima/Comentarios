class Comments {

    constructor (id, content, createdAt, score, directory, name) {
        this._id = id;
        this._content = content;
        this._createdAt = createdAt;
        this._score = score;
        this._user = [
            this._image = directory,
            this._username = name
        ];
        this._replies = [];
    }

    get id() {
        return this._id;
    }

    get content() {
        return this._content;
    }

    get createdAt() {
        return this._createdAt;
    }

    get score() {
        return this._score;
    }

    get user() {
        return this._user;
    }

    get image() {
        return this._image;
    }

    get username() {
        return this._username;
    }

    get replies() {
        return this._replies;
    }

    addReply(newReply) {
        this.replies.push(newReply);
    }

}

class Reply extends Comments{

    constructor(id, content, createdAt, score, replyingTo, directory, name) {
        super(id, content, createdAt, score, directory, name);
        this._replyingTo = replyingTo;
    }

    get replyingTo() {
        return this._replyingTo;
    }

}

const amyrobson = new Comments(
    1,
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "1 month ago",
    12,
    "./images/avatars/image-amyrobson.png",
    "amyrobson"
);

const maxblagun = new Comments(
    2,
    "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "2 weeks ago",
    5,
    "./images/avatars/image-maxblagun.png",
    "maxblagun"
);

const ramsesmiron = new Reply(
    3,
    "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    "1 week ago",
    4,
    "maxblagun",
    "./images/avatars/image-ramsesmiron.png",
    "ramsesmiron"
);

const juliusomo = new Reply(
    4,
    "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    "2 days ago",
    2,
    "ramsesmiron",
    "./images/avatars/image-juliusomo.png",
    "juliusomo"
);

// console.log(amyrobson);

maxblagun.addReply(ramsesmiron);
maxblagun.addReply(juliusomo);
// console.log(maxblagun);

export { amyrobson, maxblagun, ramsesmiron, juliusomo };