const rick = async() =>{

    try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character')

        console.log(respuesta);
        if (respuesta.estatus = 200){
            const datos = await respuesta.json();

            let ricks = '';
            datos.results.forEach(character =>{
                /* console.log(character.name) */
                ricks = ricks + `<div class="custom-card-col">
                <div class="card">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Status: ${character.status}</p>
                </div>
                </div>
            </div> `
            })
            document.getElementById('carta').innerHTML = ricks
            
        }  else {
            console.log('Se presenta un error en la solicitud');
        } 

    }catch(error){
        console.log(error);
    }
   
};

rick();
