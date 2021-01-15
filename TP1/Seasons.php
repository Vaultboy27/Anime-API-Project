<!DOCTYPE html>
<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="./css/seasons.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="icon" href="imagens/icon.png">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
    </head>
    <body>

        <header>
            <?php
            require_once("header.php");
            ?> 
        </header>
        <main>
        
            <div class="container" id="container-select">
                <h1 id="h1">Selecionar Season</h1>
                        <div class="custom-select" id="#custom-select" >
                        <select id="seasons" >
                            <option value="winter">Inverno</option>
                            <option value="spring">Primavera</option>
                            <option value="summer">Verão</option>
                            <option value="fall">Outono</option>
                        </select>
                        </div>
                
                <input type="number" id="ano" value="2020" name="quantity" min="1963" max="2021">
                
                <a class="waves-effect waves-light btn" id="button-pesquisar"  onclick="searchAnime()"><i class="material-icons left ">search</i>Procurar anime</a>
                
            </div>
            
            <div class="container" id="container-lista2">
                <div id="search-results" class="container">
                </div>
            </div>
        
        </main>


        <!-- Compiled and minified JavaScript -->
                
        
        <script src="./js/seasons.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
        <script>
            $(document).ready(function() {
                $('select').material_select();
            });
        </script>
    </body>
</html>