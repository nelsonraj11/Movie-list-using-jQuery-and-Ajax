
 $(document).ready(function(){
    $("#contactus").click(function(){
        $("#second").load("contactus.html");
    });
});

  $(document).ready(function(){
    $("#aboutus").click(function(){
        $("#second").load("aboutus.html");
    });
});

$(document).ready(function(){
      $.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821",function(data){
         $.each(data.results,function(key,value){
            console.log(key, value);
             $("#movies").append('<li><a href="#" onClick="Details(\'' + value.id + '\'); return false;">' + value.title + '</a></li>'); 
    });
   });
 });

function Details(id)
{
 $("#leftpart").css("width","50%");
 $("#rightpart").css("width","50%");
  var link='http://api.themoviedb.org/3/movie/'+id+'?api_key=22d8568621673d1336e8d0d1fb253821';
 $.getJSON(link,function(data){
        var poster = 'https://image.tmdb.org/t/p/w500'+data.poster_path;
        console.log(poster);
        $("#poster").attr("src",poster).attr('width', 200).attr('height', 450);
        $("#title").html("Movie Title : " +data.title);
        $("#date_of_release").html("Date of Release : " +data.release_date);
        $("#rating").html("Rating : "+data.vote_average);
        $("#vote_count").html("VOte Count : " +data.vote_count);
        $("#popularity").html("Popularity : " +data.popularity);
        $("#budget").html("Movie Budget : " +data.budget);
});
}

