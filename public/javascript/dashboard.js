const newPostBtn = document.querySelector('#newPostBtn');

function newPostHandler() {
    console.log('create post fired!')
}

newPostBtn.addEventListener('click', newPostHandler);