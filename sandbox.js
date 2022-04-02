var character = 'mario';
var age = 30;
var isBlackBelt = false;
//character = 20; / EType 'number' is not assignable to type 'string'.
character = 'luigi';
//age =  'yoshi';  /Type 'string' is not assignable to type 'number'
age = 40;
var circ = function (diameter) {
    return diameter * Math.PI;
};
//console.log(circ('bh')); // Error : Argument of type 'string' is not assignable to parameter of type 'number'
console.log(circ(7.5));
