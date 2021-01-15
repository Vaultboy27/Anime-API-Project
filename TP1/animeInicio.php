<!DOCTYPE html>
<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="icon" href="imagens/icon.png">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        
    </head>
    <body>

        <header>
            <?php
            require_once("header.php");
            ?> 
        </header>
        <main>
            

            <div class="container" id="container-lista">

            <h2 id="h2">Anime</h2>
            <a class="waves-effect waves-light btn" id="butoes" href="anime.php"><i class="material-icons left ">search</i>Procurar anime</a>
            <a class="waves-effect waves-light btn" id="butoes" href="Seasons.php"><i class="material-icons left ">beach_access</i>Procurar por Seasons</a>

                <div id="search-results" class="container">
                    
                <section id="secao">
                    <h3>Top Airing Anime<hr></h3>
                    <div class="kemicofa-row" id="topairing">
                    </div>
                </section>
                <section id="secao">
                    <h3>Top Upcoming Anime<hr></h3>
                    <div class="kemicofa-row" id="topupcoming">
                    </div>
                </section>
                <section id="secao">
                    <h3>Top Anime<hr></h3>
                    <div class="kemicofa-row" id="top">
                    </div>
                </section>

                </div>
            </div>
</main>


        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>        
        <script src="./js/animeI.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>TopAnimeAiring();</script>
        <script>TopAnimeUpcoming();</script>
        <script>TopAnime();</script>
        
    </body>
</html>