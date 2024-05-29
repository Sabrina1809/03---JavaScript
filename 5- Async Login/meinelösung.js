let userEmail; 

function loginUser(mail) {
    return new Promise((resolve,reject) => {
        setTimeout ( () => {
            resolve ({userEmail : mail});
        }, 1500)
})
}

function getUserDetails(postcode) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve ({userPostcode : postcode});
        }, 1500)
    })
}

// loginUser("Codingschule", "123456")
// .then ( user => getUserDetails(user.userEmail))
// .then ( profile => console.log(profile))



async function userprofil() {
    let login = await loginUser("Codingschule");
    let detail = await getUserDetails("123456");
    console.log(login, detail);

}

userprofil();