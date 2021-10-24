const addCommentInputEl = document.querySelector('#addCommentInput');
const addCommentBtn = document.querySelector('#addCommentBtn');
let post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];
async function addCommentHandler() {
    console.log('addCommentHandler fired!');
    console.log(addCommentInputEl.value);
    let comment_text = addCommentInputEl.value
    event.preventDefault();
    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

addCommentBtn.addEventListener('click', addCommentHandler);