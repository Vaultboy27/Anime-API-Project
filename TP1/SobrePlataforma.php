<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="icon" href="imagens/icon.png">
        <link rel="stylesheet" href="./css/verAnime.css">
    </head>
    <body>

        
        <header>
        <?php
        require_once("header.php");
        ?> 
        </header>
        <main>

        
                
        <div class="container" id="container-new">
                <h1 id="h1s">Sobre a plataforma</h1>
                <p>Kontentsu Finder é uma plataforma de procura de anime e manga.</p>
                <p>Algumas funcionalidades da plataforma são: procurar  anime e manga pelo o nome, visualizar animes de acordo com a season selecionada e calendário semanal de animes</p>
                <hr>
                <h2>APIs utilizadas</h2>
                <p> A  API principal nesta plataforma é Jikan</p>
                <p>Jikan is an Unofficial MyAnimeList API. It scrapes the website to satisfy the need for an API - which MyAnimeList 
                    lacks.The word Jikan literally translates to Time in Japanese (時間). And that's what this API saves you of.</p>
                <a href="https://jikan.docs.apiary.io/" target="_blank">Link da Documentação</a>
                <hr>
                <p>A segunda API é OpenWeatherMap.</p>
                <p>Access current weather data for any location on Earth including over 200,000 cities!
                     We collect and process weather data from different sources such as global and local weather models, satellites,
                     radars and vast network of weather stations. Data is available in JSON, XML, or HTML format.</p>
                <a href="https://openweathermap.org" target="_blank">Link da OpenWeatherMap </a><hr>

           
                <h3>Tecnologias Utilizadas</h3>
            <div class="container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/256px-HTML5_logo_and_wordmark.svg.png" alt="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png" alt="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/256px-Unofficial_JavaScript_logo_2.svg.png"  alt="">
                <a href="https://materializecss.com/" target="_blank">
                <img src="./imagens/materialize-seeklogo.com.svg"  alt="">
                </a>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/256px-JQuery-Logo.svg.png"  alt="">
                

            </div>

        </div>
        
        
        </main>

        

        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>     
        <script src="./js/anime.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>
            GetAnime(); 
        </script>

        

    </body>
</html>