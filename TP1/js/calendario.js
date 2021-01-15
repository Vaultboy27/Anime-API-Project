

function GetAnimeSegunda(){

    
  
    axios.get(`${base_url}/schedule/monday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.monday.length; i++) {
         
            
            anime = anim.monday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test1').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});
                

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }

  function GetAnimeTerça(){

    
  
    axios.get(`${base_url}/schedule/tuesday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.tuesday.length; i++) {
         
            
            anime = anim.tuesday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test2').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});
                

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }
  function GetAnimeQuarta(){

    
  
    axios.get(`${base_url}/schedule/wednesday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.wednesday.length; i++) {
         
            
            anime = anim.wednesday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test3').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});
                

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }
  function GetAnimeQuinta(){

    
  
    axios.get(`${base_url}/schedule/thursday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.thursday.length; i++) {
         
            
            anime = anim.thursday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test4').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }
  function GetAnimeSexta(){

    
  
    axios.get(`${base_url}/schedule/friday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.friday.length; i++) {
         
            
            anime = anim.friday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test5').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }
  function GetAnimeSabado(){

    
  
    axios.get(`${base_url}/schedule/saturday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.saturday.length; i++) {
         
            
            anime = anim.saturday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test6').append(output);
                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }

  function GetAnimeDomingo(){

    
  
    axios.get(`${base_url}/schedule/sunday`)
      .then((response) => {
        console.log(response);
        let anim = response.data;
        console.log(anim);

        

        for (i = 0; i < anim.sunday.length; i++) {
         
            
            anime = anim.sunday[i];

            if(anime.kids ){


            }else{

                let output =`
                <div class="column" id="column">
                        <div class="card" onclick="animeSelected('${anime.mal_id}')" >
                            <div class="card-image">
                                <img src="${anime.image_url}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${anime.title}</span>
                                <p>Data de lançamento${anime.airing_start}</p>
                                
                            </div>
                            <div class="card-content">
                            <p>Score:${anime.score}</p>
                            </div>
                            <div class="card-action">
                                <a href="${anime.url}">Saiba mais</a>
                            </div>
                        </div>
                </div>
                    `;
                $('#test7').append(output);

                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});
                

            }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });


  }