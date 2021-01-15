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
        <script src="./js/anime.js"></script>
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
            
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <script>
                $(document).ready(function() {
                    $('.carousel').carousel();
                });
            </script>
            <script>
                GetAnime();
            </script>
            <script>
                    $('.chips').chips();
                    $('.chips-initial').chips({
                        data: [{
                        tag: 'Apple',
                        }, {
                        tag: 'Microsoft',
                        }, {
                        tag: 'Google',
                        }],
                    });
                    $('.chips-placeholder').chips({
                        placeholder: 'Enter a tag',
                        secondaryPlaceholder: '+Tag',
                    });
                    $('.chips-autocomplete').chips({
                        autocompleteOptions: {
                        data: {
                            'Apple': null,
                            'Microsoft': null,
                            'Google': null
                        },
                        limit: Infinity,
                        minLength: 1
                        }
                    });
            </script>





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
                <h4>Imagens</h4>
                <div class="carousel" id="carousel">
                    
                </div>
                <h4>Trailer:</h4>
                <div id="trailer">
                </div>

        </div>
    
        </main>
        

        

        <!-- Compiled and minified JavaScript -->
             
        
    
    </body>
</html>