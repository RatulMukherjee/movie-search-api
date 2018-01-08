<?php

class SearchHandlerBL 
{
    private $apikey;
    private $apiURL;
	public function __construct()
	{
        $this->apikey='a4132ce4';
        $this->apiURL='http://www.omdbapi.com/';
		
    }
    
    public function searchHandler($params){

        $url=$this->apiURL;

        if (isset($params['t'])){
            $url.='?apikey='.$this->apikey.'&t='.urlencode($params['t']);

        }
        else
        {
            $url.='?apikey='.$this->apikey.'&i='.urlencode($params['i']);

        }

        if (isset($params['type']))
            $url.='&type='.$params['type'];
        
        if (isset($params['y']))
            $url.='&y='.$params['y'];
        

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL =>$url,
            CURLOPT_USERAGENT => 'API Request'
        ));

        $resp = curl_exec($curl);
        curl_close($curl);
        echo $resp;

       


    }
}

    
    
?>