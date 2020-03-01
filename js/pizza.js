$(document).ready(function(){
  $("#carouselmoi").carousel(data-interval="12000");



  $(".carousel-control-prev").click(function () {  
    $("#carouselmoi").carousel("prev");
  }); 
  $(".carousel-control-next").click(function () {  
    $("#carouselmoi").carousel("next");
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



  function Pizza(description, ingredients, price, size){
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.size = size;
  }

  var bbqPizza = new Pizza (["Beef Steak", "Red Onions", "Sweet Corn", "BBQ Sauce"], ["BBQ Sauce", "Pizza Cheese", "Corn", "Onion", "Beef Steak"], [700, 700, 800, 950, 950, 500], [""]


  });