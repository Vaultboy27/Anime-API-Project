const base_url = "https://api.jikan.moe/v3";


function searchManga(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/search/manga?q=${query}&genre=12&genre_exclude=0`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    const mangaByCategories = data.results
      .filter(manga=> manga.type !== "Doujinshi")
        .reduce((acc, manga)=>{

            const {type} = manga;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(manga);
            return acc;

        }, {});

        searchResults.innerHTML = Object.keys(mangaByCategories).map(key=>{

            const mangasHTML = mangaByCategories[key]
            .filter(manga=> manga.type !== "Doujinshi")
            .map(manga=>{
                return `
                    <div class="card" onclick="MangaSelected('${manga.mal_id}')">
                        <div class="card-image">
                            <img src="${manga.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${manga.title}</span>
                            <p>${manga.synopsis}</p>
                        </div>
                        <div class="card-action">
                            <a href="${manga.url} target="_blank"">Saiba mais</a>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="kemicofa-row">${mangasHTML}</div>
                </section>
            `
        }).join("");
}

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchManga);
}


window.addEventListener("load", pageLoaded);

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
              <li class="list-group-item">Géneros: </li><div id="generos"></div>
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
            <a href="mangalist.php" class="btn btn-default">Voltar a pesquisar</a>
          </div> 
      `;
  
        $('#anime').html(output);

        for (i = 0; i < manga.genres.length; i++) {

          text = manga.genres[i].name;
          let generos=`
              <div class="chip" id="chip">${text} </div>`
          $('#generos').append(generos);
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