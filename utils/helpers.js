module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },

    logoutTimer: () => {
        // Set a time frame countdown using SetTimeOut()
        //Set event listener to watch for entire window document for a click or action, which will reset timer if occurs
        // When time runs down we fire logout route to end session.
        console.log("logoutTimer fired!")
    }
}