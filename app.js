//Exercises 1-5

const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
      { level: "medium" }
    ],

  }

  game.party = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]
  console.log(game.party)


// console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[59]);



// Exercise 6

game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

console.log(game);

// Exercise 7

game.party.splice(0, 1, "Ivysaur");

console.log(game.party);

// Exercise 8

for (let idx = 0; idx < game.party.length; idx++) {
    console.log(game.party[idx])
};

// Exercise 9

const starterPokemon = pokemon.filter(p => p.starter);
console.log(starterPokemon);

// Exercise 10

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
};
console.log(game.party);

const choosePokemon = { number: 16, name: "Pidgey", type: "normal", hp: 40, starter: false }
game.catchPokemon(choosePokemon);

console.log(game.party);

// Exercise 11

