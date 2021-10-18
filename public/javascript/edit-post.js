const editBtn = document.querySelector('.edit-button');
const myModalUpdate = document.querySelector('#myModalUpdate');
const xModalBtnUpdate = document.querySelector('#xModalBtnUpdate');
const closeBtnUpdate = document.querySelector('#closeBtnUpdate');
const saveBtnUpdate = document.querySelector('#saveBtnUpdate');
function UpdatePostHandler() {
    console.log('create post fired!');
    myModalUpdate.style.display = "inherit";
};

function exitModal() {
    myModalUpdate.style.display = "none";
};

async function saveBtnHandler() {
    event.preventDefault();
  
    const title = document.querySelector('#titleInput').value;
    const body = document.querySelector('#bodyInput').value;

    console.log(title);
    console.log(body);
  
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

editBtn.addEventListener('click', UpdatePostHandler);
xModalBtnUpdate.addEventListener('click', exitModal);
closeBtnUpdate.addEventListener('click', exitModal);
saveBtnUpdate.addEventListener('click', saveBtnHandler);