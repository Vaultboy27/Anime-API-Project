const base_url = "https://api.jikan.moe/v3";


function searchAnime(){

    var e = document.getElementById("seasons");
    var season = e.options[e.selectedIndex].value;
    const ano = document.getElementById("ano").value;

    fetch(`${base_url}/season/${ano}/${season}`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.anime
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});


        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .sort((a,b)=>b.score-a.score)
            .filter(anime=> anime.r18 !== true)
            .map(anime=>{
                return `
                    <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                        </div>
                        <div class="card-content">
                        <p>Score:${anime.score}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}"target="_blank">Saiba mais</a>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section id="secao">
                    <h3>${key.toUpperCase()}</h3>
                    <div class="kemicofa-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}



function animeSelected(id){
    sessionStorage.setItem('animeId',id);
    window.location='Veranime.php';
    return false;
}


function GetAnime(){

    let animeId = sessionStorage.getItem('animeId');
  
    axios.get(`${base_url}/anime/${animeId}`)
      .then((response) => {
        console.log(response);
        let anime = response.data;
        console.log(anime);

        if(anime.episodes==null){
          anime.episodes="Ainda está a sair"
        }

        let output =`
        <div class=container" id="containeri">
          <div class="fixed" >
            <img src="${anime.image_url}" alt="${anime.title}" id="poster" onclick="aumentarimagem()" >
          </div>
          <div class="flex-item">
            <h2 id="titulo">${anime.title}</h2>
            <ul class="list-group">
            <li class="list-group-item">Título EN: ${anime.title_english}</li>
              <li class="list-group-item">Título JP: ${anime.title_japanese}</li>
            </ul>
            <ul class="list-group">
              <li class="list-group-item">Tipo: ${anime.type}</li>
              <li class="list-group-item">Fonte: ${anime.source}</li>
              <li class="list-group-item">Episodios: ${anime.episodes}</li>
              <li class="list-group-item">Status: ${anime.status}</li>
              <li class="list-group-item">Exibido: ${anime.aired.string}</li>
              <li class="list-group-item">Duração: ${anime.duration}</li>
              <li class="list-group-item">Classificação: ${anime.rating}</li>
              <li class="list-group-item">Score: ${anime.score}</li>
              <li class="list-group-item">Season: ${anime.premiered}</li>
              <li class="list-group-item">Broadcast: ${anime.broadcast}</li>
            </ul>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Sinopse:</h3>
            ${anime.synopsis}
            <hr>
            </div>
        <div class="row" id= "botoes">
            <a href="${anime.url}" target="_blank" class="btn btn-primary">Ver MyAnimeList</a>
            <a href="anime.php" class="btn btn-default">Voltar a pesquisar</a>
          </div> 
      `;
  
        $('#anime').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }

function aumentarimagem(){
             var modal = document.getElementById('myModal');

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById('poster');
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            }

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
            modal.style.display = "none";
            }
}
