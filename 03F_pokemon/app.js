let randomArray = Array.from({
    length: 6
}, () => Math.floor(Math.random() * 808));

let button = document.querySelector("#button")
let body = document.querySelector("body")
let ul = document.querySelector("ul")


let getPokemon = () => {
    randomArray.map(x =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
        .then(response => response.json())
        .then(results => {
            let li = document.createElement("li")
            let p = document.createElement("p")
            let typeP1 = document.createElement("p")
            let typeP2 = document.createElement("p")
            let img = document.createElement("img")

            ul.classList.add("pokemon-container");
            li.classList.add("pokemon");

            p.textContent = results.name
            img.src = results.sprites.front_default

            if (results.types.length == 1) {
                let pokeTypes = results.types[0].type.name
                typeP1.textContent = pokeTypes
                typeP2.textContent = " "
            } else if (results.types.length == 2) {
                let pokeType1 = results.types[0].type.name
                typeP1.textContent = pokeType1
                let pokeType2 = results.types[1].type.name
                typeP2.textContent = pokeType2
            }

            ul.appendChild(li).appendChild(p)
            ul.appendChild(li).appendChild(img)
            ul.appendChild(li).appendChild(typeP1)
            ul.appendChild(li).appendChild(typeP2)

        })
    )
}



button.addEventListener("click", getPokemon)