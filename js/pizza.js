$(document).ready(function(){
  $('#carouselmoi').carousel({interval: 3000});



  $(".carousel-control-prev").click(function () {  
    $("#myCarousel").carousel("prev");
  }); 
  $(".carousel-control-next").click(function () {  
    $("#myCarousel").carousel("next");
  });


  $(".imageOne").click(function(){
    $("#carouselmoi").carousel(0);
  });
  $(".imageTwo").click(function(){
    $("#carouselmoi").carousel(1);
  });
  $(".imageThree").click(function(){
    $("#carouselmoi").carousel(2);
  });
  $(".imageFour").click(function(){
    $("carouselmoi").carousel(3);
  });


  });