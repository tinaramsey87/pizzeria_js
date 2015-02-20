describe("Pizza", function() {
  describe("size", function() {
    it("returns the pizza diameter in inches", function () {
      var testPizza = Object.create(Pizza)
      testPizza.size(10)
      expect(testPizza.diameter).to.equal(10)
    });
  });

  describe("cut", function() {
    it("returns more slices if the pizza is cheese pizza", function() {
      var testPizza = Object.create(Pizza)
      testPizza.toppings = "cheese"
      testPizza.size(15)
      testPizza.cut()
      expect(testPizza.slices).to.equal(20)
    });
    it("returns less slices if the pizza is pepperoni", function() {
      var testPizza = Object.create(Pizza)
      testPizza.toppings = "pepperoni"
      testPizza.size(15)
      testPizza.cut()
      expect(testPizza.slices).to.equal(16)
    });
    it("returns an even number of pizza slices", function() {
      var testPizza = Object.create(Pizza)
      testPizza.toppings = "pepperoni"
      testPizza.size(15)
      testPizza.cut()
      expect(testPizza.slices).to.equal(16)
    });


  });


});
