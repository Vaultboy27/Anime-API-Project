<!DOCTYPE html>
<html>
    <head>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/anime.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/calendario.css">
        <link rel="icon" href="imagens/icon.png">
        
        
        
    </head>
    <body>

        <header>
            <?php
            require_once("header.php");
            ?> 
        </header>
        <main>

            <div class="container" id="container-lista">
                <h1 id="h1">Animes Semanais</h1>
                <div class="row">
                    <div class="col s12" >
                    <ul class="tabs"id="col_s12">
                        <li class="tab col s3"><a class="active" href="#test1">Segunda-Feira</a></li>
                        <li class="tab col s3"><a href="#test2">Terça-Feira</a></li>
                        <li class="tab col s3"><a href="#test3">Quarta-Feira</a></li>
                        <li class="tab col s3"><a href="#test4">Quinta-Feira</a></li>
                        <li class="tab col s3"><a href="#test5">Sexta-Feira</a></li>
                        <li class="tab col s3"><a href="#test6">Sábado</a></li>
                        <li class="tab col s3"><a href="#test7">Domingo</a></li>
                    </ul>
                    </div>
                    <div id="test1" class="col s12">
                        
                    </div>
                    <div id="test2" class="col s12">
                        
                    </div>
                    <div id="test3" class="col s12">
                        
                    </div>
                    <div id="test4" class="col s12">
                        
                    </div>
                    <div id="test5" class="col s12">
                        
                    </div>
                    <div id="test6" class="col s12">
                        
                    </div>
                    <div id="test7" class="col s12">
                        
                    </div>
                </div>

                <div id="search-results" class="container">
                </div>

            </div>
</main>


        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>        
        <script src="./js/anime.js"></script>
        <script src="./js/calendario.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>
                $(document).ready(function(){
                    $('.tabs').tabs();
                });
        </script>
        <script>

                var el = document.querySelector('.tabs');
                var instance = M.Tabs.init(el, {});
        </script>
        <script>
            GetAnimeSegunda();
            GetAnimeTerça();
            GetAnimeQuarta();
            GetAnimeQuinta();
            GetAnimeSexta();
            GetAnimeSabado();
            GetAnimeDomingo();
        </script>
        
    </body>
</html>