let contenedor = document.querySelector(".container");
let url = "https://pokeapi.co/api/v2/pokemon/";


function pokemonAleatorio() {
    let i = Math.floor(Math.random() * 151) + 1;;
    fetch(url + i)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            contenedor.innerHTML += `
            <h1>Pokemon Aleatorio</h1>
                <div class="card">
                    <img src="${data.sprites.front_default}" alt="${data.name} width="200" height="200">
                    <h2>${data.name}</h2>
                    <h3>${data.types[0].type.name}</h3>
                    <p>#${data.id}</p>
                </div>
                <a href="index.html" class="btn">Recargar</a>
            `;
        });
}

pokemonAleatorio();
