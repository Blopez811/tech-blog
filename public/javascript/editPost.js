const editBtn = document.querySelector('.edit-button');
const myModalUpdate = document.querySelector('#myModalUpdate');
const xModalBtnUpdate = document.querySelector('#xModalBtnUpdate');
const closeBtnUpdate = document.querySelector('#closeBtnUpdate');
const saveBtnUpdate = document.querySelector('#saveBtnUpdate');
const postsEl = document.querySelector('#postsEl')
const postIdEl = document.querySelector('#postId')

function updatePostHandler(currentButton) {
    event.preventDefault();
    console.log(currentButton.id)
    myModalUpdate.style.display = "contents";
    let postId = this.id
    postIdEl.value = currentButton.id;
    
};


function exitModal() {
    myModalUpdate.style.display = "none";
};

async function saveBtnHandler() {
    event.preventDefault();
  
    const title = document.querySelector('#titleInputUpdate').value;
    const body = document.querySelector('#bodyInputUpdate').value;
    

    console.log(title);
    console.log(body);
    console.log(postIdEl.value)
  
    // const response = await fetch(`/api/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title,
    //     body
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    //   console.log('successful post route');
    // } else {
    //   alert(response.statusText);
    // }
}


xModalBtnUpdate.addEventListener('click', exitModal);
closeBtnUpdate.addEventListener('click', exitModal);
saveBtnUpdate.addEventListener('click', saveBtnHandler);
// postsEl.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (event.target.matches('button')) {
//        postId = this.id
//         updatePostHandler(postId);
//     }
// })

   