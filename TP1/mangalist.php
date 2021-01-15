<!DOCTYPE html>
<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="icon" href="imagens/icon.png">
        
    </head>
    <body>


        <header>
            <?php
            require_once("header.php");
            ?> 
        </header>

        <main>
            <div class="container" id="container-grande">
                <div class="container" id="container-pequeno">
                <h1 id="h1">Procurar Manga</h1>
                 <div class="row">
                    <form id="search_form" class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="ex:one" name="search" id="search" type="text" class="validate">
                                <label for="search">Procurar</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="container" id="container-lista">
                <div id="search-results" class="container">
                </div>
            </div>
        <main>

        

        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>        
        <script src="./js/manga.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </body>
    </body>
</html>