const base_url = "https://api.jikan.moe/v3";


function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    var e = document.getElementById("generos");
    var generos = e.options[e.selectedIndex].value;

    if(generos==""){
      fetch(`${base_url}/search/anime?q=${query}`)
      .then(res=>res.json())
      .then(updateDom)
      .then(console.log(res))
      .catch(err=>console.warn(err.message));

    }else{

      fetch(`${base_url}/search/anime?q=${query}&genre=${generos}&order_by=members`)
      .then(res=>res.json())
      .then(updateDom)
      .then(console.log(res))
      .catch(err=>console.warn(err.message));

    }


}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});


        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .filter(anime=> anime.rated !== "Rx")
            .map(anime=>{
                return `
                    <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                            <p></p>
                        </div>
                        <div class="card-content">
                        <p>Score:${anime.score}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}" target="_blank" >Saiba mais</a>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section id="secao">
                    <h3>${key.toUpperCase()}<hr></h3>
                    <div class="kemicofa-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}


window.addEventListener("load", pageLoaded);

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

        var text = "";
        var kat=", ";
        var i;
        var lastItem = anime.genres[anime.genres.length - 1];
                
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
              <li class="list-group-item">Géneros: </li><div id="generos"></div>
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


      for (i = 0; i < anime.genres.length; i++) {
         
        
          text = anime.genres[i].name;
          let generos=`
              <div class="chip" id="chip">${text} </div>`
          $('#generos').append(generos);
      }


      if(anime.trailer_url==null){
        let video='<p>Não existe Trailer disponível :(</p>';
        $('#trailer').html(video);
        

      }else{
        let video=`
        <iframe width="600" height="400" src="${anime.trailer_url}">
        </iframe>
        `
          $('#trailer').html(video);
        
      }
        
        
      })
      .catch((err) => {
        console.log(err);
      });


      axios.get(`${base_url}/anime/${animeId}/pictures`)
      .then((response) => {
        console.log(response);
        let anime = response.data;
        console.log(anime);

        var text = "";
        var i;
        for (i = 0; i < anime.pictures.length; i++) {
         
          
            text = anime.pictures[i].large;
            let output =`
            <div <a class="carousel-item"><img id="img" src="${text}" /></div>
           `;
  
        $('#carousel').append(output);
        var elems2 = document.querySelectorAll('.carousel');
        var instances2 = M.Carousel.init(elems2);
          
          
        }
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


function getGeneros(){

  let output=`
 
  <option value="" >Escolher Géneros</option>
  <option value="1">Ação</option>
  <option value="2">Aventura</option>
  <option value="3">Carros</option>
  <option value="4">Comédia</option>
  <option value="5">Demência</option>
  <option value="6">Demónios</option>
  <option value="7">Mistério</option>
  <option value="8">Drama</option>
  <option value="9">Ecchi</option>
  <option value="10">Fantasy</option>
  <option value="11">Game</option>
  <option value="12">Hentai</option>
  <option value="13">Historical</option>
  <option value="14">Horror</option>
  <option value="15">Kids</option>
  <option value="16">Magic</option>
  <option value="17">Martial Arts</option>
  <option value="18">Mecha</option>
  <option value="19">Music</option>
  <option value="20">Parody</option>
  <option value="21">Samurai</option>
  <option value="22">Romance</option>
  <option value="23">School</option>
  <option value="24">Sci Fi</option>
  <option value="25">Shoujo</option>
  <option value="26">Shoujo Ai</option>
  <option value="27">Shounen</option>
  <option value="28">Shounen Aii</option>
  <option value="29">Space</option>
  <option value="30">Sports</option>
  <option value="31">Super Power</option>
  <option value="32">Vampire</option>
  <option value="33">Yaoi</option>
  <option value="34">Yuri</option>
  <option value="35">Harem</option>
  <option value="36">Slice Of Life</option>
  <option value="37">Supernatural</option>
  <option value="38">Military</option>
  <option value="39">Police</option>
  <option value="40">Psychological</option>
  <option value="41">Thriller</option>
  <option value="42">Seinen</option>
  <option value="43">Josei</option>
`

$('#generos').html(output);

}


