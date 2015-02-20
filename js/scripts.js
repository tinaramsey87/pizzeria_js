var Pizza = {
  diameter: 0,
  slices: 0,
  toppings: "",

  size: function(inches) {
    this.diameter = this.diameter + inches
  },

  cut: function() {

    if (this.toppings === "pepperoni") {
      this.slices = Math.floor(this.diameter/1)
    } if (this.toppings === "cheese") {
      this.slices = Math.floor(this.diameter/0.75)
    } if (this.slices % 2 != 0) {
      this.slices = this.slices + 1
    }
  },
};

$(document).ready(function() {
  $("#pizza-select").submit(function(event) {
    var pizza = Object.create(Pizza)
    var diameter = parseInt($("input#diameter").val());
    var e = document.getElementById("topping");
    var topping = e.options[e.selectedIndex].value;
    $(pizza.toppings = topping);
    $(pizza.size(diameter));
    $(pizza.cut());
    debugger;

    $("#sliced").show();
    $(".diameter").text(diameter)
    $(".toppings").text(topping)
    $(".slices").text(pizza.slices)

    $("input#diameter").val("");

    event.preventDefault();
  });
});
