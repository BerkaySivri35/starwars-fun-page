const characterImage = document.getElementById("characterImage");
const characterName = document.getElementById("characterName");
const gender = document.getElementById("gender");
const BtnCharacter = document.getElementById("BtnCharacter");

const planetPopulation = document.getElementById("planetPopulations");
const planetName = document.getElementById("planetName");
const planetInfo = document.getElementById("planetInfo");
const BtnPlanet = document.getElementById("BtnPlanet");

const shipManu = document.getElementById("shipManu");
const shipName = document.getElementById("shipName");
const shipmodel = document.getElementById("shipmodel");
const BtnShip = document.getElementById("BtnShip");

BtnCharacter.addEventListener("click", (e) => {
    e.preventDefault()
        characterImage.innerHTML = '<em>Loading...</em>'
        characterName.innerHTML = '<em>Loading...</em>'
        gender.innerHTML = '<em>Loading...</em>'
    console.log("Button clicked!!!!!")

    const randomNumber = Math.ceil(Math.random() *83)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
    .then(response => response.json())
    .then(data => {
        FuncCharacter(data)

    })
})

const FuncCharacter = (data) => {
    document.getElementById("characterImage").src = data.image
    document.getElementById("characterName").innerText = data.name
    document.getElementById("gender").innerText = data.gender
}

//----------------------------------------------------------------
BtnPlanet.addEventListener("click", (e) => {
    e.preventDefault()
        planetpopulation.innerHTML = '<em>Loading...</em>'
        planetName.innerHTML = '<em>Loading...</em>'
        planetInfo.innerHTML = '<em>Loading...</em>'
    console.log("Button clicked!!!!!")

    const randomNumber = Math.ceil(Math.random() *25)
    fetch(`https://swapi.dev/api/planets/${randomNumber}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        FuncPlanet(data)

    })
})

const FuncPlanet = (data) => {
    document.getElementById("planetpopulation").innerHTML = data.population
    document.getElementById("planetName").innerText = data.name
    document.getElementById("planetInfo").innerText = data.climate
}

//--------------------------------------------------------------------
BtnShip.addEventListener("click", (e) => {
    e.preventDefault()
        shipManu.innerHTML = '<em>Loading...</em>'
        shipName.innerHTML = '<em>Loading...</em>'
        shipmodel.innerHTML = '<em>Loading...</em>'
    console.log("Button clicked!!!!!")

    const randomNumber = Math.ceil(Math.random() *17)
    fetch(`https://swapi.dev/api/starships/${randomNumber}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        FuncShip(data)

    })
})

const FuncShip = (data) => {
    document.getElementById("shipManu").innerHTML = data.manufacturer
    document.getElementById("shipName").innerHTML = data.name
    document.getElementById("shipmodel").innerHTML = data.model
}