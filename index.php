<?php
  //Post code to database
  if (!empty($_POST)) {
    $mysqli = new mysqli('localhost', 'root', '901jumper', 'codecoop');
    
    $html = htmlspecialchars( $mysqli->real_escape_string($_POST['html']));
    $css = htmlspecialchars( $mysqli->real_escape_string($_POST['css']));

    $query = "INSERT INTO codesnippets (html, css) VALUES ('$html', '$css')";
    $mysqli->query($query);
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Skillfission</title>

  <!-- Load jQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  
  <!-- Load Twitter Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  
  <!-- Load Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link href='http://fonts.googleapis.com/css?family=Montserrat: 400,700|Quicksand' rel='stylesheet' type='text/css'>
  
  <!-- Load Fonts -->
  <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
  <link href="css/fonts.css" rel="stylesheet"/>

  <!-- Load Hover Css -->
  <link href="css/hover-min.css" rel="stylesheet" />

  <!-- Load Code Mirror -->
  <script src="codemirror/lib/codemirror.js"></script>
  <link rel="stylesheet" href="codemirror/lib/codemirror.css">
  <script src="codemirror/mode/css/css.js"></script>
  <script src="codemirror/mode/xml/xml.js"></script>
  <script src="codemirror/mode/htmlmixed/htmlmixed.js"></script>
  <link href="https://codemirror.net/theme/mdn-like.css" rel="stylesheet" />
  <link href="https://codemirror.net/theme/3024-day.css" rel="stylesheet" />
  <link href="https://codemirror.net/theme/3024-night.css" rel="stylesheet" />
  <link href="codemirror/themes/htmltheme.css" rel="stylesheet" />
  <link href="codemirror/themes/csstheme.css" rel="stylesheet" />

  <!-- Load TogetherJS -->
  <script src="https://togetherjs.com/togetherjs-min.js"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>

  <div id="site" class="container-fluid">
    <div class="row logo text-center">
      <img class="logo-component" src="images/sf-logo.svg" height="120" width="120" alt="Skillfission Logo"/>
      <h2 class="logo-component">skillfission</h2>
    </div>
    <div class="row tagline text-center">
      <h3>Learn Web Design.</h3>
    </div>
  </div>

  <!-- Main Web App -->
  <div id="main" class="container-fluid">
    <!-- From posts code snippets to database -->
    <form method="post" action="">
      <div class="row">
        <section class="action-area col-md-6"> 

          <!-- Code editors -->
          <section class="code-area row">
            <div id="html-editor" class="editor col-md-6">
              <textarea type="text" name="html" id="html-instance" class="editor-instance">
              </textarea>
            </div>
            <div id="css-editor" class="editor col-md-6">
              <textarea type="text" name="css" id="css-instance" class="editor-instance">
              </textarea>
            </div>
          </section>

          <!-- Output frame -->
          <section class="output-area row">
            <iframe name="codeOutput" class="output col-md-12" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>   
          </section>   
        </section>

        <!-- Chat and Tutorial-->
        <section class="text-center chat col-md-6">
          <div class="row logo">
            <img class="logo-component" src="images/sf-logo.svg" height="50" width="50" alt="Skillfission Logo"/>
            <h2 class="logo-component">skillfission</h2>
          </div>
          <div class="row video-tutorial">
            <iframe width="504" height="283.5" src="https://www.youtube.com/embed/LqvFIuVlyP8?list=PL41lfR-6DnOruqMacTfff1zrEcqtmm7Fv&controls=0&iv_load_policy=3&showinfo=0&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </section>
      </div>
      <div class="row text-center control-panel">
        <div class="col-md-1"></div>
        <div class="col-md-1">
          <div id="collaborate" class="action-btn">
            <button class="hvr-grow" onclick="TogetherJS(this); return false;">
              <i class="fa fa-users"></i>
            </button> 
            <br>
            Collaborate 
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-1">
          <div id="save-code" class="action-btn">
            <button class="hvr-grow" type="submit" name="save">
              <i class="fa fa-floppy-o"></i>
            </button>
            <br>
            Save
          </div>
        </div>
      </div>
    </form>    
  </div>



  <!-- Code editor functionality -->
  <script src="code.js"></script>

  <!-- User Experience -->
  <script src="ux.js"></script>
</body>

</html>