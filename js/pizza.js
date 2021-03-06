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
      "delivery": 200,
      "pickup": 0
    }
    
    this.price = (this.pizzas[name][size] + this.toppings[toppings] + this.crusts[crust] + this.delivery[delivery]) * quantity;
  }

  Pizza.prototype.summary = function(){
    return [typeOfPizza, sizeOfPizza, toppings, crustOfPizza, deliveryLocation, quantity]
  }

  $("#get_pizza").on("click", function(){
    
    var typeOfPizza = $("#typeOfPizza").val()
    var sizeOfPizza = $("#sizeOfPizza").val()
    var toppings = $("#toppings").val()
    var crustOfPizza = $("#crustOfPizza").val()
    var quantity = parseInt($("#quantity").val());
    var delivery = $("#delivery").val();
    var pizzaCost = new Pizza(typeOfPizza, sizeOfPizza, toppings, crustOfPizza, quantity, delivery);

    if(delivery === "delivery"){
      swal("This will cost Ksh"+ pizzaCost.delivery[delivery] + " more" );
    }
    if(delivery === "delivery"){
      var deliveryLocation=prompt("Please enter delivery location: ")
      alert("Your pizza will be delivered to: " + deliveryLocation)
    }
  
    $(".typeOfPizza").append(typeOfPizza);
    $(".sizeOfPizza").append(sizeOfPizza);
    $(".crustOfPizza").append(crustOfPizza);
    $(".toppings").append(toppings);
    $(".quantity").append(quantity);
    $(".total").append(pizzaCost.price);

  
    // swal("Your Pizza cost is: " + pizzaCost.price)
    
    // console.log(this.summary)
  
    // alert("Your Pizza cost is: " + pizzaCost.price)
    
    
    // console.log(pizzaCost);
    // console.log("Your pizza price is:", pizzaCost.price);
    // console.log("Your pizza type price is:", pizzaCost.pizzas[typeOfPizza][sizeOfPizza]);


  });
  
  

  });
  function clearForm() {
    document.getElementsByTagName("form").reset();
  }

  