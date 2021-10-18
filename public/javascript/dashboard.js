const newPostBtn = document.querySelector('#newPostBtn');
const myModal = document.querySelector('#myModal');
const xModalBtn = document.querySelector('#xModalBtn');
const closeBtn = document.querySelector('#closeBtn');

function newPostHandler() {
    console.log('create post fired!');
    myModal.style.display = "contents";
};

function exitModal() {
    myModal.style.display = "none";
}

newPostBtn.addEventListener('click', newPostHandler);
xModalBtn.addEventListener('click', exitModal);
closeBtn.addEventListener('click', exitModal)
