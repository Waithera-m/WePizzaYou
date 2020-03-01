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



  function Medium (name, price){
    this.name = name;
    this.price = price;
  }
  var bbqPizza = new Medium("BBQ Pizza", 700);
  var periPeri = new Medium("Peri Peri Pizza", 700);
  var chickenTikka = new Medium("Chicken Tikka", 700);
  var veggieDelight = new Medium("Veggie Delght", 750);
  var pepperoniPizza = new Medium("Pepperoni Pizza", 700);
  var hawaiianPizza = new Medium("Hawaiian Pizza", 800);


  function Small (name, price){
    this.name = name;
    this.price = price;
  }
  var bbqPizza = new Small("BBQ Pizza", 600);
  var periPeri = new Small("Peri Peri Pizza", 600);
  var chickenTikka = new Small("Chicken Tikka", 600);
  var veggieDelight = new Small("Veggie Delght", 650);
  var pepperoniPizza = new Small("Pepperoni Pizza", 600);
  var hawaiianPizza = new Small("Hawaiian Pizza", 700);

  function Large (name, price){
    this.name = name;
    this.price = price;
  }
  var bbqPizza = new Large("BBQ Pizza", 900);
  var periPeri = new Large("Peri Peri Pizza", 900);
  var chickenTikka = new Large("Chicken Tikka", 900);
  var veggieDelight = new Large("Veggie Delght", 950);
  var pepperoniPizza = new Large("Pepperoni Pizza", 900);
  var hawaiianPizza = new Large("Hawaiian Pizza", 1000);

  });