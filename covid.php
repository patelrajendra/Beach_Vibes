<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title></title>
  </head>
  <body>
<section class="corono-update container-fluid">
  <div class="table-responsive">



<table class="table table-bordered table-striped text-center">
  <tr>
    <th>a</th>
    <th>b</th>
    <th>v</th>
    <th>d</th>
    <th>f</th>
    <th>g</th>
    <th>g</th>
  </tr>
  <?php

$data = file_get_contents('https://api.covid19india.org/data.json');
$coranalive = json_decode($data, true);

$statescount = count($coranalive['statewise']);

 <!--  If you like my videos then plz subscribe and leave a comment on the video about your experience ok   -->


$i=1;
while($i < $statescount){

  echo $coranalive['statewise'][$i]['lastupdatedtime'] . "<br>"  ;
  echo $coranalive['statewise'][$i]['state'] . "<br>"  ;
  echo $coranalive['statewise'][$i]['confirmed'] . "<br>"  ;
  echo $coranalive['statewise'][$i]['active'] . "<br>"  ;
  echo $coranalive['statewise'][$i]['recovered'] . "<br>"  ;
  echo $coranalive['statewise'][$i]['deaths'] . "<br>"  ;

  $i++;
}


?>
</table>
  </div>
</section>


  </body>
</html>
