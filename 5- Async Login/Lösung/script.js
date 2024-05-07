function loginUser(username, password) {
    return new Promise((resolve,reject) => {
        setTimeout ( () => {
            resolve ({userEmail : "kontakt@codingschule.de"});
        }, 1500)
})
}

function getUserDetails(userEmail) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve ({userPostcode : "40476"});
        }, 1500)
    })
}

async function getUser() {
    const user = await loginUser("Codingschule", "123456")
    const profile = await getUserDetails(user.userEmail)
    console.log(profile);
}

getUser()
