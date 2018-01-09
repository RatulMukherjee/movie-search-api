$(document).ready(function () {

  
    
    $("#search").submit(function (e) { 
        e.preventDefault();
        

      if($("#title").val() == '')
            alert('Please enter a Title or IMDb title');
      else{
        var url="../app/api/searchAPI.php/?"+$("#searchtype").val()+"="+$("#title").val();
        $.ajax({
            type: "get",
            url: url,
            success: function (response) {
                
              response=JSON.parse(response);
                console.log(response);
                

                $("#resultbody").empty();

                if (response.Response === 'False' && response.Error === 'Movie not found!' )

                {
                    alert("Sorry. We couldnt find anything in DB!");
                    $("#searchresult").addClass('invisible');


                }
                else if (response.Response === 'False' && response.Error === 'Error converting data type varchar to int.'){
                    
                        alert("Please enter an IMDB ID to search"); 
                        $("#searchresult").addClass('invisible');

                }
                else if (response.Response === 'False' && response.Error === 'Incorrect IMDb ID.'){

                    alert("Please enter a valid IMDB ID");
                    $("#searchresult").addClass('invisible');

                }
                 
                else {
                    $("#searchresult").removeClass('invisible');
                    $("#searchdiv").addClass(' animate');
                    str="";
                    if (response.Poster != "N/A")
                        str+="<tr><td><img class=\"movieposter\"  height=\"400\" width=\"300\" class=\"movieposter\"  src=\""+response.Poster+"\"></td>";
                    else
                         str+="<tr><td> <img class=\"movieposter\"  src=\"img/404.png\"></td>";    
                    str+='<td><span> <b>Title:</b> '+response.Title+'</span><br/><span><b>Ratings:</b></span>';  
                    if (response.Ratings.length>0)
                    {
                         var i=0;
                        while(i<response.Ratings.length) {
                        str+='<img src="img/logo'+i+'.png"> <span class="ratings">'+response.Ratings[i].Value+'</span>';
                        i++
                        // str+='<img src="https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/24/imdb.png">'+response.Ratings[0].Value;
                   
                        // str+='<img height="24" width="24" src="http://d1h29vyjy912l5.cloudfront.net/49/images/xhdpi/MetacriticLogo.png">'+response.Ratings[2].Value;


                        }
                    }  
    
                    str+='<br/> <span class="released"><b>Year of Release:</b> '+response.Released+'</span><br/>';
                    str+=' <span class="language"><b>Language:</b> '+response.Language+'</span>';
                    str+=' <br/> <span class="production"><b>Production House:</b> '+response.Production+'</span>';
                    str+=' <br/> <span class="rated"><b>Rated:</b> '+response.Rated+'</span>';
                    str+=' <span class="genre"><b>Genre:</b> '+response.Genre+'</span>';
                    str+=' <br/> <span class="runtime"><b>Runtime:</b> '+response.Runtime+'</span>';
                    str+=' <br/> <span class="director"><b>Director:</b> '+response.Director+'</span>';
                    str+=' <br/> <span class="cast"><b>Cast:</b> '+response.Actors+'</span>';
                    str+=' <br/> <span class="plot"><b>Plot:</b> '+response.Plot+'</span>';
                    
                    str+=' <br/> <span class="awards"><b>Awards:</b> '+response.Awards+'</span></td></tr>';
                    
                    
                    
                    $("#resultbody").append(str);

                }

            
                
            }
        });







      }      

       
        
    });


});
