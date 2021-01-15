const base_url = "https://api.jikan.moe/v3";



function TopAnimeAiring(){

    
    axios.get(`${base_url}/top/anime/1/airing`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            if(anime.type=="TV"){
            let output =` 
            <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    
                    <p></p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}" target="_blank">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topairing').append(output);
            }
            else{

            }
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}

function TopAnimeUpcoming(){

    
    axios.get(`${base_url}/top/anime/1/upcoming`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            let output =` 
            <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p> Data de lançamento:${anime.start_date}
                    <p></p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}" target="_blank">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topupcoming').append(output);
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}

function TopAnime(){

    
    axios.get(`${base_url}/top/anime/1/tv`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            let output =` 
            <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title} Rank: ${anime.rank}</span>
                    <p>${anime.start_date}- ${anime.end_date}</p> 
                </div>
                <div class="card-content">
                <p>Episódios:${anime.episodes}</p>
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}" target="_blank">Saiba mais</a>
                </div>
            </div>
        `;

            $('#top').append(output);
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
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

        var text = "";
        var kat=", ";
        var i;
        var lastItem = anime.genres[anime.genres.length - 1];
        for (i = 0; i < anime.genres.length; i++) {
         
          if( anime.genres[i] ==lastItem){
            text += anime.genres[i].name;
          }
          else{
            text += anime.genres[i].name + kat ;
          }
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
              <li class="list-group-item">Géneros: ${text}</li>
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
      let video=`
      <iframe width="600" height="400" src="${anime.trailer_url}">
      </iframe>
      `
        $('#trailer').html(video);
        $('#anime').html(output);
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
            <div class="item"><img id="img" src="${text}" onclick="aumentarimagemp()"/></div>
           `;
  
        $('#items').append(output);
          
          
        }
      })
      .catch((err) => {
        console.log(err);
      });



  }