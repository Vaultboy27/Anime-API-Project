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
        
        <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
        </div>

        
        <header>
        <?php
        require_once("header.php");
        ?> 
        </header>
        <main>

        
                
        <div class="container" id="container-new">
                <div id="anime" class="container">
                </div>
        </div>
        
        
        </main>

        

        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>        
        <script src="./js/manga.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>
            GetManga();
        </script>
        

    </body>
</html>