exports.numFormatter = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// console.log(module);
module.exports = exports;

//node
//numbers = require('./index');
//numbers.getRandomColor();
//numbers.getBlue();