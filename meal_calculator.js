const TAX_RATE = 0.07;
const TIP_RATE = 0.15;

// FOOD
var pizza_slice = {
  price: 3
}
var salad = {
  price: 5
}
var fruit_bowl = {
  price: 4
}

// DRINKS
var soda_can = {
  price: 1
}
var juice = {
  name: "juice",
  price: 2
}

var milk = {
  name: "milk",
  price: 2
}

function Diner(name){
  this.name = name;
  this.meal = [];
}

Diner.prototype.order = function(item){
  this.meal.push(item);
  // for (var i=0; i<arguments.length; i++){
  //   this.meal.push(arguments[i]);
  // }
}

Diner.prototype.check_price = function(){
  var meal_price = 0;
  for (var i=0; i<this.meal.length; i++){
    meal_price += this.meal[i].price;
  }
  return meal_price;
}

Diner.prototype.check_tax = function(){
  return this.check_price() * (TAX_RATE);
}

Diner.prototype.check_tip = function(){
  return this.check_price() * (TIP_RATE);
}

function Bill(){
  this.diners = [];
  this.tip_total = 0;
  this.total = 0;
}

Bill.prototype.add_diner = function(diner){
  this.diners.push(diner);
}

Bill.prototype.print_diners = function(){
  // for of loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  for (var elem of this.diners){
    console.log(elem.check_price());
    console.log(elem.check_tip());
    console.log(elem.check_tax());
  }
}

var Patrick = new Diner("Patrick");
console.log(Patrick.order(juice));
console.log(Patrick.order(milk));
console.log(Patrick.check_price())
console.log(Patrick.check_tip());
console.log(Patrick.check_tax());;
;
