/** Resolução do Exercício PKMN - Professor ::: Aula Extra 01/08/2022 */
function Pokemon(nome, pontosAtaque, pontosDefesa) {
    this.nome = nome;
    this.pontosAtaque = pontosAtaque;
    this.pontosDefesa = pontosDefesa;
    this.atacar = (oponente) => {
        // Se eu tenho mais pontos de ataque 
        // do que o outro pokemon tem de pontos de defesa
        // Eu sou o campeão
        // Se não, eu sou o perdedor
        // CONDICAO ? VERDADEIRO : FALSO
        const vencedor = (this.pontosAtaque > oponente.pontosDefesa) ? this : oponente;
        console.log(`O vencedor da luta é ${vencedor.nome}\n`);
    };
    // Qdo criar um callback, precisa saber quais informac'ões serão necessarias para chamá-la da função inicial/principal que invoca ela.
    // underline ignora parametro que não será usado OU 
    this.saudacao = (callbackSaudacao) => {
        // spread para passar a informação
        // destruturaçao para receber a informacao
        const textoSaudacao = `Olá! ${callbackSaudacao({ ...this })}`;
        console.log(textoSaudacao);
    };
}

function saudacaoCompleta({ nome, pontosAtaque, pontosDefesa }) {
    return `Meu nome é ${nome}! Tenho ${pontosAtaque} pontos de ataque e tenho ${pontosDefesa} pontos de defesa.`
}

function saudacaoSimples({ pontosDefesa }) {
    return `Meus pontos de defesa são ${pontosDefesa}.`;
}

// function saudacaoComRest(parametro1, parametro2, ...rest){} - exemplo de ...rest

let pineco = new Pokemon("Pineco", 1500, 500);
let pikachu = new Pokemon("Pikachu", 2500, 1000);
//pineco.saudacao(saudacaoCompleta); // não é responsabilidade nossa de instanciar, é da funCão que tá chamando (passei como parametro e retorna a execucao)
//pikachu.saudacao(saudacaoSimples);

let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'
let listaPokemons = JSON.parse(jsonPokemons);

// Para cada item dentro de RESULTS, vamos criar um novo POKEMON 
// e adicionar em uma lista de pokemons

let instanciasPokemons = [];
for (let contador = 0; contador < listaPokemons.results.length; contador++) {
    let instancia = new Pokemon(
        listaPokemons.results[contador].name,
        (contador + 1) * Math.random() * 1000,
        (contador + 1) * Math.random() * 500
    );
    instanciasPokemons.push(instancia);
}

// Metodos de array:
// map, filter, ForEach, Reduce, Find

/* MAP: método que retorna um array alterado */
/* FILTER: método utilizado para filtar e retornar um array filtrado */
/* FOREACH: método utilizado para percorrer/iterar sobre um array */
/* REDUCE: método utilizado para criar algo novo a partir de um novo array */
/* FIND: método utilizado para encontrar algo dentro de um array */


// for (let atacante = 0; atacante < instanciasPokemons.length; atacante++) {
//     const pokemonAtacante = instanciasPokemons[atacante];
//     console.log(`O atacante é ${pokemonAtacante.nome}. Os pontos de ataque são ${pokemonAtacante.pontosAtaque}`);

//     for (let defensor = 0; defensor < instanciasPokemons.length; defensor++) {
//         if (atacante != defensor) {
//             const pokemonDefensor = instanciasPokemons[defensor];
//             console.log(`O defensor é ${pokemonDefensor.nome}. Os pontos de defesa são ${pokemonDefensor.pontosDefesa}`);
//             pokemonAtacante.atacar(pokemonDefensor);
//         }
//     }

//     console.log('\n');
// }

instanciasPokemons.forEach(
    (pokemon, index) => {
        console.log(`O atacante é ${pokemon.nome.toUpperCase()}. Os pontos de ataque são ${Math.round(pokemon.pontosAtaque)}`);
    }
);

// PKMN com mais de 2000 de ataque
const pokemonsFortes = instanciasPokemons.filter(
    (pokemon) => {
        return pokemon.pontosAtaque > 2000;
    }
);
console.log(pokemonsFortes)

function proprioForEach(array, callback) {
    for (let posicao = 0; posicao < array.length; posicao++) {
        const valor = array[posicao];
        callback(valor, posicao);
    }
}

proprioForEach(pokemonsFortes, (valor, posicao) => {
    console.log(valor, posicao);
})

proprioForEach(pokemonsFortes, (valor, posicao) => {
    console.log(valor.nome);
})

proprioForEach(pokemonsFortes, (valor, posicao) => {
    console.log(valor.nome, valor.pontosAtaque);
})

// Exercício extra: 
/**
 * Criar o próprio método de filter
 * Criar o próprio método de map
 */

