const addCommentInput = document.querySelector('#addCommentInput');
const addCommentBtn = document.querySelector('#addCommentBtn');

function addCommentHandler() {
    console.log('addCommentHandler fired!')
};

addCommentBtn.addEventListener('click', addCommentHandler);