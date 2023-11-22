let contenedor = document.querySelector(".container");
let url = "https://pokeapi.co/api/v2/pokemon/";


function pokemonAleatorio() {
    let i = Math.floor(Math.random() * 1000) + 1;;
    fetch(url + i)
        .then((res) => res.json())
        .then((data) => {
            
            console.log(data);
            contenedor.innerHTML += `
            <h1>Pokemon Aleatorio</h1>
                <div class="card">
                    <img src="${data.sprites.front_default}" alt="${data.name} width="200" height="200">
                    <h2>${data.name}</h2>
                    ${data.types.map((type) => `<button class="type ${type.type.name}">${type.type.name}</button>`).join(" ")}
                    <p>#${data.id}</p>
                </div>
                <a href="index.html" class="btn">Recargar</a>
            `;
            
        });
}



pokemonAleatorio();
