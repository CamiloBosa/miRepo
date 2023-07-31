const url = "https://pokeapi.co/api/v2/pokemon/"

const encontrar = async() =>{
     let poke = document.getElementById("poke").value
     const response = await fetch(`${url}${poke}`);
     const result = await response.json();
     await dibujar(result);
}

const dibujar = (pokemon) =>{
          document.querySelector("#resultado").innerHTML=""
          {
          document.querySelector("#resultado").innerHTML+=`
          <div>
               <div class="row row-cols-1 row-cols-md-3 g-4 mt-2" id="pokemon">
                    <div class="col">
                    
                         <div class="card">
                              <img src="${pokemon.sprites.other.dream_world.front_default}" class="img-fluid img-thumbnail" class="card-img-top " alt="...">
                         <div class="card-body">
                              <h5 class="card-title">${pokemon.name}</h5>
                              <p class="card-text">Experencia: ${pokemon.base_experience}</p>
                                   <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                   <div class="progress-bar progress-bar-striped bg-info" style="width: ${pokemon.base_experience}%"></div>
                                   </div>
                              <p class="card-text">Ataque: ${pokemon.stats[1].base_stat}</p>
                                   <div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                   <div class="progress-bar progress-bar-striped bg-danger" style="width: ${pokemon.stats[1].base_stat}%"></div>
                                   </div>
                              <p class="card-text">Defensa ${pokemon.stats[2].base_stat}</p>
                                   <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                   <div class="progress-bar progress-bar-striped" style="width: ${pokemon.stats[0].base_stat}%"></div>
                                   </div>
                              <p class="card-text">Peso: ${pokemon.weight} Kg</p>
                              <p class="card-text">Habilidades: ${pokemon.abilities[1].ability.name}, ${pokemon.abilities[0].ability.name}</p>
                         </div>
                    </div>
               </div>
          </div>`
          }
}


let boton = document.querySelector("#encontrar");
boton.addEventListener("click",encontrar)







