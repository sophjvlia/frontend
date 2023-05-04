// Poggle The Lesser

fetch('https://swapi.dev/api/people/63')
    .then((response) => response.json())
    .then((data) => {
        let { skin_color, eye_color, birth_year, name } = data;
        console.log(`${name}'s skin color is ${skin_color}`);
        console.log(`His eyes are ${eye_color}`);
        console.log(`He was born in year ${birth_year}`);
});

// Solar Sailer

fetch('https://swapi.dev/api/starships/58')
    .then((response) => response.json())
    .then((data) => {
        let { hyperdrive_rating, cost_in_credits, manufacturer } = data;
        console.log(hyperdrive_rating, cost_in_credits, manufacturer);
});

// Geonosis

fetch('https://swapi.dev/api/planets/11')
    .then((response) => response.json())
    .then((data) => {
        let { climate, terrain, orbital_period } = data;
        console.log(climate, terrain, orbital_period);
});

// Bonus

fetch('https://swapi.dev/api/people/11')
    .then((response) => response.json())
    .then((data) => {
        let { starships } = data;
        starships.map((obj) => {
            fetch(obj)
            .then((response) => response.json())
            .then((data) => console.log(data))
        })
});