const retrieveData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (0.5 >0.4) {
                resolve(`Of course it's not true, dummy!`)
            } else {
                reject('Error 404')
            }
        }, 2000)
    })
}

retrieveData('/spaceship/1/')
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
