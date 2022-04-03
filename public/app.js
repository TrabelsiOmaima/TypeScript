"use strict";
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// ----------------------- inputs  
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//---- event 
form.addEventListener('submit', (e) => {
    e.preventDefault(); //auto refreche page 
    console.log(//recupere values input par user
    type.value, tofrom.value, details.value, amount.valueAsNumber // recupere values input par user + cast to number
    );
});
