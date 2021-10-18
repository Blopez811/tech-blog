const newPostBtn = document.querySelector('#newPostBtn');
const myModal = document.querySelector('#myModal');
function newPostHandler() {
    console.log('create post fired!');
    myModal.style.display = "contents";
}

newPostBtn.addEventListener('click', newPostHandler);