const container = document.getElementById("container");
const URL = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon_count = 10;
//card=[{"name":"babsor","id":"1","img":"","type":"grass"},{"name":"thakkudu","id":"2","img":"","type":"water"}]

async function fetchPokemons() {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  const res = await fetch(URL + id);
  const data = await res.json();

  createCards(data);
}

fetchPokemons();

function createCards(card) {
  let { id, name, types } = card;
  
  let type = types.map((type) => type.type.name);

  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  cardEl.style.backgroundColor = pickColorByType(type);

  cardEl.innerHTML = `
            <div class="image-section">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
             </div>
            <div class="text-section">
                <p class="id">#${id}</p>
                <p class="name">${name}</p>
                <p> Type : <span class="type">${type}</span></p>
            </div>
        `;
  container.appendChild(cardEl);
}

function pickColorByType(type) {
  switch (type[0]) {
    case "fire":
      return "#FDDFDF";
    case "grass":
      return "#defde0";
    case "water":
      return "#def3fd";
    case "poision":
      return "#98d785";
    case "flying":
      return "#f5f5f5";
  }
}
