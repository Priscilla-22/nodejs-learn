//every file is a module by default
//modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind');

console.log(data);
sayHi('Susan');
sayHi(names.AlCollins);
sayHi(names.peter);
