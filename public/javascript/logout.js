const logoutBtn = document.querySelector('#logoutBtn');

async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/');
        console.log('succefully logged out!')
    } else {
        alert(response.statusText);
    }  
};

document.querySelector('#logoutBtn').addEventListener('click', logout);