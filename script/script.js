// Global Declaration
var URL_KEY="http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821";
var URL='http://api.themoviedb.org/3/movie/';
var KEY='?api_key=22d8568621673d1336e8d0d1fb253821';
var POSTER='https://image.tmdb.org/t/p/w500';
// End Global declaration

// // Display Movie List
$(document).ready(function(){

      $.getJSON(URL_KEY,function(data){
         $.each(data.results,function(key,value){
            console.log(key, value);
             $("#movies").append('<li><a href="#" onClick="Details('+ value.id +'); return false;">' + value.title + '</a></li>'); 
    });
   });
 });

function Details(id){

 $("#leftpart").css("width","50%");
  $("#rightpart").css("width","50%");
    var link=URL+id+KEY;
      $.getJSON(link,function(data){
        var poster = POSTER+data.poster_path;
          console.log(poster);
            $("#poster").attr("src",poster).attr('width', 200).attr('height', 400);
            $("#title").html("Movie Title : " +data.title);
            $("#date_of_release").html("Date of Release : " +data.release_date);
            $("#rating").html("Rating : "+data.vote_average);
            $("#vote_count").html("VOte Count : " +data.vote_count);
            $("#popularity").html("Popularity : " +data.popularity);
            $("#budget").html("Movie Budget : " +data.budget);
});
}
// // End display movie list

// about us call back 
function about(aboutus){
     
      $("#text").hide();
      $.getJSON("json/abt.json",function(data){
        $.each(data.abouts,function(key,value){
          console.log(key, value);
            $("#au").html(calling(value.abt, value.first, value.second, value.third));
    });
   }); 
}

function calling(abt, first,second,third){

  var output = '<div class="container"> <div class="jumbotron"> <span class="title">' + abt + ' </br> </span> <span class="content">' + first + '</span> <span class="content">' + second + '</span><span class="content">' + third + '</span></div></div>';
    console.log(output);
      return output;
  }
// end about us call back

// // Contact call back 
function contact(contactus){

      $("#text").text("Contact Us!");
      $("div#au").html(   
        $("<form/>",{action:'#', method:'#'}).append(   
          $("<input/>", {type:'text', id:'vname', name:'name', placeholder:'Your Name'}), 
          $("<br/>"),
          $("<br/>"),
          $("<input/>", {type:'text', id:'vemail', name:'email', placeholder:'Your Email'}),
          $("<br/>"),
          $("<br/>"),
          $("<textarea/>", {rows:'5px', cols:'27px', type:'text', id:'vmsg', name:'msg', placeholder:'Message'}),
          $("<br/>"),
          $("<br/>"),
          $("<input/>", {type:'submit', id:'submit', value:'Submit'})
          )
          ) 
}
// end contact us call back







