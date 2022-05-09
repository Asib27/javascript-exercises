const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((s, cur)=> s+cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((pro, el) => pro * el, 1);
};

const power = function(a, b) {
	let pro = 1;
  for(let i = 0; i < b; i++)
    pro *= a;
  return pro;
};

const factorial = function(b) {
	let pro = 1;
  for(let i = 0; i < b; i++)
    pro *= i+1;
  return pro;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
