const search = document.getElementById('search_q')
const search_btn = document.getElementById('search_btn')


const pokeData = async() =>{
    console.log("inside")
    const URL = `https://pokeapi.co/api/v2/pokemon/${search.value}`;
    const response = await fetch(URL)
    if (response.status == 404) {
        document.getElementById("update_name").innerText = "What is this?!?!"
        document.getElementById("update_img").setAttribute('src', "./assets/MissingNo.png")
        document.getElementById("update_location").innerText = "Unknown"
    }
    const pokemon = await response.json()
    console.log(pokemon)
    document.getElementById("update_img").setAttribute('src', pokemon.sprites.front_default)
    document.getElementById("update_name").innerText = pokemon.name
    let locationTitle = document.createElement("h3")
    /*locationTitle.innerText = "Location: "
    document.getElementById("pokemon-Location").appendChild(locationTitle)*/
    locationData(pokemon.location_area_encounters)
}
search_btn.addEventListener("click", pokeData)

const locationData = async(location) =>{
    
    
    let updateLocation = document.getElementById("update_location")
    while (updateLocation.firstChild) {
        updateLocation.removeChild(updateLocation.firstChild)
    }
    const response = await fetch(location)
    const locationEncounter = await response.json()
    console.log(locationEncounter)
    locationEncounter.map((potato) => {
        console.log(potato.location_area.name)
        
        
       
        let listItem = document.createElement("li")
        listItem.innerText = potato.location_area.name

        updateLocation.appendChild(listItem)
        
    })
    

}