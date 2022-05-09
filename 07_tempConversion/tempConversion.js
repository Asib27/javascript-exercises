const ftoc = function(far) {
  let c = (far-32) * 5.0 / 9
  return Math.round(c * 10) / 10.0;
};

const ctof = function(cel) {
  let f = cel * 9.0 / 5 + 32
  return Math.round(f * 10) / 10.0;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
