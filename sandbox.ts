
let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20; / EType 'number' is not assignable to type 'string'.
character= 'luigi';

//age =  'yoshi';  /Type 'string' is not assignable to type 'number'
age= 40;

const circ = (diameter : number) => {
    return diameter * Math.PI;
}

//console.log(circ('bh')); // Error : Argument of type 'string' is not assignable to parameter of type 'number'
console.log(circ(7.5));
