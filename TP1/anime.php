<!DOCTYPE html>
<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="icon" href="imagens/icon.png">
        <link rel="stylesheet" href="https://bootswatch.com/cyborg/bootstrap.min.css">
        
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
                    <h1 id="h1">Procurar Anime</h1>
                 <div class="row"id="row">
                    <form id="search_form" class="col s12">
                        <div class="row">
                            <div class="input-field col s6"id="input">
                                <input placeholder="ex:naruto" name="search" id="search" type="text" class="validate">
                                <label for="search">Procurar</label>
                            </div>
                        </div>
                    </form>
                    <div class="custom-select" id="custom-select" >
                        <select id="generos" >
                        </select>
                        
                        </div> 
                    
                </div>
                
            </div>

            <div class="container" id="container-lista">
                <div id="search-results" class="container">
                </div>
            </div>
</main>


        <!-- Compiled and minified JavaScript -->
               
        <script src="./js/anime.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
        <script>
            $(document).ready(function() {
                $('select').material_select();
            });
        </script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>getGeneros();</script>
    </body>
</html>