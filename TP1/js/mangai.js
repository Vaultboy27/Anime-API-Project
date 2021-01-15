const base_url = "https://api.jikan.moe/v3/top/manga/1";



function TopManga(){

    
    axios.get(`${base_url}/manga`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            if(anime.end_date==null){
            let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Data de lançamento:${anime.start_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url} target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topairing').append(output);
            }
            else{
                let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.start_date}-${anime.end_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url} target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topairing').append(output);
                
            }
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}

function TopNovels(){

    
    axios.get(`${base_url}/novels`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            if(anime.end_date==null){
            let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Data de lançamento:${anime.start_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topupcoming').append(output);
            }
            else{
                let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.start_date}-${anime.end_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#topupcoming').append(output);
                
            }
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}

function TopManhwa(){

    
    axios.get(`${base_url}/manhwa`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            if(anime.end_date==null){
            let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Data de lançamento:${anime.start_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#top').append(output);
            }
            else{
                let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.start_date}-${anime.end_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#top').append(output);
                
            }
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}
function TopManhua(){

    
    axios.get(`${base_url}/manhua`)
      .then((response) => {
        console.log(response);
        let anim = response.data.top;
        console.log(anim);

        var i;
        for (i = 0; i < anim.length; i++) {

            anime = anim[i];
            if(anime.end_date==null){
            let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Data de lançamento:${anime.start_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}">Saiba mais</a>
                </div>
            </div>
        `;

            $('#Manhua').append(output);
            }
            else{
                let output =` 
            <div class="card" onclick="MangaSelected('${anime.mal_id}')" >
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.start_date}-${anime.end_date}</p>
                </div>
                <div class="card-content">
                <p>Score:${anime.score}</p>
                </div>
                <div class="card-action">
                    <a href="${anime.url}target="_blank"">Saiba mais</a>
                </div>
            </div>
        `;

            $('#Manhua').append(output);
                
            }
          
        }        
      })
      .catch((err) => {
        console.log(err);
      });
}

function MangaSelected(id){
    sessionStorage.setItem('mangaId',id);
    window.location='VerManga.php';
    return false;
}


function GetManga(){

    let mangaId = sessionStorage.getItem('mangaId');
  
    axios.get(`${base_url}/manga/${mangaId}`)
      .then((response) => {
        console.log(response);
        let manga = response.data;
        console.log(manga);

        var text = "";
        var kat=", ";
        var i;
        var lastItem = manga.genres[manga.genres.length - 1];
        for (i = 0; i < manga.genres.length; i++) {
         
          if( manga.genres[i] ==lastItem){
            text += manga.genres[i].name;
          }
          else{
            text += manga.genres[i].name + kat ;
          }
        } 


        let output =`
        <div class=container" id="containeri">
          <div class="fixed" >
            <img src="${manga.image_url}" alt="${manga.title}" id="poster" onclick="aumentarimagem()" >
          </div>
          <div class="flex-item">
            <h2 id="titulo">${manga.title}</h2>
            <ul class="list-group">
            <li class="list-group-item">Título EN: ${manga.title_english}</li>
              <li class="list-group-item">Título JP: ${manga.title_japanese}</li>
            </ul>
            <ul class="list-group">
              <li class="list-group-item">Tipo: ${manga.type}</li>
              <li class="list-group-item">Géneros: ${text}</li>
              <li class="list-group-item">Capítulos: ${manga.chapters}</li>
              <li class="list-group-item">Volumes: ${manga.volumes}</li>
              <li class="list-group-item">Status: ${manga.status}</li>
              <li class="list-group-item">Exibido: ${manga.published.string}</li>
              <li class="list-group-item">Score: ${manga.score}</li>
              
              
            </ul>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Sinopse:</h3>
            ${manga.synopsis}
            <hr>
            </div>
        <div class="row" id= "botoes">
            <a href="${manga.url}" target="_blank" class="btn btn-primary">Ver MyAnimeList</a>
            <a href="manga.php" class="btn btn-default">Voltar a pesquisar</a>
          </div> 
      `;
  
        $('#anime').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }