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
