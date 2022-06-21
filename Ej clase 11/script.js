var url = "https://rickandmortyapi.com/api/character/"

fetch(url)
.then(response => {
    return response.json()
})
.then(consoleMsg => {
    console.log(consoleMsg.results)
})
.catch(error => {
    console.log(error)
})

// for (let index = 1; index <= 5; index++) {
//     fetch(url+[index])
//     .then(response => {
//         return response.json()
//     })
//     .then(consoleMsg => {
//         console.log(consoleMsg.results)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }