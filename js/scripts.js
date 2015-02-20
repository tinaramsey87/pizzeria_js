var Pizza = {
  diameter: 0,
  slices: 0,
  toppings: "",

  size: function(inches) {
    this.diameter = this.diameter + inches
  },

  cut: function() {

    if ((this.toppings === "cheese") || (this.toppings === "formaggio")) {
      this.slices = Math.floor(this.diameter/0.75)
    } else {
      this.slices = Math.floor(this.diameter/1)
    } if (this.slices % 2 != 0) {
      this.slices = this.slices + 1
    }
  },
};

$(document).ready(function() {
  $("#italian").click(function(event) {
    $("#menu-english").hide();
    $("#menu-italian").show();
    $(".eng-head").hide();
    $(".ital-head").show();
    $("#sliced-english").hide();
  });

  $("#english").click(function(event) {
    $("#menu-english").show();
    $("#menu-italian").hide();
    $(".eng-head").show();
    $(".ital-head").hide();
    $("#sliced-italian").hide();
  });

  $("#about").click(function(event) {
    $("#about").hide();
    $("#order").show();
    $("#menu-english").hide();
    $("#menu-italian").hide();
    $("#about-english").show();
    $("#about-italian").show();
    $("#sliced-english").hide();
    $("#sliced-italian").hide();
  });

  $("#order").click(function(event) {
    $("#about").show();
    $("#order").hide();
    $("#menu-english").show();
    $("#menu-italian").hide();
    $("#about-english").hide();
    $("#about-italian").hide();
  });


  $("#pizza-select-eng").submit(function(event) {
    var pizza = Object.create(Pizza)
    var diameter = parseInt($("input#diameter").val());
    var e = document.getElementById("topping");
    var topping = e.options[e.selectedIndex].value;
    $(pizza.toppings = topping);
    $(pizza.size(diameter));

    if (pizza.diameter <= 6) {
      $("#noway").show();
      $("#sliced-english").hide();
    } else {
      $(pizza.cut());

      $("#sliced-english").show();
      $("#noway").hide();
      $(".diameter").text(diameter)
      $(".toppings").text(topping)
      $(".slices").text(pizza.slices)
    }

    $("input#diameter").val("");

    event.preventDefault();
  });


  $("#pizza-select-ital").submit(function(event) {
    var pizza = Object.create(Pizza)
    var diameter = parseInt($("input#diameter2").val());
    var e = document.getElementById("topping2");
    var topping = e.options[e.selectedIndex].value;
    $(pizza.toppings = topping);
    $(pizza.size(diameter));

    if (pizza.diameter <= 6) {
      $("#noway2").show();
      $("#sliced-italian").hide();
    } else {
      $(pizza.cut());
      $("#sliced-italian").show();
      $("#noway2").hide();
      $(".diameter").text(diameter)
      $(".toppings").text(topping)
      $(".slices").text(pizza.slices)
    }

    $("input#diameter").val("");

    event.preventDefault();
  });
});
