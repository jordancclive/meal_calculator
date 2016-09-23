import functionName from 'someModule.js';




var Diner;
var Bill;



module.exports = {
	Diner: Diner,
  Bill: Bill
};

diner_test.js

//first import diner and bill class

describe("All the tests for the diner class", function(){

	it("should create a new diner", function(){
  	var person = new Diner("Jerry");
    expect(person.name.toEqual("jerry"), "Name was configured wrong");
  });

  it("should calculate price correctly", function(){
    person.order(soda, grapefruit, pizza, cookie);
    expect(person.checkprice.toEqual(20), "Price does not calculate correctly");
  })

})



var someObj = require("diner.js");
/*
someObj = {
	Diner: Diner constructor function
  Bill: Bill constructor function
}
*/
