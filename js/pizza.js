$(document).ready(function(){
  $("#carouselmoi").carousel();



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

  function Pizza(name, size, toppings, crust, quantity, delivery){
    this.pizzas = {
      "bbq":{"small":600, "medium":700, "large":900},
      "periPeri":{"small":600, "medium":700, "large":900},
      "chikenTikka":{"small":600, "medium":700, "large":900},
      "veggieDelight":{"small":600, "medium":700, "large":900},
      "hawaiian":{"small":600, "medium":700, "large":900}
    };
    this.toppings = {
      "bacon": 100,
      "pepperoni": 100,
      "mushroom": 100,
      "tikkaChicken": 100,
      "mixPeppers":50,
      "tomatoes":50
    };
    this.crusts = {
      "crispy": 100,
      "stuffed": 200,
      "glutenFree": 300
    };

    this.delivery = {
      "delivery": 100,
      "pickup": 0
    }

    this.price = (this.pizzas[name][size] + this.toppings[toppings] + this.crusts[crust] + this.delivery[delivery]) * quantity;
  }



  $('#get_pizza').on('click', function(){
    
    var type_of_pizza = $('#type_of_pizza').val()
    var size_of_pizza = $('#size_of_pizza').val()
    var toppings = $('#toppings').val()
    var crust_of_pizza = $('#crust_of_pizza').val()
    var quantity = parseInt($('#quantity').val());
    var delivery = $('#delivery').val();
    var pizzaCost = new Pizza(type_of_pizza, size_of_pizza, toppings, crust_of_pizza, quantity, delivery);

    if(delivery === 'delivery'){
      alert("This will cost Ksh"+ pizzaCost.delivery[delivery] + " more" )
    }

    alert("Your Pizza cost is: " + pizzaCost.price);
    // console.log([type_of_pizza, size_of_pizza, toppings, crust_of_pizza,delivery, quantity ])
    
    // console.log(pizzaCost);
    // console.log("Your pizza price is:", pizzaCost.price);
    // console.log("Your pizza type price is:", pizzaCost.pizzas[type_of_pizza][size_of_pizza]);


  });

  });