<?php

require_once('../BL/searchHandlerBL.php');

    if (isset($_GET['t'])||isset($_GET['i']))
    {
        $SH= new searchHandlerBL();

        $SH->searchHandler($_GET);
      

    }else{

        echo "Please enter a title or IMDb id to search for";


    }
    




?>
