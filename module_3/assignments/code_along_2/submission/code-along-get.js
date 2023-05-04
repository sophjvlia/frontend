fetch('https://swapi.dev/api/films/').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('rejected', error);
});