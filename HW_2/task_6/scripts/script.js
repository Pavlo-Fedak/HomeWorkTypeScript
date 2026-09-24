"use strict";
let strValue = prompt("enter number");
if (strValue !== null) {
    let numVaulue = +strValue;
    if (numVaulue !== 0) {
        console.log('right');
    }
    else {
        console.log('wrong');
    }
}
