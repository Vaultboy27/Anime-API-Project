
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>KontentsuFinder</title>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/icon.png"> 
    
    <link rel="stylesheet" href="css/meteo.css">   
</head>
<body>

    <header>

    <?php
        require_once("header.php");
    ?> 

        
        <div class="welcome-text">
                <h1>
        Bem Vindo ao <span>Kontentsu Finder</span></h1>
        <a href="SobrePlataforma.php">Sobre a plataforma</a>
        </div>

        <div class="container" >
        
        <div class="notification"> </div>
        <div class="weather-container">
            <div class="weather-icon">
                <img src="icons/unknown.png" alt="">
            </div>
            <div class="temperature-value">
                <p>- °<span>C</span></p>
            </div>
            <div class="temperature-description">
                <p> - </p>
            </div>
            <div class="location">
                <p>-</p>
            </div>
        </div>
    </div>

    </header>

    <script src="./js/meteo.js"></script>

</body>
</html>
