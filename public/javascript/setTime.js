function logoutTime() {
     // Set a time frame countdown using SetTimeOut()
     setTimeout(function(){ 
        async function logout () {
            const response = await fetch('/api/users/logout', {
                method: 'post',
                headers: {'Content-Type': 'application/json'}
            });
        
            if(response.ok) {
                document.location.replace('/login');
                alert("You were logged out due to inactivity, please log in again!")
            } else {
                alert(response.statusText);
            }  
        };
        logout()
        }, 3000);

     //Set event listener to watch for entire window document for a click or action, which will reset timer if occurs
     // When time runs down we fire logout route to end session.
    console.log('logoutTimer from setTime.js fired!');
}

logoutTime();